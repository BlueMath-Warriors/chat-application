export const loadChatsFromLocalStorage = (userId, otherUserId) => {
  const storedChats = JSON.parse(localStorage.getItem("CHATS_DATA")) || [];
  // Filter chats where participants exactly match [userId, otherUserId]
  const userChats = storedChats.filter((chat) => {
    const participants = chat?.participants || [];
    return (
      participants.includes(userId) &&
      participants.includes(otherUserId) &&
      (userId !== otherUserId || participants.length === 1)
    );
  });

  return userChats[0];
};

export const loadUsersFromLocalStorage = () => {
  try {
    const users = JSON.parse(localStorage.getItem("USERS")) || [];
    return users;
  } catch (error) {
    console.log("Error loading users from localStorage:", error);
    return [];
  }
};

export const addUser = (user) => {
  const users = loadUsersFromLocalStorage();
  const updatedUsers = [...users, user];
  localStorage.setItem("USERS", JSON.stringify(updatedUsers));
};

export const getUserById = (userId) => {
  const users = loadUsersFromLocalStorage();
  return users.find((user) => user.id === userId) || null;
};

export const saveChatsToLocalStorage = (chats) => {
  localStorage.setItem("CHATS_DATA", JSON.stringify(chats));
};

// Function to add a new message to chats
export const addMessageToChat = (participants, newMessage, currentUser) => {
  // Load chats data from localStorage
  let chats = JSON.parse(localStorage.getItem("CHATS_DATA"));

  // Find the chat index that matches the participants
  const chatIndex = chats.findIndex((chat) =>
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
    const updatedChats = chats.map((chat, index) => {
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
    return updatedChats.filter((chat) =>
      participants.every((participantId) =>
        chat.participants.includes(participantId)
      )
    );
  }

  return loadChatsFromLocalStorage(participants[0], participants[1]);
};

export const deleteMessage = (selectedUserId, messageId) => {
  console.log(selectedUserId, messageId);
  const storedChats = JSON.parse(localStorage.getItem("CHATS_DATA")) || [];
  const selectedChat = storedChats.find(
    (chat) => chat.userId === selectedUserId
  );

  if (selectedChat) {
    // Filter out the deleted message
    const updatedMessages = selectedChat.messages.filter(
      (message) => message.id !== messageId
    );

    // Update the selected chat with updated messages
    const updatedChat = { ...selectedChat, messages: updatedMessages };

    // Update chats array with the updated chat
    const updatedChats = storedChats.map((chat) =>
      chat.userId === selectedUserId ? updatedChat : chat
    );

    // Save updated chats back to local storage
    localStorage.setItem("CHATS_DATA", JSON.stringify(updatedChats));

    return updatedMessages;
  } else {
    console.error("Chat not found");
    return [];
  }
};
