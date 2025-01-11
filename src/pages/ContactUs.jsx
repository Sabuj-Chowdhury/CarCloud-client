import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const ContactUs = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    const formData = e.target;
    // console.log(form.current);

    emailjs
      .sendForm(
        `${import.meta.env.VITE_SERVICE_ID}`,
        `${import.meta.env.VITE_TEMPLATE_ID}`,
        form.current,
        {
          publicKey: `${import.meta.env.VITE_PUBLIC_KEY}`,
        }
      )
      .then(
        () => {
          //   console.log("SUCCESS!");
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Thank you for reaching out. I'll get back to you shortly.",
            confirmButtonColor: "#3085d6",
          });
          formData.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong. Please try again later.",
            confirmButtonColor: "#d33",
          });
        }
      );
  };
  return (
    <div className="min-h-screen text-gray-300 ">
      <div className="max-w-7xl  mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-yellow-400">
            Contact Us
          </h1>
          <p className="text-lg  mt-4">
            Have questions, feedback, or suggestions? We'd love to hear from
            you! Reach out to the Car Cloud team today.
          </p>
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-yellow-300">Get in Touch</h2>
            <p>
              Fill out the form on the right or use the contact details below to
              get in touch with us. We’ll get back to you as soon as possible!
            </p>
            <div className="space-y-4">
              <p>
                <strong>Email:</strong>
                <a
                  href="csabuj73@gmail.com"
                  className="text-yellow-400 hover:underline"
                >
                  csabuj73@gmail.com
                </a>
              </p>
              <p>
                <strong>Phone:</strong> <span>+88 (013) 087-66895</span>
              </p>
              <p>
                <strong>Address:</strong> Chittagong,Bangladesh
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="text-black">
                <label
                  htmlFor="name"
                  className="block text-sm text-yellow-400 font-medium "
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full mt-1 p-3 border border-gray-400 rounded-lg focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div className="text-black">
                <label
                  htmlFor="email"
                  className="block text-yellow-400 text-sm font-medium "
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full mt-1 p-3 border border-gray-400  rounded-lg focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div className="text-black">
                <label
                  htmlFor="message"
                  className="block text-yellow-400 text-sm font-medium "
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Write your message here"
                  className="w-full mt-1 p-3 border border-gray-400 rounded-lg focus:ring-2 focus:ring-yellow-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
