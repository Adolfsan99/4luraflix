import styles from './newvideo.module.css';

function NewVideo() {
  return (
    <div className={styles.form}>      <h1 className={styles.title}>Nuevo Video</h1>
      <p className={styles.description}>Completa el formulario para crear una nueva tarjeta de video</p>

    <div className={styles.formContainer}>

        <label>Título</label>
        <input type="text" name="title" placeholder="Ejemplo: Tarjeta de presentación" />
        <br></br>
        <label>Descripción</label>
        <input type="text" name="description" placeholder="Ejemplo: Tarjeta de presentación" />
        <br></br>
        <label>Imagen</label>
        <input type="text" name="description" placeholder="Ejemplo: Tarjeta de presentación" />
                <br></br>
        <label>Video</label>
        <input type="text" name="description" placeholder="Ejemplo: Tarjeta de presentación" />
                <br></br>
        <label>Categoria</label>
  <select id="category" name="category">
    <option value="frontend">Frontend</option>
    <option value="backend">Backend</option>
    <option value="innovacion">Innovación</option>
  </select>

                <br></br>

        <button className={styles.button}>Crear</button>
        
        <button className={styles.button}>Limpiar</button>
    </div>    
                    <br></br>  </div>
  );
}

export default NewVideo;


