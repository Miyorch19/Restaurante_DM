# La Boca Asadero

Sitio web responsivo de un restaurante ficticio, desarrollado como entrega de la Prueba Técnica de Desarrollador(a) Front-End Jr. Presenta la carta del restaurante, su historia, testimonios de clientes, un mapa de ubicación y un formulario de contacto con validación en el front-end.

- Producción: https://restaurante-dm.vercel.app
- Repositorio: https://github.com/Miyorch19/Restaurante_DM

## Contenido

1. [Stack tecnológico](#stack-tecnológico)
2. [Cómo correr el proyecto localmente](#cómo-correr-el-proyecto-localmente)
3. [Cómo funciona](#cómo-funciona)
4. [Estructura del proyecto](#estructura-del-proyecto)
5. [Despliegue y flujo de ramas](#despliegue-y-flujo-de-ramas)
6. [Decisiones técnicas](#decisiones-técnicas)
7. [Un reto que enfrenté](#un-reto-que-enfrenté)
8. [Cómo usé la IA](#cómo-usé-la-ia)

## Stack tecnológico

| Tecnología | Versión | Uso en el proyecto |
|---|---|---|
| React | ^19.2.7 | Interfaz basada en componentes |
| React Router | ^7.18.1 | Rutas del lado del cliente y layout compartido |
| TypeScript | ~6.0.2 | Tipado estático de componentes y datos |
| Vite | ^8.1.1 | Servidor de desarrollo y empaquetado |
| Tailwind CSS | ^3.4.19 | Estilos y diseño responsive |
| Oxlint, ESLint y Prettier | ^1.71 / ^10.8 / ^3.9 | Calidad y formato del código |
| Cloudinary | N/A | CDN para las imágenes |
| Google Fonts | N/A | Tipografías Instrument Serif y Lilex |
| Vercel | N/A | Alojamiento y despliegue continuo |

## Cómo correr el proyecto localmente

### Requisitos

- Node.js 20 o superior
- pnpm (el proyecto incluye `pnpm-lock.yaml`; también funciona con npm)
- Git

### Pasos

1. Clonar el repositorio:

```bash
git clone https://github.com/Miyorch19/Restaurante_DM.git
cd Restaurante_DM
```

2. Instalar las dependencias:

```bash
pnpm install
```

Con npm: `npm install`.

3. (Opcional) Crear el archivo de variables de entorno a partir del ejemplo:

```bash
cp .env.example .env
```

La variable `VITE_CLOUDINARY_CLOUD_NAME` no es necesaria para ver el sitio, porque las imágenes se cargan con URLs completas.

4. Iniciar el servidor de desarrollo:

```bash
pnpm dev
```

El sitio queda disponible en http://localhost:5173.

### Scripts disponibles

| Comando | Descripción |
|---|---|
| `pnpm dev` | Inicia el servidor de desarrollo con recarga en caliente |
| `pnpm build` | Verifica los tipos con `tsc -b` y genera la versión de producción en `dist/` |
| `pnpm preview` | Previsualiza localmente el build de producción |
| `pnpm lint` | Analiza el código con Oxlint |

## Cómo funciona

### Páginas

| Ruta | Archivo | Contenido |
|---|---|---|
| `/` | `Home.tsx` | Hero con llamada a la acción, menú por categorías, especialidades (pizzas) y sección de contacto por correo y WhatsApp |
| `/menu` | `Menu.tsx` | Carta completa con un carrusel por categoría |
| `/nosotros` | `About.tsx` | Historia, galería de cocina, testimonios y mapa de ubicación (Google Maps) |

El Navbar y el Footer son compartidos por todas las páginas mediante `Layout.tsx`.

### Interactividad con JavaScript

| Funcionalidad | Archivo | Descripción |
|---|---|---|
| Menú móvil | `Navbar.tsx` | Un estado booleano muestra u oculta el panel de navegación en pantallas pequeñas |
| Navbar dinámico | `Navbar.tsx` | Cambia de transparente a fondo sólido al desplazarse más de 50 px |
| Scroll suave a Contacto | `Navbar.tsx` | Usa `scrollIntoView`; si el usuario está en otra ruta, navega primero a `/` |
| Pestañas del menú | `Home.tsx` | Filtran los platillos por categoría mediante un estado |
| Carrusel de platillos | `Menu.tsx` | Desplazamiento con botones anterior y siguiente; en móvil usa scroll táctil |
| Formulario del footer | `Footer.tsx` | Validación en el front-end, descrita a continuación |

### Formulario y validación

El formulario de contacto rápido está en el Footer y se muestra en todas las páginas. Tiene un campo (correo electrónico) y valida al enviar:

| Caso | Resultado |
|---|---|
| Campo vacío (se aplica `trim()`) | Mensaje: "Escribe tu correo" |
| Formato inválido (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`) | Mensaje: "Ingresa un correo válido" |
| Correo válido | Mensaje: "¡Gracias! Nos pondremos en contacto contigo." |

El envío es simulado en el cliente: no existe backend y no se transmite ningún dato. Los mensajes de error se anuncian con `role="alert"` y el campo usa `aria-invalid` y `aria-describedby`.

### Diseño responsivo

El diseño sigue el enfoque mobile first, con los breakpoints `sm` (640 px), `md` (768 px) y `lg` (1024 px) de Tailwind. La paleta y las fuentes están definidas en `tailwind.config.js`:

| Token | Valor | Uso |
|---|---|---|
| `cream` | `#FEFCEA` | Fondo principal |
| `accent` | `#E62235` | Títulos, marcos y botones |
| `dark` | `#0D0D0D` | Texto base |
| `font-serif` | Instrument Serif | Títulos |
| `font-mono` | Lilex | Texto y botones |

### HTML semántico y accesibilidad

Se utilizan las etiquetas `header`, `nav`, `main` (uno por página), `section`, `figure`, `blockquote`, `figcaption` y `footer`. El documento declara `lang="es"`, tiene título descriptivo y meta description. Las imágenes de platillos tienen texto alternativo descriptivo, las ilustraciones decorativas usan `alt=""`, y el mapa incluye el atributo `title`.

## Estructura del proyecto

```text
public/                  Favicon y logo
src/
  components/
    Footer.tsx           Horario, redes sociales y formulario de contacto
    Layout.tsx           Navbar, contenido principal y Footer
    Navbar.tsx           Navegación y menú móvil
  data/
    mock.ts              Datos estáticos: menú, información y testimonios
  pages/
    Home.tsx             Ruta /
    Menu.tsx             Ruta /menu
    About.tsx            Ruta /nosotros
  types/
    index.ts             Interfaces de TypeScript
  utils/
    cloudinary.ts        Utilidad para URLs de Cloudinary
  App.tsx                Definición de rutas
  main.tsx               Punto de entrada
  index.css              Directivas de Tailwind y estilos base
index.html               Documento base (idioma, título y metadatos)
tailwind.config.js       Colores y fuentes personalizados
vercel.json              Reescritura de rutas para la SPA
```

## Despliegue y flujo de ramas

El sitio se despliega en Vercel, conectado al repositorio de GitHub. Se utilizan dos ramas:

- `main`: producción. Cada cambio fusionado en esta rama actualiza https://restaurante-dm.vercel.app.
- `develop`: desarrollo. Cada push genera un deploy de preview con su propia URL, para probar los cambios sin afectar producción.

Flujo de trabajo:

1. Se desarrolla en `develop` con commits pequeños.
2. Cada push genera un deploy de preview que se revisa en el navegador.
3. Se abre un Pull Request de `develop` a `main` y se hace merge.
4. Vercel ejecuta el build de `main` y publica la nueva versión.

El archivo `vercel.json` reescribe cualquier ruta hacia `index.html`. Como el sitio es una SPA, esto evita errores 404 al recargar o al entrar directamente a `/menu` o `/nosotros`:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

## Decisiones técnicas

- **React con Vite y TypeScript.** Elegí React por ser la herramienta con la que mejor me desenvuelvo. Vite ofrece un entorno de desarrollo rápido y un build sencillo de desplegar, y TypeScript ayuda a detectar errores de tipos en los datos y los componentes.
- **Tailwind CSS.** Permite construir un diseño responsive y consistente sin escribir hojas de estilo extensas, y centraliza la paleta y las fuentes en un solo archivo de configuración.
- **SPA con React Router.** La navegación entre páginas es inmediata y el Layout comparte Navbar y Footer.
- **Datos locales en `mock.ts`.** Al ser un sitio de demostración, un archivo de datos tipado evita depender de un backend.
- **Imágenes en Cloudinary.** Se sirven desde un CDN, lo que favorece el rendimiento.

### Qué haría diferente con más tiempo

- Conectar el formulario a un servicio real (función serverless o PHP/Laravel) y ampliarlo con más campos.
- Cargar el menú desde un CMS headless o una API en lugar de `mock.ts`.
- Eliminar el código heredado sin uso (`Contact.tsx`, `cloudinary.ts`, `App.css`, `src/assets/` y la dependencia `lucide-react`) y mover el hook `useLayoutConfig` a su propio archivo, para resolver la advertencia de Oxlint.
- Agregar pruebas básicas, optimizar imágenes con `srcset` y medir el rendimiento con Lighthouse.
- Incluir metadatos Open Graph para compartir en redes sociales.

## Un reto que enfrenté

Al desplegar en Vercel, las rutas internas de la SPA fallaban al recargar. El navegador solicita `/menu` o `/nosotros` directamente al servidor, que no encuentra un archivo con ese nombre y responde con un error 404. Lo resolví agregando `vercel.json` con una regla de reescritura hacia `index.html`, de modo que React Router decida qué página mostrar. Luego verifiqué en producción que cada ruta carga correctamente al entrar de forma directa y al recargar.

## Cómo usé la IA

Utilicé IA como apoyo para redactar parte de la documentación del stack tecnológico de este README.