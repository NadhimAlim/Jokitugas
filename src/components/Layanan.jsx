import React from "react";

export default function ServicesAvailable() {
  const services = [
    {
      title: "Joki Tugas Sekolah",
      description: "Joki Tugas Sekolah adalah layanan profesional yang membantu siswa menyelesaikan berbagai tugas sekolah dengan cepat dan tepat. Kami menawarkan bantuan untuk berbagai mata pelajaran, termasuk matematika, sains, bahasa, dan ilmu sosial.",
      contact: "04:58:38 | 7:00 | www.joki.gakuen"
    },
    {
      title: "Joki Tugas Kuliah",
      description: "Joki Tugas Kuliah adalah layanan profesional yang membantu mahasiswa menyelesaikan tugas-tugas akademik mereka dengan cepat dan efisien. Kami menyediakan bantuan untuk berbagai jenis tugas, mulai dari esai, laporan, hingga projek penelitian.",
      contact: "08:00:36 | 11:30 | www.joki.gakuen"
    },
    {
      title: "Joki Tugas Instansi",
      description: "Joki Tugas Instansi adalah layanan profesional yang membantu pegawai instansi pemerintah atau swasta dalam menyelesaikan berbagai tugas administrasi dan operasional. Kami menawarkan solusi untuk penulisan laporan, pengolahan data, hingga tugas rutin lainnya.",
      contact: "Contact information available"
    }
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h1 className="fw-bold display-5 mb-3">
              Layanan Joki Tugas Tersedia
            </h1>
          </div>
        </div>

        <div className="row justify-content-center">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  {/* Title */}
                  <h3 className="card-title fw-bold text-primary mb-3">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="card-text text-muted mb-4" style={{ textAlign: "justify" }}>
                    {service.description}
                  </p>

                  {/* Separator */}
                  <hr className="my-4" />

                  {/* Contact */}
                  <div className="mt-auto">
                    <h6 className="fw-semibold text-dark mb-2">Contact</h6>
                    <p className="text-muted small mb-0">
                      {service.contact}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}