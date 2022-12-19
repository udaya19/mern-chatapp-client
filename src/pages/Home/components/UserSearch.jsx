import React from "react";

const UserSearch = ({ searchKey, setSearchKey }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search users"
        value={searchKey}
        onChange={(e) => {
          setSearchKey(e.target.value);
        }}
        className="rounded-full w-full py-5 border-gray-300"
      />
    </div>
  );
};

export default UserSearch;
