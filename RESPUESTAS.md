# Respuestas

## 1. CSR, SSR y SSG

Pregunta: Explica con un ejemplo la diferencia entre renderizado en el cliente (CSR), del lado del servidor (SSR) y sitios estáticos (SSG). ¿Para un sitio corporativo informativo cuál elegirías y por qué?

Respuesta: CSR más que nada descarga JS y con eso arma la web en el navegador, como en un dashboard. Con SSR en cambio se genera el HTML de la vista en cada petición de una vista. Por último, con SSG se genera una sola vez en el build. Yo escogería SSG para un sitio corporativo por la carga rápida, es fácil de mantener y sirve bien para SEO.

## 2. Astro, Next.js y Svelte

Pregunta: Elige uno con el que te sientas más cómodo y di en qué proyecto real lo usarías frente a los otros dos.

Respuesta: Yo escogería Next.js porque ya me siento cómodo con React. Lo usaría en algo como una tienda en línea o una plataforma con login, donde puedo mezclar SSR, SSG y API'S en el mismo proyecto. Astro lo dejaría más para blogs o landings con poco JS, y Svelte generalmente para apps más ligeras.

## 3. WordPress frente a un sitio a medida

Pregunta: ¿Cuándo recomendarías un CMS como WordPress y cuándo un sitio hecho a medida? Menciona una ventaja y una desventaja de cada camino.

Respuesta: Yo recomendaría WordPress cuando el cliente quiere editar o administrar su contenido solo y tiene principalmente poco presupuesto o tiempo. Un sitio a medida cuando hay lógica de negocio o se requiere de más control. Un sitio web hecho a la medida generalmente da más control, pero cuesta más y depende de desarrolladores.

## 4. Shopify frente a Magento

Pregunta: Para una tienda en línea, ¿qué preguntas le harías al cliente antes de decidir entre Shopify y Magento?

Respuesta: Depende, preguntaría cuántos productos manejaría en un par de años, si tiene equipo técnico propio o depende de una agencia, y qué tan especiales son sus procesos. Igualmente, preguntaría su presupuesto mensual en mantenimiento y que sistemas de pago necesita conectar. En base a eso decidiría entre Shopify y Magento.

## 5. De mi computadora a producción con Git y GitHub

Pregunta: Describe, paso a paso y con tus palabras, cómo llevarías un cambio de código desde tu computadora hasta producción usando Git y GitHub. Menciona ramas (branches) y Pull Requests.

Respuesta: Lo que siempre hago es hacer un git pull en el main, y creo una rama nueva para mi cambio. Aplico los cambios, los pruebo en  local y hago los commits. Después subo la rama con git push y hago un Pull Request hacia main. Verifico que no haya errores, y hago el merge. Después se despliega en producción y reviso que todo funcione bien.

## 6. Qué es un build y qué pasa al conectar un repositorio

Pregunta: ¿Qué es un "build" y qué crees que pasa cuando conectas un repositorio de GitHub a un servicio como Vercel o Cloudflare Pages?

Respuesta: Un build es convertir el proyecto listo para producción. Generalmente instala dependencias, compila, etc. Al conectar un repo a Vercel o Cloudflare, cada push funciona como un build automático y se publica el resultado. Además, los Pull Request generan una preview para poder probar antes del merge

## 7. Rendimiento y SEO en una landing page

Pregunta: Menciona 3 cosas que cuidarías para que una landing page cargue rápido y posicione bien (SEO/rendimiento).

Respuesta: Primero cuidaría las imágenes, las subiría a Cloudinary o similar, cosa que ya está implementada en el ejercicio técnico, y asi se cargan optimizadas. Segundo, que el HTML venga ya renderizado desde el build, para que la página se vea rápido sin depender que el navegador arme todo el JS. Por último, cuidar que el CSS y el JS no pesen de más: con Tailwind, por ejemplo, el build quita las clases que no se usan, y el JS lo cargaría solo donde hacen falta.

## 8. Una tecnología que aún no domino

Pregunta: Cuéntanos de una tecnología que aún no dominas. ¿Cómo aprenderías a usarla si empezaras la próxima semana?

Respuesta: Todavía no tengo mucha experiencia con plataformas como Shopify o similares, porque me gusta más desarrollar desde cero con código. Si empezara la próxima semana, primero crearía una tienda de prueba y revisaría la documentación para entender cómo funcionan los productos, temas, checkout, etc. Luego intentaría personalizar un tema y conectar algo con su API. En caso de atorarme, buscaría la documentación, foros, etc.