import React from "react";
import { Link } from "react-router-dom";

const UserInDiscussion = ({ userDiscussionData, categoryOfDiscussion }) => {
  return (
    <Link
      className="cursor-pointer"
      to={`/UserProfile/${userDiscussionData?.uid}`}
    >
      <div
        className="flex flex-row bg-white border-1 border-white rounded-[4px] p-4 my-5"
        style={{ zIndex: "100" }}
      >
        <div className="mr-2">
          <img className="w-12 rounded-full" src={userDiscussionData?.photo} />
        </div>
        <div className="text-[14px] text-black poppins flex flex-column opacity-[.9] ">
          <div className="mb-1">{userDiscussionData?.username}</div>
          <div className=" text-[12px] poppins mb-1 text-gray-900 ">
            {userDiscussionData?.bio}
          </div>
          {categoryOfDiscussion && (
            <div className=" text-[12px]  text-gray-900 flex flex-row ">
              <img
                src={`${process.env.PUBLIC_URL}/assets/categories/${categoryOfDiscussion}.png`}
                className="h-4 w-4 mr-2"
              />
              conversation in {categoryOfDiscussion}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default UserInDiscussion;
