import React, { useState } from "react";
import Image from "next/image";
import { deleteMessage } from "@/utils/chatUtils"; // Importing the utility function
import { useUserContext } from "@/context/userContext";

const ChatBubble = (props) => {
  const {
    message,
    avatar,
    status = "Delivered",
    align = "left",
    bubbleColor = "green",
  } = props;
  const [showOptions, setShowOption] = useState(false);
  const { currentUser } = useUserContext();

  const alignVariant = {
    left: "justify-start",
    right: "justify-end",
  };

  const bubbleColorVariants = {
    green: "bg-chat-green",
    gray: "bg-chat-gray",
  };

  const handleDelete = () => {
    deleteMessage(currentUser.id, message.id);
    setShowOption(false);
  };
  return (
    <div
      className={`flex w-full items-start gap-2.5 drop-shadow-md ${alignVariant[align]}`}
    >
      {avatar && (
        <Image
          className="rounded-full"
          width={32}
          height={32}
          src={avatar}
          alt="user image"
        />
      )}
      <div
        className={`flex flex-col max-w-3/4 leading-1.5 p-4 border-gray-200 ${bubbleColorVariants[bubbleColor]} rounded-e-xl rounded-es-xl`}
      >
        <div className="flex items-center">
          <span className="text-sm font-semibold text-white">
            {message.name}
          </span>
          <span className=" text-[10px] font-normal text-gray-400">
            {message.timestamp}
          </span>
        </div>
        <p className="text-sm font-normal py-1 text-white">{message.text}</p>
        <span className="text-xs font-normal text-gray-400">{status}</span>
      </div>
      <button
        id="dropdownMenuIconButton"
        data-dropdown-toggle="dropdownDots"
        data-dropdown-placement="bottom-start"
        className="inline-flex self-center items-center p-2 text-sm font-medium text-center text-white bg-dark-bg rounded-lg hover:bg-light-gray focus:ring-4 focus:outline-none"
        type="button"
        onClick={() => {
          setShowOption(!showOptions);
        }}
      >
        <svg
          className="w-4 h-4 text-gray-200"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 4 15"
        >
          <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
        </svg>
      </button>
      <div
        id="dropdownDots"
        className={`z-10 ${
          showOptions ? "flex" : "hidden"
        } bg-dark-bg divide-y divide-gray-100 rounded-lg shadow w-40`}
      >
        <ul
          className="py-2 text-sm text-white w-full"
          aria-labelledby="dropdownMenuIconButton"
        >
          <li>
            <button
              onClick={handleDelete}
              className="block w-full px-4 py-1.5 bg-dark-bg hover:bg-dark-gray"
            >
              Delete
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ChatBubble;
