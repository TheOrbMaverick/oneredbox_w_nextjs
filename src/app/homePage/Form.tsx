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
    <div className="sm:py-32 py-10 sm:px-60 px-10">
      <h1 className="text-black text-center font-bold text-3xl md:text-4xl mb-16">
        WE WANT TO HEAR FROM YOU
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col justify-center ">
        <div className="relative mb-5 w-full">
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="text-black w-full py-4 px-2 border border-black rounded-lg focus:outline-none"
          />

          <label
            htmlFor="fullName"
            className={`absolute left-2 top-4 text-gray-500 pointer-events-none transition-all transform origin-left ${
              fullName ? "-translate-y-9 scale-75" : ""
            }`}
          >
            Full Name
          </label>
        </div>

        <div className="relative mb-5 w-full">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-black w-full py-4 px-2 border border-black rounded-lg focus:outline-none"
          />

          <label
            htmlFor="email"
            className={`absolute left-2 top-4 text-gray-500 pointer-events-none transition-all transform origin-left ${
              email ? "-translate-y-9 scale-75" : ""
            }`}
          >
            Email
          </label>
        </div>

        <div className="relative mb-5 w-full">
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="text-black w-full py-4 px-2 border border-black rounded-lg focus:outline-none"
          />

          <label
            htmlFor="message"
            className={`absolute left-2 top-4 text-gray-500 pointer-events-none transition-all transform origin-left ${
              message ? "-translate-y-9 scale-75" : ""
            }`}
          >
            Message
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 px-2 border bg-purple-700 rounded-full mb-5 text-white font-bold uppercase"
        >
          {loading ? "Sending..." : "SEND"}
        </button>
      </form>
    </div>
  );
}
