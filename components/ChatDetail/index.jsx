import React, { useState, useEffect } from "react";
import ChatBubble from "./ChatBubble";
import Image from "next/image";
import { useUserContext } from "@/context/userContext";
import {
  loadChatsFromLocalStorage,
  saveChatsToLocalStorage,
  addMessageToChat,
  loadUsersFromLocalStorage,
} from "@/utils/chatUtils";
import { formatTimestamp } from "@/utils/miscellaneous";

/**
 * ChatDetail component displays the detailed chat view between the current user and the selected user.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.selectedUser - The user currently selected for chat.
 * @param {boolean} props.show - Flag to show or hide the chat detail view.
 * @param {Function} props.handleShowChatList - Function to handle showing the chat list view.
 *
 * @returns {JSX.Element} The ChatDetail component.
 */
const ChatDetail = (props) => {
  const { selectedUser, show, handleShowChatList } = props;
  const [chat, setChat] = useState();
  const [users, setUsers] = useState();

  const { currentUser } = useUserContext();

  const [typedMessage, setTypedMessage] = useState("");

  useEffect(() => {
    if (selectedUser) {
      // Load chats from localStorage on component mount
      const storedChats = loadChatsFromLocalStorage(
        currentUser?.id,
        selectedUser.id
      );
      const storedUsers = loadUsersFromLocalStorage();
      setChat(storedChats);
      setUsers(storedUsers);
    }
  }, [currentUser, selectedUser]);

  const handleSendMessage = () => {
    if (typedMessage.trim() === "") {
      return; // Prevent sending empty messages
    }

    // Create a new message object
    const newMessage = {
      id: chat?.messages?.length + 1 || 1,
      text: typedMessage,
      sender: currentUser.name,
      timestamp: formatTimestamp(new Date()),
    };

    // Update selectedChat in state and localStorage
    const updatedChats = addMessageToChat(
      [selectedUser.id, currentUser.id],
      newMessage,
      currentUser
    );
    setChat(updatedChats[0]);

    // Clear the input field after sending
    setTypedMessage("");
  };

  const handleInputChange = (e) => {
    setTypedMessage(e.target.value);
  };
  console.log(selectedUser);

  return (
    <div
      className={`${
        show ? "flex" : "hidden"
      } md:flex flex-col h-full w-full min-h-full bg-dark-bg chat-bg bg-blend-soft-light`}
    >
      {selectedUser ? (
        <>
          {/* Header displaying user's name and avatar */}
          <div className=" z-40 w-full fixed flex items-center gap-3 p-4 bg-chat-gray border-b-2 border-dark-gray drop-shadow-md">
            <div
              className="block md:hidden relative w-6 h-6 hover:scale-105 active:scale-95"
              onClick={handleShowChatList}
            >
              <Image src={"/images/back-arrow.svg"} alt="back arrow" fill />
            </div>
            <div className=" relative w-12 h-12 rounded-full overflow-hidden">
              <Image src={selectedUser.avatar} alt={selectedUser.name} fill />
            </div>
            <h2 className="text-white text-lg font-semibold">
              {selectedUser.name}
            </h2>
          </div>

          {/* Chat messages */}
          <div className="flex h-full flex-col gap-3 overflow-y-auto p-4 py-24 ">
            {chat?.messages?.map((message, index) => (
              <ChatBubble
                key={`chat-bubble-${index}`}
                message={message}
                avatar={
                  message.sender === selectedUser.id
                    ? selectedUser?.avatar
                    : currentUser?.avatar
                }
                align={message.sender === selectedUser?.id ? "left" : "right"}
                bubbleColor={
                  message.sender === selectedUser?.id ? "gray" : "green"
                }
                status={message.sender === selectedUser.id ? "" : "Delivered"}
              />
            ))}
          </div>

          {/* Input for typing messages */}
          <div className="p-3 w-full sticky bottom-0">
            <input
              type="text"
              placeholder="Type a message"
              value={typedMessage}
              onChange={handleInputChange}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  handleSendMessage();
                }
              }}
              className="w-full border px-3 py-4 rounded-lg bg-input-dark border-dark-gray text-white focus:bg-dark-gray focus:outline-none"
            />
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ChatDetail;
