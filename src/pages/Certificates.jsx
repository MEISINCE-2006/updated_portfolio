const certificates = [
  "/certificates/1.jpg",
  "/certificates/2.jpg",
  "/certificates/3.jpg",
  "/certificates/4.jpg",
  "/certificates/5.jpg",
  "/certificates/6.jpg",
  "/certificates/7.jpg"
];

export default function Certificates() {
  return (
    <section id="certificates" className="page pt-24">
      <h2 className="title text-center text-4xl font-bold mb-12">
        Certificates
      </h2>

      <div className="relative overflow-hidden w-full flex justify-center">
        <div className="scroll-track hover:[animation-play-state:paused]">
          {[...certificates, ...certificates].map((src, index) => (
            <div
              key={index}
              className="card scroll-item p-4 flex items-center justify-center"
            >
              <img
                src={src}
                alt="Certificate"
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
