import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);

    const isFormValid =
      newFormData.fullname.trim() !== "" &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newFormData.email) &&
      newFormData.message.trim() !== "";
    setIsValid(isFormValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      const email = "naufalafif2207@gmail.com";
      const subject = encodeURIComponent("Contact Form Submission");
      const body = encodeURIComponent(`${formData.message}`);
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="border-b border-neutral-500 pb-4 overflow-hidden"
    >
      <motion.h2
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="my-10 text-4xl text-center  font-thin"
      >
        Contact Me!
      </motion.h2>

      <div className="flex justify-center">
        <motion.iframe
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="rounded-lg shadow-lg w-full max-w-[500px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.064241090305!2d106.69729337486194!3d-6.255267361243882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fa677d3194cf%3A0x7e18dd088dc0b176!2sPondok%20Kacang%20Prima!5e0!3m2!1sen!2sid!4v1706543515275!5m2!1sen!2sid"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></motion.iframe>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-10 max-w-2xl mx-auto px-4"
      >
        <form
          onSubmit={handleSubmit}
          className="mt-6 space-y-4 bg-neutral-900 p-6 rounded-lg shadow-xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col gap-4"
          >
            {/* Input Nama */}
            <motion.input
              whileFocus={{ scale: 1.02, borderColor: "#9333ea" }}
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              className="w-full p-3 border rounded bg-neutral-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500"
              placeholder="Full name"
              required
            />
            <motion.input
              whileFocus={{ scale: 1.02, borderColor: "#9333ea" }}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded bg-neutral-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500"
              placeholder="Email address"
              required
            />
          </motion.div>

          <motion.textarea
            whileFocus={{ scale: 1.02, borderColor: "#9333ea" }}
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border rounded bg-neutral-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500"
            placeholder="Your Message"
            rows="4"
            required
          ></motion.textarea>

          <motion.button
            whileHover={{ scale: isValid ? 1.1 : 1 }}
            whileTap={{ scale: isValid ? 0.9 : 1 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            type="submit"
            className={`w-full p-3 rounded font-semibold transition ${
              isValid
                ? "bg-purple-700 hover:bg-purple-600 text-white"
                : "bg-gray-600 text-gray-400 cursor-not-allowed"
            }`}
            disabled={!isValid}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
