import React from "react";

const ProfilePhoto = ({ url, size }) => {
  return (
    <div>
      <img className={"mr-2 rounded-full w-" + size} src={url} />
    </div>
  );
};

export default ProfilePhoto;
