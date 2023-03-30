import React from "react";

const Bio = ({ userData, updateBio, setBio, setUpdateBio, UpdatingBio, addBio, setAddBio }) => {
  // <Bio  
  //           userData={userData}
  //           setAddBio={setAddBio}
  //           addBio={addBio}
  //           UpdatingBio={UpdatingBio}
  //           setUpdateBio={setUpdateBio}
  //           setBio = {setBio}
  //              />
    return (
    <div className="auto-group-lzzw-bGH">
      <p className="bio-JAh">Bio</p>
      <span className="sheesh-QDj">
        {userData.bio ? (
          <div>
            {updateBio ? (
              <div>
                <input
                  className="profile-input"
                  placeholder={userData.bio}
                  onChange={(e) => setBio(e.target.value)}
                  type="text"
                />
                <div>
                  <span
                    onClick={() => setUpdateBio(false)}
                    className="profile-cancel"
                  >
                    Cancel
                  </span>
                  <span
                    onClick={() => UpdatingBio(userData.uid)}
                    className="profile-btn-outlined"
                  >
                    Update
                  </span>
                </div>
              </div>
            ) : (
              userData.bio
            )}

            {updateBio ? (
              <div></div>
            ) : (
              <span
                onClick={() => setUpdateBio(true)}
                className="profile-btn-outlined"
              >
                Edit
              </span>
            )}
          </div>
        ) : (
          <div className="bio">
            {addBio ? (
              <input
                className="profile-input"
                placeholder="You can add your bio here"
                onChange={(e) => setBio(e.target.value)}
                type="text"
              />
            ) : (
              <span style={{ color: "red" }}>you don't have a bio yet</span>
            )}

            {addBio ? (
              <div>
                <span
                  onClick={() => setAddBio(false)}
                  className="profile-cancel"
                >
                  Cancel
                </span>
                <span
                  onClick={() => UpdatingBio(userData.uid)}
                  className="profile-btn-outlined"
                >
                  Submit
                </span>
              </div>
            ) : (
              <span
                onClick={() => setAddBio(true)}
                className="profile-btn-outlined"
              >
                + Add
              </span>
            )}
          </div>
        )}
      </span>
    </div>
  );
};

export default Bio;
