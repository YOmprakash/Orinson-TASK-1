import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    const newData = { name, email, message };
    setData([...data, newData]);

    axios
      .post("http://localhost:5000/api/contact", newData)
      .then((response) => {
        toast.success("Form submitted successfully!");
        console.log("Form submitted successfully:", response.data);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        toast.error("There was an error submitting the form.");
        console.error("There was an error submitting the form:", error);
      });
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <form className="bg-white p-6 rounded shadow-lg w-full max-w-md" onSubmit={submitForm}>
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Name:</label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email:</label>
          <input
            id="email"
            type="email"
            required
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700">Message:</label>
          <textarea
            id="message"
            required
            value={message}
            placeholder="Enter your message"
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          ></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
