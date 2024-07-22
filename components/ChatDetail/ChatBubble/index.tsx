import React, { useState } from "react";
import Image from "next/image";
import { copyToClipboard } from "@/utils/miscellaneous";
import { EMOJIES } from "@/constants/dummyData";
import { User, Message, Emoji } from "@/lib/types";

type ChatBubbleProps = {
  message: Message;
  avatar: string;
  status?: "Delivered" | "Sent" | "Seen" | "";
  align?: "left" | "right";
  bubbleColor?: "green" | "gray";
};

/**
 * ChatBubble component represents a single chat message bubble in a chat conversation.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.message - The message object containing message details.
 * @param {string} props.avatar - The URL of the sender's avatar.
 * @param {string} [props.status="Delivered"] - The status of the message (e.g., Delivered, Read).
 * @param {string} [props.align="left"] - Alignment of the chat bubble ("left" or "right").
 * @param {string} [props.bubbleColor="green"] - Color of the chat bubble ("green" or "gray").
 *
 * @returns {JSX.Element} The ChatBubble component.
 */
const ChatBubble = (props: ChatBubbleProps): JSX.Element => {
  const {
    message,
    avatar,
    status = "Delivered",
    align = "left",
    bubbleColor = "green",
  } = props;
  const [showOptions, setShowOption] = useState<boolean>(false);
  const [hasStar, setHasStar] = useState<boolean>(false);
  const [selectedEmoji, setSelectedEmoji] = useState<Emoji | null>(null);

  const alignVariant = {
    left: "justify-start",
    right: "justify-end",
  };

  const bubbleColorVariants = {
    green: "bg-chat-green",
    gray: "bg-chat-gray",
  };

  const handleStar = (): void => {
    setHasStar(!hasStar);
    setShowOption(false);
  };

  const handleCopy = (): void => {
    copyToClipboard(message.text);
    setShowOption(false);
  };

  const handleAddReaction = (emoji: Emoji): void => {
    setSelectedEmoji(emoji);
    setShowOption(false);
  };
  return (
    <div
      className={`flex w-full items-start gap-2.5 drop-shadow-md ${
        alignVariant[align]
      } ${selectedEmoji && "mb-2"}`}
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
        className={`flex relative flex-col max-w-3/4 leading-1.5 px-4 py-2 border-gray-200 ${bubbleColorVariants[bubbleColor]} rounded-e-xl rounded-es-xl`}
      >
        {selectedEmoji && (
          <div
            className="absolute bottom-[-14px] right-2 bg-dark-bg p-0.5 rounded-full group hover:p-1"
            onClick={() => setSelectedEmoji(null)}
          >
            <div className="relative w-5 h-5 ">
              <Image
                src={`/images/emoji/${selectedEmoji}.svg`}
                alt="emoji icon"
                fill
              />
            </div>
          </div>
        )}

        <div className="flex items-center"></div>
        <p className="text-sm font-normal py-1 text-white">{message.text}</p>
        <div className="flex w-full justify-end items-center">
          <Image
            src={"/images/close-star-icon.svg"}
            alt="star icon"
            width={12}
            height={12}
            className={"mr-1.5 " + (hasStar ? "block" : "hidden")}
          />
          <span className="text-[10px] font-normal text-gray-400">
            {message.timestamp}
          </span>
        </div>
      </div>
      <button
        id="dropdownMenuIconButton"
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
          className="py-2 text-sm text-white w-full min-w-[160px]"
          aria-labelledby="dropdownMenuIconButton"
        >
          <li>
            <button
              onClick={handleStar}
              className={
                "flex items-center gap-4 w-full px-4 py-1.5 bg-dark-bg hover:bg-dark-gray"
              }
            >
              <Image
                src={
                  hasStar
                    ? "/images/close-star-icon.svg"
                    : "/images/open-star-icon.svg"
                }
                alt="star icon"
                width={18}
                height={18}
              />
              {hasStar ? "Unstar" : "Star"}
            </button>

            <button
              onClick={handleCopy}
              className={
                "flex items-center gap-4 w-full px-4 py-1.5 bg-dark-bg hover:bg-dark-gray"
              }
            >
              <Image
                src={"/images/copy-icon.svg"}
                alt="copy icon"
                width={16}
                height={16}
              />
              Copy
            </button>
            <div className="w-full flex px-2 pt-2">
              {EMOJIES.map((emoji: Emoji) => {
                return (
                  <div
                    key={`${message.id}-${emoji}`}
                    className=" flex w-fit items-center justify-center group hover:bg-dark-bg-2 p-1.5 rounded-full"
                    onClick={() => handleAddReaction(emoji)}
                  >
                    <Image
                      src={`/images/emoji/${emoji}.svg`}
                      alt="thumbs up"
                      width={20}
                      height={20}
                      className="group-hover:-translate-y-1 group-hover:scale-110"
                    />
                  </div>
                );
              })}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ChatBubble;
