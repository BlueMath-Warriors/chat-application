# Chat Application

## Overview

This project is a WhatsApp-like interface built using Next.js, featuring functionalities such as sending, reacting to, and receiving messages. The application does not use a backend database; instead, messages are stored locally in the browser's localStorage.

## Purpose

The purpose of this application is to assess and demonstrate frontend development skills with Next.js. It serves as a demo application showcasing various UI/UX features commonly found in messaging apps.

## Detailed Setup Instructions

### Prerequisites

- Node.js v21.7.1 or higher
- npm (Node Package Manager)

### Installation

1. **Clone the code:**

   ```bash
   git clone https://github.com/BlueMath-Warriors/chat-application.git
2. **Install Dependencies:**

   ```bash 
   npm i
3. **Running Development Server:**

   ```bash 
   npm run dev
3. **To Build the Application:**

   ```bash 
   npm run build
3. **To serve the built application:**

   ```bash 
   npm run start
# Technologies Used

## Frontend

- **Next.js**: React framework for server-rendered applications.
- **tailwind CSS**: Utility-first CSS framework for rapid UI development.

## Database

- No backend database used; messages and user data are stored in the browser's `localStorage`.

## Other Tools and Libraries

- **Netlify**: Deployment platform for hosting the application.

## Assumptions or Considerations

- The application is designed solely for frontend assessment purposes.
- Features such as real-time communication or socket-based updates are not implemented but can be implemented if needed.
- Message reactions and starred messages are not persistent and are reset on app refresh.
- Currently, there are only five users: `John Doe` `Jane Smith` `Alice Johnson` `Bob Brown` `Apple Chad` whose dummy chat is present in the storage.
- New Users chats are saved in `local storage` but they don't have any dummy data.

## Deployment

- The application is deployed on Netlify and can be accessed at [Chat App on Netlify](https://chat-app-arithmiks.netlify.app).

## Working Mechanism

- **LocalStorage**: Messages and user data are stored locally in the browser's `localStorage`.
- **User Interaction**: Users can send, react to, and star messages within the application.
- **Cross-Profile Messaging**: Messages sent by a user can be accessed from another profile when logged in.

