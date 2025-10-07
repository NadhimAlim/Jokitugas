import React from "react";
import poster from "../img/jokitugas1.png"; // Sesuaikan path gambar

export default function Hero() {
  return (
    <section className="container" style={{ paddingTop: "120px", paddingBottom: "80px" }}>
      <div className="row align-items-center">
        {/* Konten Teks di Kiri */}
        <div className="col-lg-6">
          <h1 className="fw-bold display-5 mb-3">
            <span className="text-dark">Joki Tugas Kuliah </span>
            <span className="text-primary">Cepat, Murah</span>
            <span className="text-dark"> dan Tanpa Ribet</span>
          </h1>

          <p className="mt-3 text-muted fs-5" style={{ textAlign: "justify" }}>
            Dapatkan bantuan dari para profesional untuk menyelesaikan tugas
            sekolah hingga kuliah dengan cepat dan harga murah.
          </p>

          <div className="d-flex align-items-center gap-3 mb-4">
            <button className="btn btn-primary rounded-pill fw-semibold px-4 py-2">
              KONSULTASI TUGAS, GRATIS!
            </button>
          </div>

          
        </div>

        {/* Gambar Poster di Kanan */}
        <div className="col-lg-6 text-center">
          <div className="p-3">
            <img
              src={poster}
              alt="Poster Joki Tugas"
              className="img-fluid rounded-3 shadow"
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}