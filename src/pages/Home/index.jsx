import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ChatArea from "./components/ChatArea";
import UserSearch from "./components/UserSearch";
import UsersList from "./components/UsersList";

const Home = () => {
  const [searchKey, setSearchKey] = useState("");
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  return (
    <div className="h-screen w-screen bg-gray-100 p-2">
      <div className="flex justify-between p-5">
        <div>
          <h1 className="text-primary text-2xl uppercase">CHAT-APP</h1>
        </div>
        <div className="flex gap-3">
          <span
            class="material-symbols-outlined cursor-pointer"
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/login");
            }}
          >
            logout
          </span>
          <h1 className="underline text-xl">{user.name}</h1>
        </div>
      </div>
      <div className="flex gap-5">
        {/* user search */}
        <div className="w-96">
          <UserSearch searchKey={searchKey} setSearchKey={setSearchKey} />
          <UsersList searchKey={searchKey} />
        </div>
        {/* chat area */}
        <div>
          <ChatArea />
        </div>
      </div>
    </div>
  );
};

export default Home;
