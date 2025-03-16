import { useState, useEffect } from "react";
import { ROLES } from "../constants";

const Roles = () => {
  const [index, setIndex] = useState(0); // Indeks peran saat ini
  const [text, setText] = useState(""); // Teks yang sedang diketik
  const [isDeleting, setIsDeleting] = useState(false); // Mode hapus atau ketik
  const [speed, setSpeed] = useState(150); // Kecepatan efek ketik/hapus

  useEffect(() => {
    const currentRole = ROLES[index];

    const updateText = () => {
      if (isDeleting) {
        setText((prev) => prev.slice(0, -1));
        setSpeed(50); // Kecepatan saat menghapus
      } else {
        setText((prev) => currentRole.slice(0, prev.length + 1));
        setSpeed(150); // Kecepatan saat mengetik
      }

      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 1000); // Tunggu sebelum hapus
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % ROLES.length); // Ganti role
      }
    };

    const timeout = setTimeout(updateText, speed);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <span className="bg-gradient-to-r from-pink-600 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
      {text}
    </span>
  );
};

export default Roles;
