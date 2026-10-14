# Respuestas

## 1. CSR, SSR y SSG

Pregunta: Explica con un ejemplo la diferencia entre renderizado en el cliente (CSR), del lado del servidor (SSR) y sitios estáticos (SSG). ¿Para un sitio corporativo informativo cuál elegirías y por qué?

Respuesta: CSR descarga JavaScript y con eso arma la página en el navegador, como en un dashboard. Con SSR, en cambio, el HTML de la vista se genera en el servidor en cada petición. Con SSG se genera una sola vez, durante el build. Yo escogería SSG para un sitio corporativo por su carga rápida, porque es fácil de mantener y porque funciona bien para SEO.

## 2. Astro, Next.js y Svelte

Pregunta: Elige uno con el que te sientas más cómodo y di en qué proyecto real lo usarías frente a los otros dos.

Respuesta: Escogería Next.js porque ya me siento cómodo con React. Lo usaría en algo como una tienda en línea o una plataforma con login, donde puedo mezclar SSR, SSG y APIs en el mismo proyecto. Astro lo dejaría más para blogs o landings con poco JavaScript, y Svelte, generalmente, para aplicaciones más ligeras.

## 3. WordPress frente a un sitio a medida

Pregunta: ¿Cuándo recomendarías un CMS como WordPress y cuándo un sitio hecho a medida? Menciona una ventaja y una desventaja de cada camino.

Respuesta: Recomendaría WordPress cuando el cliente quiere editar o administrar su contenido por su cuenta y tiene poco presupuesto o tiempo. Recomendaría un sitio a medida cuando hay lógica de negocio específica o se requiere más control. Un sitio hecho a la medida da más control, pero cuesta más y depende de desarrolladores.

## 4. Shopify frente a Magento

Pregunta: Para una tienda en línea, ¿qué preguntas le harías al cliente antes de decidir entre Shopify y Magento?

Respuesta: Depende del caso. Preguntaría cuántos productos manejaría en un par de años, si tiene equipo técnico propio o depende de una agencia, y qué tan especiales son sus procesos. También preguntaría cuál es su presupuesto mensual de mantenimiento y qué sistemas de pago necesita conectar. En base a eso decidiría entre Shopify y Magento.

## 5. De mi computadora a producción con Git y GitHub

Pregunta: Describe, paso a paso y con tus palabras, cómo llevarías un cambio de código desde tu computadora hasta producción usando Git y GitHub. Menciona ramas (branches) y Pull Requests.

Respuesta:

1. Hago un git pull en main para tener la versión más reciente.
2. Creo una rama nueva para mi cambio.
3. Aplico los cambios, los pruebo en local y hago los commits.
4. Subo la rama con git push.
5. Abro un Pull Request hacia main.
6. Verifico que no haya errores y hago el merge.
7. El sitio se despliega en producción y reviso que todo funcione bien.

## 6. Qué es un build y qué pasa al conectar un repositorio

Pregunta: ¿Qué es un "build" y qué crees que pasa cuando conectas un repositorio de GitHub a un servicio como Vercel o Cloudflare Pages?

Respuesta: Un build es convertir el proyecto en una versión lista para producción. Generalmente instala las dependencias, compila el código, etc. Al conectar un repositorio a Vercel o Cloudflare Pages, cada push dispara un build automático y se publica el resultado. Además, los Pull Requests generan una preview para poder probar los cambios antes del merge.

## 7. Rendimiento y SEO en una landing page

Pregunta: Menciona 3 cosas que cuidarías para que una landing page cargue rápido y posicione bien (SEO/rendimiento).

Respuesta:

1. Las imágenes. Las subiría a Cloudinary o a un servicio similar para que se sirvan optimizadas, algo que ya está implementado en el ejercicio técnico.
2. Que el HTML venga ya renderizado desde el build, para que la página se vea rápido sin depender de que el navegador arme todo con JavaScript.
3. Que el CSS y el JavaScript no pesen de más. Con Tailwind, por ejemplo, el build elimina las clases que no se usan, y cargaría el JavaScript solo donde haga falta.

## 8. Una tecnología que aún no domino

Pregunta: Cuéntanos de una tecnología que aún no dominas. ¿Cómo aprenderías a usarla si empezaras la próxima semana?

Respuesta: Todavía no tengo mucha experiencia con plataformas como Shopify o similares, porque me gusta más desarrollar desde cero con código. Si empezara la próxima semana, primero crearía una tienda de prueba y revisaría la documentación para entender cómo funcionan los productos, los temas, el checkout, etc. Luego intentaría personalizar un tema y conectar algo con su API. En caso de atorarme, buscaría en la documentación, en foros, etc.