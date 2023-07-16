import React, { useEffect, useState } from "react";
import { auth } from "../../config/firebase";
import { updatePassword, reauthenticateWithCredential } from "firebase/auth";
import { EmailAuthProvider } from "firebase/auth";
import { Link } from "react-router-dom";

const UpdatePassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");

  const [passwordConfirmed, setPasswordConfirmed] = useState(true);
  const [currentPasswordCorrect, setCurrentPasswordCorrect] = useState(true);

  const onChangePasswordPress = () => {
    var user = auth.currentUser;
    const credential = EmailAuthProvider.credential(
      user.email,
      currentPassword
    );
    if (newPassword === confirmPassword) {
      setPasswordConfirmed(true);

      reauthenticateWithCredential(user, credential)
        .then(() => {
          setCurrentPasswordCorrect(true);
          updatePassword(user, newPassword)
            .then(() => {
              alert("Password was changed succesfuly");
            })
            .catch((error) => {
              setCurrentPasswordCorrect(false);

              //   alert("Change password failed " + error);
            });
        })
        .catch((error) => {
          setCurrentPasswordCorrect(false);
          // alert("Credential Erreur");
        });
    } else {
      setPasswordConfirmed(false);
    }
  };

  return (
    <section className="bg-gradient-to-tl from-purple-300 to-indigo-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full p-6 bg-[#0D0C12] rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
          <h2 className="mb-1 text-xl text-white font-bold leading-tight tracking-tight md:text-2xl dark:text-white">
            Change Password
          </h2>
          <div className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
            <div>
              <label
                for="current-password"
                className="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                Current Password
              </label>
              <input
                type="password"
                name="current-password"
                className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="••••••••"
                required=""
                value={currentPassword}
                onChange={(e) => {
                  setCurrentPassword(e.target.value);
                }}
              />
              {currentPasswordCorrect ? (
                <div style={{ display: "none" }}></div>
              ) : (
                <div className="text-red-900">
                  The current password is not correct
                </div>
              )}
            </div>
            <div>
              <label
                for="password"
                className="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                New Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
                value={newPassword}
                onChange={(e) => {
                  setNewPassword(e.target.value);
                }}
              />
            </div>
            <div>
              <label
                for="confirm-password"
                className="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                Confirm password
              </label>
              <input
                type="password"
                name="confirm-password"
                id="confirm-password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />
              {passwordConfirmed ? (
            <div style={{display: 'none'}}></div>
        ) : (
            <div className="text-red-900">The confirmed password and the new password must be the same</div>
        )}
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="newsletter"
                  aria-describedby="newsletter"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  required=""
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  for="newsletter"
                  className="font-light text-white dark:text-gray-300"
                >
                  I accept the{" "}
                  <a
                    className="font-medium text-[#7869e6] hover:underline dark:text-primary-500"
                    href="#"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>
            <button
              className="w-full text-white bg-[#7869e6] transition duration-300 hover:bg-[#604fe7] active:bg-[#4635ca] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              onClick={onChangePasswordPress}
            >
              Reset passwod
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdatePassword;
