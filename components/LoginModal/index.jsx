import Image from "next/image";
import { useState } from "react";

/**
 * LoginModal Component
 * @param {Object} props - Component props
 * @param {boolean} props.show - Controls visibility of the modal
 * @param {Function} props.onHide - Callback function to hide the modal
 * @param {Function} props.handleLogin - Callback function to handle login
 * @returns {JSX.Element} Login modal component
 */
const LoginModal = ({ show, onHide, handleLogin }) => {
  const [userName, setUserName] = useState("");

  // Handles input change for username
  const handleChangeUserName = (e) => {
    setUserName(e.target.value);
  };

  // Handles form submission for login
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(userName);
  };

  return (
    <div
      id="login-modal"
      className={`overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 ${
        show ? "flex" : "hidden"
      } justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
    >
      <div className="relative p-4 w-full max-w-md max-h-full ">
        <div className="relative bg-dark-bg rounded-lg shadow">
          <div className="flex items-center justify-between p-4 md:p-5 border-b border-dark-gray rounded-t">
            <h3 className="text-xl font-semibold text-white">
              Sign in to Chat!
            </h3>
            <button
              type="button"
              className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
              onClick={onHide}
            >
              <Image
                src={"images/cross-icon.svg"}
                alt="cross icon"
                height={10}
                width={10}
              />
            </button>
          </div>
          <div className="p-4 md:p-5">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={userName}
                  onChange={handleChangeUserName}
                  className="bg-input-dark border focus:bg-dark-gray border-dark-gray text-white text-sm rounded-lg block w-full p-2.5 focus:outline-none"
                  placeholder="John Doe"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-chat-green hover:scale-105 active:scale-95 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
