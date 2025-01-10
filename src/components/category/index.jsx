import { useEffect, useState } from "react";
import styles from "./category.module.css";

function Category() {
  const [videos, setVideos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  // Cargar los datos desde el servidor local
  useEffect(() => {
    fetch("http://localhost:5000/videos")
      .then((response) => response.json())
      .then((data) => setVideos(data))
      .catch((error) => console.error("Error al cargar los videos:", error));
  }, []);

  // Función para filtrar videos por categoría
  const filterByCategory = (category) => {
    return videos.filter((video) => video.category === category);
  };

  // Función para abrir el modal de edición
  const openModal = (video) => {
    setCurrentVideo(video);
    setIsModalOpen(true);
  };

  // Función para cerrar el modal de edición
  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentVideo(null);
  };

  // Función para manejar el cambio de datos en el formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentVideo({
      ...currentVideo,
      [name]: value,
    });
  };

  // Función para borrar un video con confirmación
  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "¿Estás seguro de que quieres borrar este video?"
    );
    if (confirmed) {
      fetch(`http://localhost:5000/videos/${id}`, {
        method: "DELETE",
      })
        .then(() => {
          setVideos(videos.filter((video) => video.id !== id)); // Eliminarlo de la UI
          console.log("Video eliminado");
        })
        .catch((error) => console.error("Error al eliminar el video:", error));
    } else {
      console.log("Borrado cancelado");
    }
  };

  // Función para guardar los cambios
  const handleSaveChanges = () => {
    // Hacemos un PUT para actualizar el video
    fetch(`http://localhost:5000/videos/${currentVideo.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(currentVideo),
    })
      .then((response) => response.json())
      .then((updatedVideo) => {
        // Actualizamos la lista de videos con el video actualizado
        setVideos((prevVideos) =>
          prevVideos.map((video) =>
            video.id === currentVideo.id ? updatedVideo : video
          )
        );
        console.log("Video actualizado:", updatedVideo);
        setIsModalOpen(false); // Cerrar el modal después de la actualización
      })
      .catch((error) => console.error("Error al actualizar el video:", error));
  };

  // Función para manejar el clic en un video (muestra una ventana de confirmación si tiene descripción)
  const handleVideoClick = (video) => {
    if (video.description) {
      const confirmed = window.confirm(
        `En este video aprenderás: ${video.description}`
      );
      if (confirmed) {
        window.open(video.video, "_blank");
      }
    } else {
      window.open(video.video, "_blank");
    }
  };

  return (
    <div className={styles.mainCategory}>
      {/* Frontend Category */}
      <div className={styles.categorySection}>
        <h1
          className={styles.categoryTitle}
          style={{ backgroundColor: "#6bd1ff" }}>
          Front-End
        </h1>
        <div className={styles.categoryContainer}>
          {filterByCategory("frontend").map((video) => (
            <div key={video.id} className={styles.videoContrainer}>
              {/* Hacer clic en la imagen para abrir la descripción y confirmar */}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault(); // Prevenir la acción por defecto
                  handleVideoClick(video);
                }}>
                <img src={video.cover} alt={video.title} />
              </a>
              <div className={styles.videoManager}>
                <div className={styles.videoTitle}>{video.title}</div>
                <div className={styles.videoButtons}>
                  <button
                    className={styles.videoButton}
                    onClick={() => openModal(video)}>
                    EDITAR
                  </button>
                  <button
                    className={styles.videoButton}
                    onClick={() => handleDelete(video.id)}>
                    BORRAR
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Backend Category */}
      <div className={styles.categorySection}>
        <h1
          className={styles.categoryTitle}
          style={{ backgroundColor: "#00c86f" }}>
          Back-End
        </h1>
        <div className={styles.categoryContainer}>
          {filterByCategory("backend").map((video) => (
            <div key={video.id} className={styles.videoContrainer}>
              {/* Hacer clic en la imagen para abrir la descripción y confirmar */}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault(); // Prevenir la acción por defecto
                  handleVideoClick(video);
                }}>
                <img src={video.cover} alt={video.title} />
              </a>
              <div
                className={styles.videoManager}
                style={{ borderColor: "#00c86f" }}>
                <div className={styles.videoTitle}>{video.title}</div>
                <div className={styles.videoButtons}>
                  <button
                    className={styles.videoButton}
                    onClick={() => openModal(video)}>
                    EDITAR
                  </button>
                  <button
                    className={styles.videoButton}
                    onClick={() => handleDelete(video.id)}>
                    BORRAR
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Innovación Category */}
      <div className={styles.categorySection}>
        <h1
          className={styles.categoryTitle}
          style={{ backgroundColor: "#ffba05" }}>
          Innovación y Gestión
        </h1>
        <div className={styles.categoryContainer}>
          {filterByCategory("innovacion").map((video) => (
            <div key={video.id} className={styles.videoContrainer}>
              {/* Hacer clic en la imagen para abrir la descripción y confirmar */}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault(); // Prevenir la acción por defecto
                  handleVideoClick(video);
                }}>
                <img src={video.cover} alt={video.title} />
              </a>
              <div
                className={styles.videoManager}
                style={{ borderColor: "#ffba05" }}>
                <div className={styles.videoTitle}>{video.title}</div>
                <div className={styles.videoButtons}>
                  <button
                    className={styles.videoButton}
                    onClick={() => openModal(video)}>
                    EDITAR
                  </button>
                  <button
                    className={styles.videoButton}
                    onClick={() => handleDelete(video.id)}>
                    BORRAR
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de Edición */}
      {isModalOpen && (
        <div className={styles.modal} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeModal} onClick={closeModal}>
              X
            </button>
            <h2>Editar Video</h2>
            <form>
              <label>Título</label>
              <input
                type="text"
                name="title"
                value={currentVideo.title}
                onChange={handleInputChange}
                placeholder="Ingresa el título"
              />
              <label>Descripción</label>
              <input
                type="text"
                name="description"
                value={currentVideo.description}
                onChange={handleInputChange}
                placeholder="Ingresa la descripción"
              />
              <label>Portada</label>
              <input
                type="text"
                name="cover"
                value={currentVideo.cover}
                onChange={handleInputChange}
                placeholder="Ingresa el link de imagen"
              />
              <label>Video</label>
              <input
                type="text"
                name="video"
                value={currentVideo.video}
                onChange={handleInputChange}
                placeholder="Ingresa el link de video"
              />
              <label>Categoría</label>
              <select
                name="category"
                value={currentVideo.category}
                onChange={handleInputChange}>
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
                <option value="innovacion">Innovación</option>
              </select>
            </form>
            <button onClick={handleSaveChanges}>Guardar Cambios</button>
            <button onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Category;
