import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewChatApi } from "../../../api/chat";
import { setAllChats, setSelectedChat } from "../../../redux/userSlice";

const UsersList = ({ searchKey }) => {
  const dispatch = useDispatch();
  const { allUsers, allChats, user, selectedChat } = useSelector(
    (state) => state.user
  );
  const createNewChat = async (recepientId) => {
    try {
      const response = await createNewChatApi([user._id, recepientId]);
      if (response.success) {
        alert(response.message);
        const newChat = response.data;
        const updatedChats = [...allChats, newChat];
        dispatch(setAllChats(updatedChats));
        dispatch(setSelectedChat(newChat));
      }
    } catch (error) {
      alert(error.message);
    }
  };
  const openChat = (recepientUserId) => {
    const chat = allChats.find(
      (chat) =>
        chat.members.map((member) => member._id).includes(user._id) &&
        chat.members.map((member) => member._id).includes(recepientUserId)
    );
    if (chat) {
      dispatch(setSelectedChat(chat));
    }
  };
  const getData = () => {
    return allUsers.filter(
      (user) =>
        (user.name.toLowerCase().includes(searchKey.toLowerCase()) &&
          searchKey) ||
        allChats.some((chat) =>
          chat.members.map((member) => member._id).includes(user._id)
        )
    );
  };
  const selectedChatOrNot = (userObj) => {
    if (selectedChat) {
      return selectedChat.members
        .map((member) => member._id)
        .includes(userObj._id);
    }
    return false;
  };
  return (
    <div className="flex flex-col gap-3 mt-5">
      {getData().map((user) => (
        <div
          key={user._id}
          className={`shadow-sm border p-5 rounded bg-white flex justify-between ${
            selectedChatOrNot(user) && "border-primary border-2"
          } `}
        >
          <div className="flex gap-3 items-center">
            <div className="bg-gray-500 w-10 h-10 rounded-full flex items-center justify-center">
              <h1 className="uppercase font-bold text-white">{user.name[0]}</h1>
            </div>
            <h1>{user.name}</h1>
          </div>
          <div>
            {!allChats.find((chat) =>
              chat.members.map((member) => member._id).includes(user._id)
            ) ? (
              <button
                onClick={() => {
                  createNewChat(user._id);
                }}
                className="border-primary text-primary bg-white"
              >
                Create Chat
              </button>
            ) : (
              <button
                onClick={() => {
                  openChat(user._id);
                }}
                className="border-primary text-primary bg-white"
              >
                Open Chat
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UsersList;
