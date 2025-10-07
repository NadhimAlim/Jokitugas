import React from "react";

export default function Services() {
  const features = [
    {
      title: "Bebas Plagiarisme",
      description: "Joki Tugas mengerjakan karya bersifat asli atau original, anti plagiasi, dan berdasarkan kaidah penulisan ilmiah."
    },
    {
      title: "Tim Kami",
      description: "Joki Tugas memiliki tim yang berkualitas dari lulusan universitas terbaik di Indonesia, jadi jangan takut untuk mempercayakan tugasmu kepada kami"
    },
    {
      title: "Privasi & Keamanan",
      description: "Joki Tugas telah berkomitmen untuk selalu menjaga privasi pelanggan dengan jelas dan tegas."
    }
  ];

  return (
    <section className="container py-5">

      {/* Features Grid */}
      <div className="row justify-content-center">
        {features.map((feature, index) => (
          <div key={index} className="col-lg-4 col-md-6 mb-4">
            <div className="card border-0 shadow-lg h-100" style={{ minHeight: "250px" }}>
              <div className="card-body p-5 d-flex flex-column justify-content-center">
                <h3 className="card-title fw-bold text-primary mb-4 text-center fs-3">
                  {feature.title}
                </h3>
                <p className="card-text text-muted fs-5 text-center" style={{ textAlign: "justify", lineHeight: "1.6" }}>
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}