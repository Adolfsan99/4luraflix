import React, { useState } from "react";
import styles from "./newvideo.module.css";

function NewVideo() {
  // Estado para cada campo del formulario
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [cover, setCover] = useState("");
  const [video, setVideo] = useState("");
  const [category, setCategory] = useState("");

  // Array para almacenar los videos
  const [videos, setVideos] = useState([]);

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto

    // Crear un objeto con los datos del formulario
    const newVideo = {
      title,
      description,
      cover,
      video,
      category,
    };

    // Mostrar el objeto en la consola
    console.log("Nuevo video creado:", newVideo);

    // Guardar el nuevo video en el array
    setVideos((prevVideos) => [...prevVideos, newVideo]);

    // Limpiar el formulario después de enviar
    setTitle("");
    setDescription("");
    setCover("");
    setVideo("");
    setCategory("");
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
        <label>Título</label>
        <input
          type="text"
          name="title"
          placeholder="Ingresa el título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Descripción</label>
        <input
          type="text"
          name="description"
          placeholder="Ingresa la descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Portada</label>
        <input
          type="text"
          name="cover"
          placeholder="Ingresa el link de imagen"
          value={cover}
          onChange={(e) => setCover(e.target.value)}
        />
        <label>Video</label>
        <input
          type="text"
          name="video"
          placeholder="Ingresa el link de video"
          value={video}
          onChange={(e) => setVideo(e.target.value)}
        />
        <label>Categoria</label>
        <select
          id="category"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="innovacion">Innovación</option>
        </select>

        <div className={styles.border}></div>
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
            onClick={() => {
              setTitle("");
              setDescription("");
              setCover("");
              setVideo("");
              setCategory("");
            }}>
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
