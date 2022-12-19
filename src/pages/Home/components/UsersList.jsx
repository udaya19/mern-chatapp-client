import React from "react";
import { useSelector } from "react-redux";

const UsersList = ({ searchKey }) => {
  const { allUsers } = useSelector((state) => state.user);
  return (
    <div className="flex flex-col gap-3 mt-5">
      {allUsers
        .filter(
          (user) =>
            user.name.toLowerCase().includes(searchKey.toLowerCase()) &&
            searchKey
        )
        .map((user) => (
          <div className="shadow-sm border p-5 rounded bg-white">
            <div className="flex gap-3 items-center">
              <div className="bg-gray-500 w-10 h-10 rounded-full flex items-center justify-center">
                <h1 className="uppercase font-bold text-white">
                  {user.name[0]}
                </h1>
              </div>
              <h1>{user.name}</h1>
            </div>
          </div>
        ))}
    </div>
  );
};

export default UsersList;
