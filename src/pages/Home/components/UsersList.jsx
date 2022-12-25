import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewChatApi } from "../../../api/chat";
import { setAllChats } from "../../../redux/userSlice";

const UsersList = ({ searchKey }) => {
  const dispatch = useDispatch();
  const { allUsers, allChats, user } = useSelector((state) => state.user);
  const createNewChat = async (recepientId) => {
    try {
      const response = await createNewChatApi([user._id, recepientId]);
      if (response.success) {
        alert(response.message);
        const newChat = response.data;
        const updatedChats = [...allChats, newChat];
        dispatch(setAllChats(updatedChats));
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="flex flex-col gap-3 mt-5">
      {allUsers
        .filter(
          (user) =>
            (user.name.toLowerCase().includes(searchKey.toLowerCase()) &&
              searchKey) ||
            allChats.some((chat) => chat.members.includes(user._id))
        )
        .map((user) => (
          <div className="shadow-sm border p-5 rounded bg-white flex justify-between">
            <div className="flex gap-3 items-center">
              <div className="bg-gray-500 w-10 h-10 rounded-full flex items-center justify-center">
                <h1 className="uppercase font-bold text-white">
                  {user.name[0]}
                </h1>
              </div>
              <h1>{user.name}</h1>
            </div>
            <div>
              {!allChats.find((chat) => chat.members?.includes(user._id)) && (
                <button
                  onClick={() => {
                    createNewChat(user._id);
                  }}
                  className="border-primary text-primary bg-white"
                >
                  Create Chat
                </button>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default UsersList;
