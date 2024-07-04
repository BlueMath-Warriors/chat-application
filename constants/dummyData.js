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
    name: "Apple Chad",
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
    id: 2,
    participants: [1, 3], // John Doe and Alice Johnson
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
        sender: 3,
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
        sender: 3,
      }, // Alice Johnson
    ],
  },
  {
    id: 3,
    participants: [1, 4], // John Doe and Bob Brown
    messages: [
      {
        id: 1,
        text: "Hey Bob, how's it going?",
        timestamp: "2:00 PM",
        sender: 1,
      }, // John Doe
      { id: 2, text: "Doing well, thanks!", timestamp: "2:01 PM", sender: 4 }, // Bob Brown
      {
        id: 3,
        text: "Got any plans for the weekend?",
        timestamp: "2:02 PM",
        sender: 1,
      }, // John Doe
      {
        id: 4,
        text: "Maybe some hiking, you?",
        timestamp: "2:03 PM",
        sender: 4,
      }, // Bob Brown
    ],
  },
  {
    id: 4,
    participants: [1, 5], // John Doe and Apple Chad
    messages: [
      {
        id: 1,
        text: "Hey Apple, how's your project going?",
        timestamp: "3:00 PM",
        sender: 1,
      }, // John Doe
      {
        id: 2,
        text: "It's going well, thanks for asking!",
        timestamp: "3:01 PM",
        sender: 5,
      }, // Apple Chad
      {
        id: 3,
        text: "Any challenges you're facing?",
        timestamp: "3:02 PM",
        sender: 1,
      }, // John Doe
      {
        id: 4,
        text: "Just some minor bugs, but nothing major.",
        timestamp: "3:03 PM",
        sender: 5,
      }, // Apple Chad
    ],
  },
  {
    id: 5,
    participants: [2, 3], // Jane Smith and Alice Johnson
    messages: [
      {
        id: 1,
        text: "Hi Alice, how are you?",
        timestamp: "4:00 PM",
        sender: 2,
      }, // Jane Smith
      {
        id: 2,
        text: "I'm doing well, thanks!",
        timestamp: "4:01 PM",
        sender: 3,
      }, // Alice Johnson
      {
        id: 3,
        text: "Any plans for the weekend?",
        timestamp: "4:02 PM",
        sender: 2,
      }, // Jane Smith
      {
        id: 4,
        text: "Not sure yet, maybe some reading.",
        timestamp: "4:03 PM",
        sender: 3,
      }, // Alice Johnson
    ],
  },
  {
    id: 6,
    participants: [2, 4], // Jane Smith and Bob Brown
    messages: [
      {
        id: 1,
        text: "Hey Bob, how's your day?",
        timestamp: "5:00 PM",
        sender: 2,
      }, // Jane Smith
      {
        id: 2,
        text: "Busy but productive, thanks!",
        timestamp: "5:01 PM",
        sender: 4,
      }, // Bob Brown
      {
        id: 3,
        text: "Any plans for the evening?",
        timestamp: "5:02 PM",
        sender: 2,
      }, // Jane Smith
      {
        id: 4,
        text: "Just dinner with friends.",
        timestamp: "5:03 PM",
        sender: 4,
      }, // Bob Brown
    ],
  },
  {
    id: 7,
    participants: [2, 5], // Jane Smith and Apple Chad
    messages: [
      {
        id: 1,
        text: "Hey Apple, how's your day?",
        timestamp: "6:00 PM",
        sender: 2,
      }, // Jane Smith
      {
        id: 2,
        text: "Pretty good, just wrapping up some coding.",
        timestamp: "6:01 PM",
        sender: 5,
      }, // Apple Chad
      {
        id: 3,
        text: "Any exciting projects?",
        timestamp: "6:02 PM",
        sender: 2,
      }, // Jane Smith
      {
        id: 4,
        text: "Working on a new feature.",
        timestamp: "6:03 PM",
        sender: 5,
      }, // Apple Chad
    ],
  },
  {
    id: 8,
    participants: [3, 4], // Alice Johnson and Bob Brown
    messages: [
      {
        id: 1,
        text: "Hey Bob, how's the new project?",
        timestamp: "7:00 PM",
        sender: 3,
      }, // Alice Johnson
      {
        id: 2,
        text: "Going well, thanks for asking!",
        timestamp: "7:01 PM",
        sender: 4,
      }, // Bob Brown
      {
        id: 3,
        text: "Any challenges you're facing?",
        timestamp: "7:02 PM",
        sender: 3,
      }, // Alice Johnson
      { id: 4, text: "Just some debugging.", timestamp: "7:03 PM", sender: 4 }, // Bob Brown
    ],
  },
  {
    id: 9,
    participants: [3, 5], // Alice Johnson and Apple Chad
    messages: [
      {
        id: 1,
        text: "Hey Apple, how's the design going?",
        timestamp: "8:00 PM",
        sender: 3,
      }, // Alice Johnson
      {
        id: 2,
        text: "Making progress, thanks!",
        timestamp: "8:01 PM",
        sender: 5,
      }, // Apple Chad
      {
        id: 3,
        text: "Any feedback on the latest draft?",
        timestamp: "8:02 PM",
        sender: 3,
      }, // Alice Johnson
      {
        id: 4,
        text: "Looks good overall, just a few tweaks.",
        timestamp: "8:03 PM",
        sender: 5,
      }, // Apple Chad
    ],
  },
  {
    id: 10,
    participants: [4, 5], // Bob Brown and Apple Chad
    messages: [
      {
        id: 1,
        text: "Hey Apple, how's the project coming along?",
        timestamp: "9:00 PM",
        sender: 4,
      }, // Bob Brown
      {
        id: 2,
        text: "It's going well, thanks for asking!",
        timestamp: "9:01 PM",
        sender: 5,
      }, // Apple Chad
      {
        id: 3,
        text: "Any challenges you're facing?",
        timestamp: "9:02 PM",
        sender: 4,
      }, // Bob Brown
      {
        id: 4,
        text: "Just finalizing the UI.",
        timestamp: "9:03 PM",
        sender: 5,
      }, // Apple Chad
    ],
  },
];

export const EMOJIES = ["thumbs-up", "heart", "smile", "cry", "meh"];
