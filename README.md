# 4luraFlix

4luraFlix es un proyecto inspirado en plataformas de streaming que permite clasificar, agregar, eliminar y modificar videos en tiempo real. Es una solución sencilla y eficiente para gestionar videos mediante un sistema CRUD totalmente funcional.

---

## Características Generales

### Sistema CRUD con videos:

- **( C ) Crear:** Permite añadir nuevos videos al sistema.
- **( R ) Refrescar vista:** Carga y muestra todos los videos disponibles en la base de datos.
- **( U ) Editar:** Posibilidad de modificar la información de un video existente.
- **( D ) Eliminar:** Elimina videos del sistema de manera permanente.

---

## Características Únicas

1. **Incrustar videos y miniaturas con ID de YouTube:**

   - Solo necesitas proporcionar el **Watch ID** de YouTube para incluir tanto la miniatura como el video.
   - Ejemplo: Proporciona `UuAX5azcvDQ` y automáticamente se generará:
     - Miniatura: `https://i.ytimg.com/vi/UuAX5azcvDQ/maxresdefault.jpg`
     - Video: `https://www.youtube.com/watch?v=UuAX5azcvDQ`

2. **Diseño simplificado y responsive:**

   - Interfaz limpia y optimizada para todo tipo de dispositivos.
   - Uso eficiente de clases CSS para lograr una experiencia de usuario fluida.

3. **Clasificación de videos por color:**

   - Los videos se diferencian visualmente según su categoría mediante colores.

4. **Descripción de videos:**

   - Ahora puedes ver la descripción de un video antes de reproducirlo.

5. **Uso de confirmaciones en acciones sensibles:**
   - Antes de realizar acciones críticas, como eliminar un video o limpiar los datos de un formulario, el sistema solicita una confirmación para evitar errores accidentales.

---

## Tecnologías Usadas

- **Frontend:**

  - React.js
  - CSS (para diseño y estilos responsivos)

- **Backend:**

  - JSON Server (simula una API RESTful para el almacenamiento de datos)

- **Dependencias:**

  - React Router (para la navegación entre páginas)
  - Fetch API (para manejar peticiones HTTP)

- **Herramientas de desarrollo:**
  - Vite (como bundler para un desarrollo más rápido y optimizado)

---

## ¿Cómo iniciar el proyecto?

1. **Iniciar el servidor JSON Server:**

   ```bash
   npm run start:json-server
   ```

   Este comando inicia el servidor que almacena los datos del proyecto. **Nota:** Es necesario ejecutar este servidor antes de interactuar con el frontend.

2. **Iniciar el frontend:**
   ```bash
   npm run dev
   ```
   Esto ejecuta el servidor de desarrollo para el frontend.

---

## Autor

Desarrollado por Adolfo Sánchez Lopéz como parte del desafío 4luraF|ix. 😎
