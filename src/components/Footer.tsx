import { useState } from 'react';
import { restaurantInfo } from '../data/mock';

export default function Footer() {
  // Estados para el formulario de contacto rápido
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Limpia el mensaje de error o éxito al volver a escribir
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) setError('');
    if (success) setSuccess('');
  };

  // Manejo del envío del formulario con validación local
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedEmail = email.trim();

    // 1. Validación de campo vacío
    if (!trimmedEmail) {
      setError('Escribe tu correo');
      setSuccess('');
      return;
    }

    // 2. Validación de formato de correo mediante regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setError('Ingresa un correo válido');
      setSuccess('');
      return;
    }

    // 3. Simulación de envío exitoso: limpiar input y mostrar confirmación
    setEmail('');
    setError('');
    setSuccess('¡Gracias! Nos pondremos en contacto contigo.');
  };

  return (
    <footer className="bg-cream text-dark py-24 font-mono border-t border-dark/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
          
          {/* Horario y Contacto Rápido */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="font-serif italic text-5xl md:text-6xl text-accent mb-8">
              /Horario/
            </h2>
            <div className="text-sm md:text-base leading-relaxed tracking-wide text-accent max-w-xs">
              <p>Martes a domingo, de:</p>
              <p>8:00 a.m. a 10:00 p.m.</p>
            </div>

            {/* Formulario de contacto rápido */}
            <div className="mt-12 w-full max-w-xs flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="font-serif italic text-2xl md:text-3xl text-accent mb-2">
                ¿Dudas?
              </h3>
              <p className="font-mono text-xs md:text-sm text-accent leading-relaxed mb-4">
                ¿Quieres contactarnos más rápido? Ingresa tu correo y nos pondremos en contacto contigo.
              </p>

              <form onSubmit={handleSubmit} noValidate className="w-full">
                <label htmlFor="footer-email" className="sr-only">
                  Correo electrónico
                </label>
                <div className="flex flex-col sm:flex-row gap-3 w-full">
                  <input
                    id="footer-email"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="tu@correo.com"
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? "footer-email-error" : success ? "footer-email-success" : undefined}
                    className="w-full bg-transparent border-b border-accent text-accent px-1 py-2 text-sm focus:outline-none rounded-none placeholder:text-accent/50 text-center sm:text-left md:text-left"
                  />
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-accent text-cream uppercase tracking-widest text-xs font-semibold px-4 py-2 hover:bg-accent/90 transition-colors shrink-0 rounded-none cursor-pointer"
                  >
                    Enviar
                  </button>
                </div>

                {/* Mensaje de error accesible */}
                {error && (
                  <p id="footer-email-error" role="alert" className="text-accent text-xs mt-2 text-center md:text-left">
                    {error}
                  </p>
                )}

                {/* Mensaje de confirmación accesible */}
                {success && (
                  <p id="footer-email-success" aria-live="polite" className="text-accent text-xs mt-2 font-semibold text-center md:text-left">
                    {success}
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* Síguenos */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="font-serif italic text-5xl md:text-6xl text-accent mb-8">
              /Síguenos/
            </h2>
            <div className="flex gap-4">
              {restaurantInfo.redesSociales.facebook && (
                <a 
                  href={restaurantInfo.redesSociales.facebook} 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-accent text-cream p-4 hover:bg-accent/90 transition-colors flex items-center justify-center w-14 h-14"
                  aria-label="Facebook"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
              )}
              {restaurantInfo.redesSociales.instagram && (
                <a 
                  href={restaurantInfo.redesSociales.instagram} 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-accent text-cream p-4 hover:bg-accent/90 transition-colors flex items-center justify-center w-14 h-14"
                  aria-label="Instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
              )}
              {/* Cuadros extra solicitados */}
              <a href="#" className="bg-accent text-cream p-4 hover:bg-accent/90 transition-colors flex items-center justify-center w-14 h-14">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="bg-accent text-cream p-4 hover:bg-accent/90 transition-colors flex items-center justify-center w-14 h-14">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v8"></path><path d="M8 12h8"></path></svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
