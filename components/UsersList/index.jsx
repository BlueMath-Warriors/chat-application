import { useEffect, useState } from "react";
import Image from "next/image";
import { useUserContext } from "@/context/userContext";
import { loadUsersFromLocalStorage } from "@/utils/chatUtils";

const UsersList = ({ onSelectUser, show, handleShowConversation }) => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const { currentUser } = useUserContext();

  useEffect(() => {
    const storedUsers = loadUsersFromLocalStorage();
    setUsers(storedUsers);
    setFilteredUsers(storedUsers);
  }, []);

  useEffect(() => {
    if (search.trim() === "") {
      setFilteredUsers(users);
    } else {
      // Filter users whose name contains the search string (case insensitive)
      const filtered = users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredUsers(filtered);
    }
  }, [users, search]);

  return (
    <div
      className={`${
        show ? "flex" : "hidden"
      } md:flex sticky top-0 left-0 min-h-full flex-col items-start bg-dark-bg-2 justify-start border-r border-dark-gray pb-4 gap-4 w-full md:max-w-md`}
    >
      {/* User information header */}
      <div className="flex w-full px-6 items-center gap-2 py-4 border-b-2 border-dark-gray">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          {currentUser && (
            <Image src={currentUser?.avatar} alt="user avatar" fill />
          )}
        </div>
        <h2 className="text-white text-lg font-semibold">
          {currentUser?.name}
        </h2>
      </div>

      {/* Search input */}
      <div className="flex w-full px-6">
        <div className="w-full">
          <input
            id="user-list-search"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-input-dark border focus:bg-dark-gray border-dark-gray text-white text-sm rounded-lg block w-full p-2.5 focus:outline-none border-b-2 border-b-white focus:border-b-bright-green"
            placeholder="Search User"
            required
          />
        </div>
      </div>

      {/* User list */}
      <div className="flex flex-col w-full max-h-screen bg-dark-bg-2 overflow-y-auto px-6">
        {/* Display filtered users */}
        {filteredUsers?.length > 0 ? (
          filteredUsers?.map((user, index) => (
            <div
              key={`user-list-item-${index}`}
              className="flex items-center w-full bg-dark-bg-2 p-2 rounded-md mb-2 hover:bg-dark-bg cursor-pointer"
              onClick={() => {
                handleShowConversation();
                onSelectUser(user);
              }}
            >
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image src={user.avatar} alt="user avatar" fill />
              </div>
              <p className="ml-3">{user.name}</p>
            </div>
          ))
        ) : (
          // Show message when no users are found
          <div className="flex w-full p-2 rounded-md mb-2 text-white">
            <p>No users found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UsersList;
