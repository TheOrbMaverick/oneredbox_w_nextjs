"use client";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Form() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("");
  const [currency, setCurrency] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [loading, setLoading] = useState(false);

  // const [message, setMessage] = useState("");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const siteKey = "6LcdP7UqAAAAAPl-F2ECLdBo4vNmlgFFlJl2H6ds";

  function generateCaptcha() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    return { question: `${num1} + ${num2}`, answer: num1 + num2 };
  }

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!captchaToken) {
      alert("Please complete the CAPTCHA to proceed.");
      setLoading(false);
      return;
    }

    if (parseInt(captchaInput) !== captcha.answer) {
      alert("CAPTCHA is incorrect. Please try again.");
      setCaptcha(generateCaptcha());
      setCaptchaInput("");
      setLoading(false);
      return;
    }

    const message = `
      Full Name: ${fullName}
      Email: ${email}
      Phone: ${phone}
      Location: ${location}
      Budget: ${budget}
      Currency: ${currency}
    `;

    //Replace <YOUR_WHATSAPP_NUMBER> with your actual number
    const whatsappUrl = `https://wa.me/<YOUR_WHATSAPP_NUMBER>?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
    // setLoading(false);

    setFullName("");
    setEmail("");
    setPhone("");
    setLocation("");
    setBudget("");
    setCurrency("");
    setCaptcha(generateCaptcha());
    setCaptchaInput("");
    setCaptchaToken(null);
    setLoading(false);

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ fullName, email, message, captchaToken }),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFullName("");
        setEmail("");
        // setMessage("");
        setCaptchaToken(null);
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
      <h1 className="text-white text-center font-bold text-3xl md:text-4xl mb-16">
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
            placeholder="VI, Lagos. Maitama, Abuja"
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
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
            id="budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
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
            id="currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
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
            htmlFor="phone"
            className="left-2 top-4 text-gray-500 pointer-events-none  origin-left"
          >
            Phone Number
          </label>

          <input
            placeholder="+234-803-555-7777"
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="text-black w-full py-4 px-2 border border-black rounded-lg focus:outline-none"
          />
        </div>

        <div className="relative mb-5 w-full">
          {/* Anti-robot check */}
          <label htmlFor="captcha" className="text-gray-500">
            Solve this: {captcha.question}
          </label>
          <input
            placeholder="Answer"
            type="text"
            id="captcha"
            value={captchaInput}
            onChange={(e) => setCaptchaInput(e.target.value)}
            className="text-black w-full py-4 px-2 border border-black rounded-lg focus:outline-none"
            required
          />

          {/* <label htmlFor="message" className="text-gray-500">
            Message
          </label>
          <textarea
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="text-black w-full py-4 px-2 border border-black rounded-lg focus:outline-none"
          /> */}
        </div>

        <ReCAPTCHA
          sitekey={siteKey}
          onChange={handleCaptchaChange}
          className="mb-5"
        />

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
