import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import styles from "./newvideo.module.css";

function NewVideo() {
  // Estado para cada campo del formulario
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [cover, setCover] = useState("");
  const [video, setVideo] = useState("");
  const [category, setCategory] = useState("");

  // Estado para el mensaje de error
  const [error, setError] = useState("");

  // Hook de navegación para redirigir después de crear el video
  const navigate = useNavigate();

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto

    // Validación de campos requeridos
    if (!title || !description || !cover || !video || category === "") {
      setError("Todos los campos son requeridos.");
      // Hacer que el mensaje de error desaparezca después de 4 segundos
      setTimeout(() => setError(""), 4000);
      return;
    }

    // Validación de la portada (debe terminar en una extensión de imagen válida)
    const validImageExtensions = [".jpg", ".jpeg", ".png", ".gif"];
    const isValidCover = validImageExtensions.some((ext) =>
      cover.toLowerCase().endsWith(ext)
    );

    if (!isValidCover) {
      setError(
        "La URL de la portada debe terminar en una extensión de imagen válida (.jpg, .jpeg, .png, .gif)."
      );
      // Hacer que el mensaje de error desaparezca después de 4 segundos
      setTimeout(() => setError(""), 4000);
      return;
    }

    // Limpiar el mensaje de error si todo es válido
    setError("");

    // Crear un objeto con los datos del formulario
    const newVideo = {
      title,
      description,
      cover,
      video,
      category,
    };

    // Guardar el nuevo video en db.json
    fetch("http://localhost:5000/videos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newVideo),
    })
      .then((response) => response.json())
      .then(() => {
        console.log("Nuevo video creado:", newVideo);
        alert("Video creado exitosamente.");
        // Redirigir a la página principal
        //navigate("/"); // Redirige a la ruta "/"
      })
      .catch((error) => {
        console.error("Error al crear el video:", error);
        alert("Hubo un error al crear el video.");
      });

    // Limpiar el formulario después de enviar
    setTitle("");
    setDescription("");
    setCover("");
    setVideo("");
    setCategory("");
  };

  // Función para manejar la limpieza del formulario con confirmación
  const handleClear = () => {
    const confirmed = window.confirm(
      "¿Estás seguro de que quieres limpiar todos los campos?"
    );
    if (confirmed) {
      setTitle("");
      setDescription("");
      setCover("");
      setVideo("");
      setCategory("");
      setError(""); // Limpiar el mensaje de error
    }
  };

  return (
    <div className={styles.form}>
      <div className={styles.border}></div>
      <h1 className={styles.title}>Nuevo Video</h1>
      <p className={styles.description}>
        Completa el formulario para crear una nueva tarjeta de video
      </p>
      <div className={styles.border}></div>

      {/* Forma para manejar el submit del formulario */}
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <label>Título</label>
        <input
          type="text"
          name="title"
          placeholder="Ingresa el título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Descripción</label>
        <input
          type="text"
          name="description"
          placeholder="Ingresa la descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <label>Portada</label>
        <input
          type="text"
          name="cover"
          placeholder="Ingresa el link de imagen"
          value={cover}
          onChange={(e) => setCover(e.target.value)}
          required
        />
        <label>Video</label>
        <input
          type="text"
          name="video"
          placeholder="Ingresa el link de video"
          value={video}
          onChange={(e) => setVideo(e.target.value)}
          required
        />
        <label>Categoría</label>
        <select
          id="category"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required>
          <option value="">Seleccione una categoría</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="innovacion">Innovación</option>
        </select>

        <div className={styles.border}></div>

        {/* Mensaje de error */}
        {error && <p className={styles.errorMessage}>{error}</p>}

        <div className={styles.buttonContainer}>
          <button
            className={styles.newVideoButtonCreate}
            type="submit" // Asegúrate de que el botón de envío sea del tipo submit
          >
            Crear
          </button>

          <button
            className={styles.newVideoButtonClean}
            type="button" // Este botón no debe enviar el formulario, solo limpiar
            onClick={handleClear}>
            Limpiar
          </button>
        </div>
      </form>

      <div className={styles.border}></div>
      <div className={styles.border}></div>
    </div>
  );
}

export default NewVideo;
