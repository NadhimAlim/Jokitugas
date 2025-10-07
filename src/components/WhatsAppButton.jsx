import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "6288212735803"; // ganti dengan nomor kamu
  const message = "Halo, saya mau tanya tentang layanan joki tugas 🙏";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-success position-fixed bottom-0 end-0 m-4 d-flex align-items-center justify-content-center rounded-circle shadow"
      style={{ width: "60px", height: "60px", zIndex: 1050 }}
      title="Chat via WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
