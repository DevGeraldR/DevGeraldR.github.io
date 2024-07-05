import { doc, setDoc } from "firebase/firestore";
import React, { useState, Fragment } from "react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { Dialog, Transition } from "@headlessui/react";
import { SiUpwork } from "react-icons/si";
import { db } from "./firebase";

function Contact() {
  const [isSuccessfulOpen, setIsSuccessfulOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleClick = async () => {
    setIsLoading(true);
    const senderRef = doc(db, "clients", email);

    await setDoc(senderRef, {
      name: name,
      email: email,
      message: message,
    });
    setIsLoading(false);
    setIsSuccessfulOpen(true);
  };

  return (
    <>
      <section className="text-white body-font relative" id="contact_us">
        <div className="container px-4 py-10 mx-auto">
          <h1 className="text-3xl py-1 text-white text-center">
            Contact <span className="text-blue-500">ME</span>
          </h1>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form
              className="flex flex-wrap w-full"
              onSubmit={(e) => {
                e.preventDefault();
                handleClick();
              }}
            >
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="leading-7 text-sm">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    className="w-full bg-gray-800 rounded border border-gray-700 focus:border-blue-500 text-base outline-none text-gray-200 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="leading-7 text-sm">Email</label>
                  <input
                    type="email"
                    required
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className="w-full bg-gray-800 border border-gray-700 text-gray-200 rounded focus:border-blue-500 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label className="leading-7 text-sm">Message</label>
                  <textarea
                    id="message"
                    required
                    name="message"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    className="w-full bg-gray-800 rounded border border-gray-700 focus:border-blue-500 h-32 text-base outline-none text-gray-200 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="flex p-2 w-full justify-center">
                {isLoading ? (
                  <button
                    disabled
                    className="flex items-center bg-blue-500 hover:to-gray-500 text-white px-4 py-2 border-none rounded-md"
                  >
                    <svg
                      className="w-5 h-5 mr-3 -ml-1 text-blue-900 animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </button>
                ) : (
                  <button
                    className="bg-gradient-to-r from-blue-500 hover:to-blue-500 text-white px-4 py-2 border-none rounded-md"
                    type="submit"
                  >
                    Send Message
                  </button>
                )}
              </div>
            </form>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <a
                href="mailto:devgeraldromero@gmail.com"
                className="text-blue-500 hover:text-blue-600"
              >
                devgeraldromero@gmail.com
              </a>
              <p className="leading-normal my-5">
                Batangas City,
                <br />
                Batangas, Philippines
              </p>
              <div className="text-3xl flex justify-center gap-5 text-gray-600">
                <a
                  href="https://www.linkedin.com/in/gerald-romero-732424279/"
                  className="cursor-pointer hover:text-blue-500"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.upwork.com/freelancers/~01e42b59d829d990a2"
                  className="cursor-pointer hover:text-blue-500"
                >
                  <SiUpwork />
                </a>
                <a
                  href="https://github.com/DevGeraldR"
                  className="cursor-pointer hover:text-blue-500"
                >
                  <BsGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Transition appear show={isSuccessfulOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => {
            setName("");
            setEmail("");
            setMessage("");
            setIsSuccessfulOpen(false);
          }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-800 bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-900 border border-gray-700 shadow p-6 text-left align-middle transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-white"
                  >
                    Thank you
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-200">
                      Your message has been sent!
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="bg-gradient-to-r from-blue-500 hover:to-blue-500 text-white px-4 py-2 border-none rounded-md"
                      onClick={() => {
                        setName("");
                        setEmail("");
                        setMessage("");
                        setIsSuccessfulOpen(false);
                      }}
                    >
                      Okay
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default Contact;
