import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
// Import gambar lokal
import testi1 from "../img/testi1.png";
import testi2 from "../img/testi2.png";
import testi3 from "../img/testi3.png";
import testi4 from "../img/testi4.png";
import testi5 from "../img/testi5.png";

export default function TestimonialPayment() {
  const [activeIndex, setActiveIndex] = useState(0);

  // ✅ Gunakan variabel gambar yang diimport di atas
  const paymentProofs = [
    {
      id: 1,
      image: testi1,
    },
    {
      id: 2,
      image: testi2,
    },
    {
      id: 3,
      image: testi3,
    },
    {
      id: 4,
      image: testi4,
    },
    {
      id: 5,
      image: testi5,
    },
  ];

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  // Bagi data jadi kelompok isi 3
  const groupedProofs = [];
  for (let i = 0; i < paymentProofs.length; i += 3) {
    groupedProofs.push(paymentProofs.slice(i, i + 3));
  }

  return (
    <section className="py-5 bg-light">
      <div className="container">
        {/* Judul */}
        <div className="text-center mb-5">
          <h2 className="fw-bold display-6 mb-3">
            Bukti Pembayaran & Testimoni
          </h2>
          <p className="text-muted fs-5">
            Lihat bukti transaksi dan testimoni dari pelanggan yang telah menggunakan layanan kami
          </p>
        </div>

        {/* Carousel */}
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <Carousel
              activeIndex={activeIndex}
              onSelect={handleSelect}
              indicators={false}
              prevIcon={
                <span
                  className="carousel-control-prev-icon bg-primary rounded-circle p-3"
                  aria-hidden="true"
                />
              }
              nextIcon={
                <span
                  className="carousel-control-next-icon bg-primary rounded-circle p-3"
                  aria-hidden="true"
                />
              }
            >
              {groupedProofs.map((group, groupIndex) => (
                <Carousel.Item key={groupIndex}>
                  <div className="row justify-content-center">
                    {group.map((proof) => (
                      <div key={proof.id} className="col-lg-4 col-md-6 mb-4">
                        <div className="card border-0 shadow-lg">
                          <div className="card-body p-0">
                            {/* Gambar ditampilkan full tanpa crop dan tanpa teks */}
                            <img
                              src={proof.image}
                              alt={`Bukti pembayaran ${proof.id}`}
                              className="img-fluid w-100"
                              style={{
                                height: "auto",
                                objectFit: "contain"
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>

            {/* Tombol indikator manual */}
            <div className="d-flex justify-content-center mt-4">
              {groupedProofs.map((_, index) => (
                <button
                  key={index}
                  className={`btn btn-sm mx-1 ${
                    index === activeIndex
                      ? "btn-primary"
                      : "btn-outline-primary"
                  }`}
                  onClick={() => setActiveIndex(index)}
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    padding: "0",
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
}