export type User = {
  id: number;
  name: string;
  avatar: string;
};

export type UserContextType = {
  currentUser: User | null;
  loginUser: (user: User) => void;
  logoutUser: () => void;
};

export type Emoji = "thumbs-up" | "heart" | "smile" | "cry" | "meh";

export type UserId = number;

export type Message = {
  id: number;
  text: string;
  timestamp: string;
  sender: UserId;
};

export type Chat = {
  id: number;
  participants: UserId[];
  messages: Message[];
};
