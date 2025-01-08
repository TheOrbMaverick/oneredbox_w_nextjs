"use client";
import React, { useState } from "react";

export default function Form() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // const send = async () => {
  //   setLoading(true);
  // };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ fullName, email, message }),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFullName("");
        setEmail("");
        setMessage("");
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center sm:py-32 py-10 sm:px-60 px-10">
      <h1 className="text-black text-center font-bold text-3xl md:text-4xl mb-16">
        WE WANT TO HEAR FROM YOU
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center xl:w-1/2 w-full"
      >
        <div className="relative mb-5 w-full">
          <label
            htmlFor="fullName"
            className=" left-2 top-4 text-gray-500 pointer-events-none  origin-left"
          >
            Full Name
          </label>

          <input
            placeholder="John Doe"
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="text-black w-full py-4 px-2 border border-black rounded-lg focus:outline-none"
          />
        </div>

        <div className="relative mb-5 w-full">
          <label
            htmlFor="location"
            className="left-2 top-4 text-gray-500 pointer-events-none  origin-left"
          >
            Where would you like to invest? E.g; VI, Lagos. Maitama, Abuja
          </label>

          <input
            placeholder="Placeholder: VI, Lagos. Maitama, Abuja"
            type="text"
            id="location"
            onChange={(e) => setFullName(e.target.value)}
            className="text-black w-full py-4 px-2 border border-black rounded-lg focus:outline-none"
          />
        </div>

        <div className="relative mb-5 w-full">
          <label
            htmlFor=""
            className="left-2 top-4 text-gray-500 pointer-events-none  origin-left"
          >
            What is your range budget for investment?
          </label>

          <input
            placeholder="10,000,000 - 100,000,000"
            type="text"
            id=""
            onChange={(e) => setFullName(e.target.value)}
            className="text-black w-full py-4 px-2 border border-black rounded-lg focus:outline-none"
          />
        </div>

        <div className="relative mb-5 w-full">
          <label
            htmlFor=""
            className="left-2 top-4 text-gray-500 pointer-events-none  origin-left"
          >
            Currency{" "}
          </label>

          <input
            placeholder="NGN, USD, GBP, CAD"
            type="text"
            id=""
            onChange={(e) => setFullName(e.target.value)}
            className="text-black w-full py-4 px-2 border border-black rounded-lg focus:outline-none"
          />
        </div>

        <div className="relative mb-5 w-full">
          <label
            htmlFor="email"
            className="left-2 top-4 text-gray-500 pointer-events-none  origin-left"
          >
            Email
          </label>

          <input
            placeholder="Enter email"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-black w-full py-4 px-2 border border-black rounded-lg focus:outline-none"
          />
        </div>

        <div className="relative mb-5 w-full">
          <label
            htmlFor="email"
            className="left-2 top-4 text-gray-500 pointer-events-none  origin-left"
          >
            Phone Number
          </label>

          <input
            placeholder="+234-803-555-7777"
            type="phone"
            id=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-black w-full py-4 px-2 border border-black rounded-lg focus:outline-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 px-2 border bg-black rounded-full mb-5 text-white font-bold uppercase"
        >
          {loading ? "Sending..." : "SEND"}
        </button>
      </form>
    </div>
  );
}
