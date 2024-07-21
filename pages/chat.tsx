import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import UsersList from "@/components/UsersList";
import { useRouter } from "next/router";
import ChatDetail from "@/components/ChatDetail";
import { getUserFromLocalStorage } from "@/utils/localStorage";
import { User } from "@/lib/types";

const inter = Inter({ subsets: ["latin"] });

export default function Chat() {
  const router = useRouter();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [showChatList, setShowChatList] = useState<boolean>(true);
  const [showConversation, setShowConversation] = useState<boolean>(false);

  const handleUserSelect = (user: User): void => {
    setSelectedUser(user);
  };

  const handleShowChatList = (): void => {
    setShowConversation(false);
    setShowChatList(true);
  };

  const handleShowConversation = (): void => {
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
        show={showChatList}
        handleShowConversation={handleShowConversation}
      />
      {selectedUser ? (
        <ChatDetail
          selectedUser={selectedUser}
          show={showConversation}
          handleShowChatList={handleShowChatList}
        />
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen h-full w-full">
          <p className="text-xl text-white font-bold">No Chat Selected</p>
          <p className="text-white text-sm opacity-80">
            Select a User to view the conversation
          </p>
        </div>
      )}
    </main>
  );
}
