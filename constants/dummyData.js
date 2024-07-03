export const USERS = [
  {
    id: 1,
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Alice Johnson",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 4,
    name: "Bob Brown",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: 5,
    name: "Charlie Davis",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

export const CHATS_DATA = [
  {
    id: 1,
    participants: [1, 2], // John Doe and Jane Smith
    messages: [
      { id: 1, text: "Hey Jane!", timestamp: "10:00 AM", sender: 1 }, // John Doe
      {
        id: 2,
        text: "Hi John, how are you?",
        timestamp: "10:01 AM",
        sender: 2,
      }, // Jane Smith
      { id: 3, text: "I'm good, thanks!", timestamp: "10:02 AM", sender: 1 }, // John Doe
      {
        id: 4,
        text: "That's great to hear!",
        timestamp: "10:03 AM",
        sender: 2,
      }, // Jane Smith
    ],
  },
  {
    id: 1,
    participants: [1, 4], // John Doe and Bob Brown
    messages: [
      { id: 1, text: "Hey Jane!", timestamp: "10:00 AM", sender: 1 }, // John Doe
      {
        id: 2,
        text: "Hi John, how are you?",
        timestamp: "10:01 AM",
        sender: 4,
      }, // Bob Brown
      { id: 3, text: "I'm good, thanks!", timestamp: "10:02 AM", sender: 1 }, // John Doe
      {
        id: 4,
        text: "That's great to hear!",
        timestamp: "10:03 AM",
        sender: 4,
      }, // Bob Brown
    ],
  },

  {
    id: 2,
    participants: [2, 3], // Jane Smith and Bob Brown
    messages: [
      { id: 1, text: "Hi Bob!", timestamp: "11:00 AM", sender: 2 }, // Jane Smith
      {
        id: 2,
        text: "Hello Jane, what's up?",
        timestamp: "11:01 AM",
        sender: 3,
      }, // Bob Brown
      {
        id: 3,
        text: "Just wanted to catch up.",
        timestamp: "11:02 AM",
        sender: 2,
      }, // Jane Smith
    ],
  },
  {
    id: 3,
    participants: [4, 5], // Alice Johnson and Bob Brown
    messages: [
      {
        id: 1,
        text: "Hey Alice, how's it going?",
        timestamp: "12:00 PM",
        sender: 4,
      }, // Alice Johnson
      {
        id: 2,
        text: "Hey Bob, doing good, thanks!",
        timestamp: "12:01 PM",
        sender: 5,
      }, // Bob Brown
      {
        id: 3,
        text: "What are your plans for the weekend?",
        timestamp: "12:02 PM",
        sender: 4,
      }, // Alice Johnson
      {
        id: 4,
        text: "Not sure yet, maybe some hiking.",
        timestamp: "12:03 PM",
        sender: 5,
      }, // Bob Brown
    ],
  },
  {
    id: 4,
    participants: [1, 4], // John Doe and Alice Johnson
    messages: [
      {
        id: 1,
        text: "Hey Alice, how's your day going?",
        timestamp: "1:00 PM",
        sender: 1,
      }, // John Doe
      {
        id: 2,
        text: "Pretty good, just finishing up some work.",
        timestamp: "1:01 PM",
        sender: 4,
      }, // Alice Johnson
      {
        id: 3,
        text: "That's good to hear. Anything exciting planned for the evening?",
        timestamp: "1:02 PM",
        sender: 1,
      }, // John Doe
      {
        id: 4,
        text: "Not much, just relaxing at home.",
        timestamp: "1:03 PM",
        sender: 4,
      }, // Alice Johnson
    ],
  },
  {
    id: 5,
    participants: [3, 5], // Bob Brown and Charlie Davis
    messages: [
      {
        id: 1,
        text: "Hey Charlie, how's your project going?",
        timestamp: "2:00 PM",
        sender: 3,
      }, // Bob Brown
      {
        id: 2,
        text: "It's going well, thanks for asking!",
        timestamp: "2:01 PM",
        sender: 5,
      }, // Charlie Davis
      {
        id: 3,
        text: "Any challenges you're facing?",
        timestamp: "2:02 PM",
        sender: 3,
      }, // Bob Brown
      {
        id: 4,
        text: "Just some minor bugs, but nothing major.",
        timestamp: "2:03 PM",
        sender: 5,
      }, // Charlie Davis
    ],
  },
];
