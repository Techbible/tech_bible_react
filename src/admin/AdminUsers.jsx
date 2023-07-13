import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../config/mongo";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const res = await axios.get(`${BASE_URL}/getUsers`);
    setUsers(res.data);
  };
  useEffect(() => {
    getUsers();
  });
  return (
    <div className="flex flex-wrap  gap-6 my-6 ">
      {users?.map((user) => (
        <div>
          <div className="flex items-center border-white border-1 rounded-md max-w-[200px] my-5 p-2">
            <img className="rounded-full w-14 h-14 m-2" src={user?.photo} />
            <div className="flex flex-column">
              {user?.username}
              <div className="text-[12px] text-gray-400">{user?.bio} </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminUsers;
