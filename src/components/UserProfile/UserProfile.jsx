import React, { useEffect, useState } from "react";
import { CategoriesData } from "../../dataJson/CategoriesData";
import { onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import { useParams } from "react-router-dom";
import Modal from "react-modal";
import { ModalcustomStyles } from "../../views/Profile";
import axios from "axios";
import { BASE_URL } from "../../config/mongo";

function UserProfile() {
  const [userData, setUserData] = useState();
  const { id } = useParams();

  // Modal Styles
  Modal.setAppElement("#root");
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    const link = `https://techbible.ai/#/UserProfile/${id}`;
    navigator.clipboard
      .writeText(link)
      .then(() => {
        setCopied(true);
      })
      .catch((error) => {
        console.error("Failed to copy link: ", error);
      });
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/check-user/${id}`);
        setUserData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, [id]);
    return (
    <div className="flex flex-column align-items-center pt-[6rem]">
      <div className="mt-desktop-10 mt-mobile-8 mt-tablet-8 mt-widescreen-30 layoutContainer">
        <main className="layoutMain pl-desktop-5 pl-mobile-4">
          {/* <div className="text-[16px] fontWeight-500 ml-[2.5rem]">
            WELCOME TO,
          </div> */}
          <div className="relative xl:w-[711px] lg:xl:w-[711px] max-w-[711px] m-0 pl-0 w-widescreen-5 mb-[4rem] profile-info-container bg-[#0D0C12] rounded-xl p-10">
            <div className="row">
              <div className="col-md-2">
                <div className="mb-3">
                  <img
                    src={userData?.photo}
                    className="w-[80px] h-[80px] sm:w-[80px] sm:h-[80px] md:w-[80px] md:h-[80px] border-2 border-gray-300 rounded-full"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-7 mr-[100px]">
                <div className="row justify-content-center">
                  <div className="col-md-3 mb-3">
                    <p className="fontWeight-500">{userData?.username}</p>
                  </div>
                  <div className="col">
                    <button
                      className="absolute top-[44px] right-[10px] text-[12px] bg-[#ef4823] px-[15px] py-[1.5px] rounded-[4px] transition duration-300 hover:bg-[#ca391c] active:bg-[#b32712]"
                      onClick={() => openModal()}
                    >
                      Share
                    </button>
                  </div>
                </div>
                <div className="bio-interests-texts">
                  <div className="row">
                    <div className="col">
                      <p>{userData?.bio}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      {CategoriesData?.map((group, index) => {
                        if (
                          userData?.interests?.some((interest) =>
                            group.categories.includes(interest)
                          )
                        ) {
                          return (
                            <p className="text-[12] d-inline-block" key={index}>
                              {group.groupName}&nbsp;&nbsp;
                            </p>
                          );
                        }
                        return null;
                      })}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col profile-info-buttons">
                    {/* <button className="mr-4 transition duration-250 ">
                  Share
                </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END Profile Info Component */}
          <div
            style={{
              paddingLeft: "3rem",
              borderLeft: "1px solid white",
              maxWidth: "710px",
            }}
          >
            {/* BIO components */}
            <div className="bg-[#232628] rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between mb-[2rem]">
              <div className="mb-4 md:mb-0">
                <p className="font-bold text-lg leading-tight mb-3">Bio</p>
                <div className="max-w-[10rem]">
                  <p className="text-sm">{userData?.bio}</p>
                </div>
              </div>
            </div>
            {/* End Of BIO components */}
            {/* Interests components */}
            <div className="bg-[#232628] rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between mb-[4]">
              <div className="mb-4 md:mb-0">
                <p className="font-bold text-lg leading-tight mb-3">
                  Interests
                </p>
                <div className="flex flex-wrap">
                  {CategoriesData?.map((group, index) => {
                    if (
                      userData?.interests?.some((interest) =>
                        group.categories.includes(interest)
                      )
                    ) {
                      return (
                        <p
                          className="text-sm leading-tight d-inline mr-1 mb-1"
                          key={index}
                        >
                          {group.groupName}&nbsp;&nbsp;
                        </p>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={ModalcustomStyles}
        contentLabel="Example Modal"
      >
        <div className="p-6">
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-200 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <p className="mb-4 font-bold">Profile link:</p>
          <code>{`UserProfile/${userData?.uid}`}</code>
          <br />
          <button
            onClick={copyToClipboard}
            className={`mt-4 px-4 py-2 rounded ${
              copied ? "bg-green-500 text-white" : "bg-blue-500 text-white"
            }`}
          >
            {copied ? "Copied!" : "Copy Link"}
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default UserProfile;
