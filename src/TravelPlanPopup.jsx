import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from 'react-toastify'


const TravelPlanPopup = ({ isPopupOpen, setIsPopupOpen }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailData = {
      ...formData,
      message: `${formData.message}\nContact Number: ${formData.contact}`,
    };

    emailjs
      .send(
        "service_s1bvdov", // Replace with your EmailJS service ID
        "template_fmxzdvr", // Replace with your EmailJS template ID
        emailData,
        "TNan8ANRi3i29UyXt" // Replace with your EmailJS user ID
      )
      .then(() => alert("Request sent successfully!"))
      .catch(() => toast.success("Added"));
  };

  return (
    <>
      <div className="">
        {isPopupOpen && (
          <div className=" fixed inset-0 z-20 flex justify-center items-center backdrop-blur-sm">
            <div className="relative bg-[#263D47] p-6 rounded-xl w-96 md:w-110 lg:w-150 shadow-2xl shadow-black  ">
              <div className="flex items-center justify-between mb-6 ">
                <h2 className="text-xl font-bold">Request a Callback</h2>
                <button
                  onClick={() => setIsPopupOpen(false)}
                  className=" text-lg font-bold border-2 rounded-full h-[30px] w-[30px] cursor-pointer"
                >
                  ×
                </button>
              </div>
              <form onSubmit={handleSubmit}>
                <input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded mb-2 focus:outline-none"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded mb-2 focus:outline-none"
                />
                <input
                  name="contact"
                  placeholder="Contact Number"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded mb-2 focus:outline-none"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded mb-2 focus:outline-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full rounded-full bg-[#3a5f6e] text-white p-2 flex justify-between items-center cursor-pointer"
                >
                  <p className="pl-4">Send Request</p>
                  <div className="bg-[#c7e8f7] p-3 w-[45px] h-[45px] rounded-full text-black self-end">
                    ➜
                  </div>
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TravelPlanPopup;
