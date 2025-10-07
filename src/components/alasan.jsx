import React from "react";
import whyUsImage from "../img/joki.png"; // Sesuaikan path gambar Anda

export default function WhyUs() {
  const stats = [
    { number: "20+", label: "Tugas Selesai" },
    { number: "10+", label: "Sekolah Berbeda" },
    { number: "10+", label: "Universitas Berbeda" },
    { number: "4", label: "Tim Prefesional" }
  ];

  const features = [
    { title: "KONSULTASI" },
    { title: "PENYESUAIAN" },
    { title: "PROSES ORDER" }
  ];

  return (
    <section className="container py-5">
      <div className="row align-items-center">
        {/* Konten Teks di Kiri */}
        <div className="col-lg-6">
          <h2 className="fw-bold display-6 mb-4">
            Kenapa Harus Jasa Tugas di Kami?
          </h2>
          
          <p className="text-muted fs-5 mb-4" style={{ textAlign: "justify" }}>
            Joki Tugas adalah penyedia layanan unggulan dalam penyelesaian tugas di Indonesia. 
            Sejak tahun 2018, kami telah sukses menangani beragam tugas dari tingkat sekolah 
            hingga perguruan tinggi, bekerjasama dengan berbagai instansi pendidikan terkemuka. 
            Dengan dedikasi dan komitmen kami, Joki Tugas telah menjadi platform resmi yang 
            menyediakan layanan untuk membantu Anda menyelesaikan tugas sekolah dan kuliah.
          </p>

          <hr className="my-5" />

          {/* Features */}
          <div className="row mb-5">
            {features.map((feature, index) => (
              <div key={index} className="col-md-4 mb-3">
                <div className="bg-primary text-white text-center p-3 rounded">
                  <h5 className="fw-bold mb-0">{feature.title}</h5>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="row">
            {stats.map((stat, index) => (
              <div key={index} className="col-6 col-md-3 mb-4">
                <div className="text-center">
                  <h3 className="fw-bold text-primary mb-2">{stat.number}</h3>
                  <p className="text-muted small mb-0">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gambar di Kanan - Kotak */}
        <div className="col-lg-6">
          <div className="p-4">
            <div className="rounded-3 shadow overflow-hidden">
              <img
                src={whyUsImage}
                alt="Kenapa Memilih Jasa Kami"
                className="img-fluid w-100"
                style={{ 
                  height: "400px", 
                  objectFit: "cover",
                  objectPosition: "center"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}