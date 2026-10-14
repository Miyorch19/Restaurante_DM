import { useEffect } from 'react';
import { restaurantInfo, testimonios } from '../data/mock';
import { useLayoutConfig } from '../components/Layout';

export default function About() {
  const { setHasDarkHero } = useLayoutConfig();
  
  useEffect(() => {
    setHasDarkHero(true);
    return () => setHasDarkHero(false);
  }, [setHasDarkHero]);
  return (
    <div className="bg-cream min-h-screen">
      <section className="relative min-h-screen w-full flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("https://res.cloudinary.com/dwvegpaaf/image/upload/v1785119222/nosotros2_wxpjqq.jpg")' }}
        >
          <div className="absolute inset-0 bg-dark/60"></div>
        </div>

        <div className="relative z-10 text-center flex flex-col pt-16">
          <h1 className="font-serif text-cream leading-none tracking-tight" style={{ fontSize: 'clamp(4rem, 12vw, 10rem)' }}>
            Nuestra
            <span className="block italic mt-4 md:mt-6">Historia</span>
          </h1>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col gap-24 w-full">
        
        <section className="w-full">
          <h2 className="font-serif italic text-accent leading-none mb-12" style={{ fontSize: 'clamp(4.8rem, 9.6vw, 8rem)' }}>
            /Historia/
          </h2>
          
          <div className="relative w-full min-h-[600px] md:min-h-[500px] overflow-visible">
            
            <div className="w-full flex justify-center">
              <div className="relative w-full max-w-xl">
                <div className="bg-accent p-8 md:p-11">
                  <div className="aspect-[4/5] bg-neutral-300 w-full relative">
                    <img 
                      src="https://res.cloudinary.com/dwvegpaaf/image/upload/v1785121599/chef_pr8d3z.jpg" 
                      alt="Chef Principal" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white text-accent font-mono font-bold text-sm md:text-lg px-8 py-4 w-[85%] text-center">
                      Chef Principal
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden md:flex flex-col gap-10 absolute top-0 left-[calc(50%+310px)] max-w-md z-10">
              <p className="font-mono font-bold text-accent text-[0.65rem] md:text-xs leading-relaxed">
                Nuestra historia comenzó con la pasión por ofrecer experiencias culinarias memorables. En {restaurantInfo.nombrePrincipal}, creemos que la comida no es solo sustento, sino un arte que reúne a las personas.
              </p>
              <p className="font-mono font-bold text-accent text-[0.65rem] md:text-xs leading-relaxed">
                Cada plato en nuestro menú refleja nuestra dedicación a la calidad, utilizando solo los ingredientes más frescos, seleccionados meticulosamente cada mañana por nuestros chefs.
              </p>
            </div>

            <div className="flex md:hidden flex-col gap-10 max-w-md mx-auto mt-12 px-4">
              <p className="font-mono font-bold text-accent text-[0.65rem] leading-relaxed">
                Nuestra historia comenzó con la pasión por ofrecer experiencias culinarias memorables. En {restaurantInfo.nombrePrincipal}, creemos que la comida no es solo sustento, sino un arte que reúne a las personas.
              </p>
              <p className="font-mono font-bold text-accent text-[0.65rem] leading-relaxed">
                Cada plato en nuestro menú refleja nuestra dedicación a la calidad, utilizando solo los ingredientes más frescos, seleccionados meticulosamente cada mañana por nuestros chefs.
              </p>
            </div>

          </div>
        </section>

        <section className="py-8 w-full">
          <h3 className="font-mono font-bold text-accent text-2xl md:text-3xl lg:text-4xl text-left leading-snug w-full">
            "Cocinar es amar. Y amar es dar todo lo que tienes, en cada plato."
          </h3>
        </section>

        <section className="w-full">
          <h2 className="font-serif italic text-accent leading-none mb-12" style={{ fontSize: 'clamp(4.8rem, 9.6vw, 8rem)' }}>
            /Nuestra cocina/
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {[
              "https://res.cloudinary.com/dwvegpaaf/image/upload/v1785126412/cocina_1_qxmw6c.jpg",
              "https://res.cloudinary.com/dwvegpaaf/image/upload/v1785126410/cocina_2_oberwu.jpg",
              "https://res.cloudinary.com/dwvegpaaf/image/upload/v1785126409/cocina_3_taxlrf.jpg",
              "https://res.cloudinary.com/dwvegpaaf/image/upload/v1785126408/cocina_4_ctdxym.jpg",
            ].map((url, index) => (
              <div key={index} className="bg-accent p-6 md:p-8">
                <div className="aspect-square w-full overflow-hidden">
                  <img src={url} alt={`Nuestra cocina ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="text-left pb-12 w-full">
          <h3 className="font-mono font-bold text-accent text-2xl md:text-3xl lg:text-4xl leading-snug mb-8 w-full">
            "Una mesa bien servida es el comienzo de las mejores historias."
          </h3>
          <p className="font-mono font-bold text-accent text-[0.7rem] md:text-[0.8rem] leading-relaxed max-w-xl">
            Con un ambiente cálido y un equipo que te tratará como familia, te invitamos a disfrutar de momentos únicos alrededor de nuestra mesa. Ya sea para una cena íntima o una celebración especial, aquí encontrarás tu lugar.
          </p>
        </section>

        <section className="w-full">
          <h2 className="font-serif italic text-accent leading-none mb-12" style={{ fontSize: 'clamp(4.8rem, 9.6vw, 8rem)' }}>
            /Testimonios/
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonios.map((t) => (
              <figure
                key={t.id}
                className="bg-accent text-cream p-6 md:p-8 flex flex-col justify-between items-center md:items-start text-center md:text-left"
              >
                <div>
                  <div className="flex gap-1 mb-4" aria-label="5 de 5 estrellas" role="img">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 text-cream"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>

                  <blockquote className="font-mono text-xs md:text-sm leading-relaxed mb-6">
                    "{t.comentario}"
                  </blockquote>
                </div>

                <figcaption className="w-full flex flex-col items-center md:items-start mt-auto">
                  <span className="font-serif italic text-xl md:text-2xl leading-none">
                    {t.nombre}
                  </span>
                  <span className="font-mono text-[0.7rem] md:text-xs opacity-80 mt-1">
                    {t.detalle}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="w-full">
          <h2 className="font-serif italic text-accent leading-none mb-12" style={{ fontSize: 'clamp(4.8rem, 9.6vw, 8rem)' }}>
            /Encuéntranos/
          </h2>

          <div className="bg-accent p-6 md:p-8">
            <div className="h-[320px] md:h-[450px] w-full overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233.65339973821847!2d-97.32608304325412!3d20.446521883094544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85da443c1a23a70b%3A0x6ba3d5234a44e495!2sLa%20Boca!5e0!3m2!1ses!2smx!4v1791958996563!5m2!1ses!2smx"
                title="Mapa de ubicación de La Boca Asadero"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>

          <div className="flex justify-center md:justify-start">
            <a
              href="https://maps.app.goo.gl/LpChoMn2nYYUZTYT9"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-accent text-cream px-10 py-4 text-xs md:text-sm font-semibold tracking-widest uppercase hover:bg-accent/90 transition-colors mt-8"
            >
              Cómo llegar
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
