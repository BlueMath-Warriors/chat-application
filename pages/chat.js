import { useState } from "react";
import { Inter } from "next/font/google";
import UsersList from "@/components/UsersList";
import ChatDetail from "@/components/ChatDetail";

const inter = Inter({ subsets: ["latin"] });

export default function Chat() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [showChatList, setShowChatList] = useState(true);
  const [showConversation, setShowConversation] = useState(false);
  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  const handleShowChatList = () => {
    setShowConversation(false);
    setShowChatList(true);
  };

  const handleShowConversation = () => {
    setShowConversation(true);
    setShowChatList(false);
  };

  return (
    <main
      className={`flex relative min-h-screen overflow-y-hidden bg-dark-bg ${inter.className}`}
    >
      <UsersList
        onSelectUser={handleUserSelect}
        selectedUser={selectedUser}
        show={showChatList}
        handleShowConversation={handleShowConversation}
      />
      <ChatDetail
        selectedUser={selectedUser}
        show={showConversation}
        handleShowChatList={handleShowChatList}
      />
    </main>
  );
}
