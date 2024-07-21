import { User, UserId, Chat, Message } from "@/lib/types";

export const loadChatsFromLocalStorage = (
  userId: UserId,
  otherUserId: UserId
) => {
  const storedChats: Chat[] = JSON.parse(
    localStorage.getItem("CHATS_DATA") || "[]"
  );
  // Filter chats where participants exactly match [userId, otherUserId]
  const userChats = storedChats.filter((chat: Chat) => {
    const participants = chat?.participants || [];
    return (
      participants.includes(userId) &&
      participants.includes(otherUserId) &&
      (userId !== otherUserId || participants.length === 1)
    );
  });

  return userChats[0];
};

export const loadUsersFromLocalStorage = (): User[] => {
  try {
    const users: User[] = JSON.parse(localStorage.getItem("USERS") || "[]");
    return users;
  } catch (error) {
    console.log("Error loading users from localStorage:", error);
    return [];
  }
};

export const addUser = (user: User) => {
  const users = loadUsersFromLocalStorage();
  const updatedUsers = [...users, user];
  localStorage.setItem("USERS", JSON.stringify(updatedUsers));
};

export const getUserById = (userId: UserId) => {
  const users = loadUsersFromLocalStorage();
  return users.find((user) => user.id === userId) || null;
};

export const saveChatsToLocalStorage = (chats: Chat[]) => {
  localStorage.setItem("CHATS_DATA", JSON.stringify(chats));
};

// Function to add a new message to chats
export const addMessageToChat = (
  participants: UserId[],
  newMessage: Message,
  currentUser: User
) => {
  // Load all chats data from localStorage
  let chats = JSON.parse(localStorage.getItem("CHATS_DATA") || "[]");

  // Find the chat index that matches the participants
  const chatIndex = chats.findIndex((chat: Chat) =>
    participants.every((participantId) =>
      chat.participants.includes(participantId)
    )
  );

  if (chatIndex !== -1) {
    // Create a new message object
    const newMessageObj = {
      id:
        chats[chatIndex].messages.length > 0
          ? chats[chatIndex].messages[chats[chatIndex].messages.length - 1].id +
            1
          : 1,
      text: newMessage.text,
      timestamp: newMessage.timestamp,
      sender: currentUser.id,
    };

    // Update chats array with new message
    const updatedChats = chats.map((chat: Chat, index: number) => {
      if (index === chatIndex) {
        return {
          ...chat,
          messages: [...chat.messages, newMessageObj],
        };
      }
      return chat;
    });

    // Save updated chats data back to localStorage
    saveChatsToLocalStorage(updatedChats);

    // Return updated chats filtered by participants
    return updatedChats.filter((chat: Chat) =>
      participants.every((participantId: number) =>
        chat.participants.includes(participantId)
      )
    );
  } else {
    // Create a new chat
    const newChat = {
      participants: participants,
      messages: [
        {
          id: 1,
          text: newMessage.text,
          timestamp: newMessage.timestamp,
          sender: currentUser.id,
        },
      ],
    };

    // Update chats array with new chat
    const updatedChats: Chat[] = [...chats, newChat];

    // Save updated chats data back to localStorage
    saveChatsToLocalStorage(updatedChats);

    // Return the newly created chat
    return [newChat];
  }
};
