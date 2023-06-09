import React from "react";

const UserInDiscussion = ({ userDiscussionData }) => {
  return (
    <div className="flex flex-row border-1 border-white rounded-md p-4 my-5">
      <div className="mr-2">
        <img className="w-14 rounded-full" src={userDiscussionData?.photo} />
      </div>
      <div className="text-[14px] poppins flex flex-column ">
        <div>{userDiscussionData?.username}</div>
        <div className=" text-[14px] poppins opacity-[.8] ">
          {userDiscussionData?.bio}
        </div>
      </div>
    </div>
  );
};

export default UserInDiscussion;
