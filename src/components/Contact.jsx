import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ fullname: "", email: "", message: "" });
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
      const body = encodeURIComponent(
        `${formData.message}`
      );
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    }
  };

  return (
    <div className="border-b border-neutral-500 pb-4">
      <h2 className="my-10 text-4xl text-center">Contact Me!</h2>
      
      <div className="flex justify-center">
        <iframe className="rounded"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.064241090305!2d106.69729337486194!3d-6.255267361243882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fa677d3194cf%3A0x7e18dd088dc0b176!2sPondok%20Kacang%20Prima!5e0!3m2!1sen!2sid!4v1706543515275!5m2!1sen!2sid"
          width="500"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      
      <div className="mt-10 max-w-2xl mx-auto">
        
        <form onSubmit={handleSubmit} className="mt-6 space-y-4 bg-neutral-900 p-6 rounded-lg shadow-lg">
          <div className="flex flex-col gap-4">
            <input 
              type="text" 
              name="fullname" 
              value={formData.fullname} 
              onChange={handleChange}
              className="w-full p-3 border rounded bg-neutral-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500" 
              placeholder="Full name" 
              required
            />
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange}
              className="w-full p-3 border rounded bg-neutral-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500" 
              placeholder="Email address" 
              required
            />
          </div>
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange}
            className="w-full p-3 border rounded bg-neutral-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500" 
            placeholder="Your Message" 
            rows="4"
            required
          ></textarea>
          <button 
            type="submit" 
            className={`w-full p-3 rounded font-semibold transition ${isValid ? 'bg-purple-700 hover:bg-purple-600 text-white' : 'bg-gray-600 text-gray-400 cursor-not-allowed'}`}
            disabled={!isValid}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;