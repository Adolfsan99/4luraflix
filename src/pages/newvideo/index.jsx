import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./newvideo.module.css";

function NewVideo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [cover, setCover] = useState("");
  const [video, setVideo] = useState("");
  const [category, setCategory] = useState("");
  const [youtubeId, setYoutubeId] = useState(""); // Nuevo estado para el ID de YouTube

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleYoutubeIdChange = (e) => {
    const id = e.target.value.trim(); // Trim para evitar espacios extra
    setYoutubeId(id);

    // Si el campo se llena, sobreescribe video y cover automáticamente
    if (id) {
      setCover(`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`);
      setVideo(`https://www.youtube.com/watch?v=${id}`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description || !cover || !video || category === "") {
      setError("Todos los campos son requeridos.");
      setTimeout(() => setError(""), 4000);
      return;
    }

    setError("");

    const newVideo = { title, description, cover, video, category };

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
        //navigate("/"); // Redirige a la ruta "/"
      })
      .catch((error) => {
        console.error("Error al crear el video:", error);
        alert("Hubo un error al crear el video.");
      });

    setTitle("");
    setDescription("");
    setCover("");
    setVideo("");
    setCategory("");
    setYoutubeId(""); // Limpia también el ID de YouTube
  };

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
      setYoutubeId(""); // Limpia también el ID de YouTube
      setError("");
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
        <label>ID Watch de YouTube</label>
        <input
          type="text"
          name="youtubeId"
          placeholder="Se encuentra en la url de Youtube después del ' watch?v= ' y antes del ' &t ' en caso de errores."
          value={youtubeId}
          onChange={handleYoutubeIdChange}
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

        {error && <p className={styles.errorMessage}>{error}</p>}

        <div className={styles.buttonContainer}>
          <button className={styles.newVideoButtonCreate} type="submit">
            Crear
          </button>
          <button
            className={styles.newVideoButtonClean}
            type="button"
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
