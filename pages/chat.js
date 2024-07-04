import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import UsersList from "@/components/UsersList";
import { useRouter } from "next/router";
import ChatDetail from "@/components/ChatDetail";
import { getUserFromLocalStorage } from "@/utils/localStorage";
const inter = Inter({ subsets: ["latin"] });

export default function Chat() {
  const router = useRouter();
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

  useEffect(() => {
    const user = getUserFromLocalStorage();
    if (!user) {
      router.push("/login");
    }
  });

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
