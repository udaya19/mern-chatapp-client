import React from "react";
import { useSelector } from "react-redux";

const ChatArea = () => {
  const { selectedChat, user } = useSelector((state) => state.user);
  const receipentUser = selectedChat.members.find(
    (member) => member._id !== user._id
  );
  console.log(receipentUser);
  return (
    <div className="bg-white h-[80vh] border rounded w-full flex flex-col justify-between p-5">
      <div>
        {
          <div className="flex gap-3 items-center">
            <div className="bg-gray-500 w-10 h-10 rounded-full flex items-center justify-center">
              <h1 className="uppercase font-bold text-white">{user.name[0]}</h1>
            </div>
            <h1 className="uppercase">{receipentUser.name}</h1>
            <hr />
          </div>
        }{" "}
      </div>
      <div>Chat Messages</div>
      <div>
        <div className="h-16 rounded-xl border-gray-300 shadow border flex justify-between">
          <input
            type="text"
            placeholder="Type a message"
            className="w-[90%] h-16 rounded-xl border-gray-300 shadow focus:outline-none focus:border-none"
          />
          <button className="bg-primary text-white p-2 rounded">SEND</button>
        </div>
      </div>
    </div>
  );
};

export default ChatArea;
