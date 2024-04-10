import Header from "@/app/_components/Header";

export default function Page() {
  return (
    <>
      <Header />
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            marginTop: "60px",
            width: "80%",
            display: "flex",
            justifyContent: "center",
            height: "100vh",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <img src="/project1.webp" style={{ marginRight: "10px" }}></img>
          <div style={{ flexDirection: "column", display: "flex" }}>
            <div style={{ marginTop: "10px" }}>
              <p style={{ fontWeight: 700 }}>Tecnologías usadas:</p>
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    background: "#7843E9",
                    width: "fit-content",
                    padding: "10px",
                    color: "#fff",
                    borderRadius: "6px",
                    marginTop: "10px",
                  }}
                >
                  <p>Nextjs</p>
                </div>

                <div
                  style={{
                    background: "#7843E9",
                    width: "fit-content",
                    padding: "10px",
                    color: "#fff",
                    borderRadius: "6px",
                    marginTop: "10px",
                    marginLeft: "5px",
                  }}
                >
                  <p>React</p>
                </div>

                <div
                  style={{
                    background: "#7843E9",
                    width: "fit-content",
                    padding: "10px",
                    color: "#fff",
                    borderRadius: "6px",
                    marginTop: "10px",
                    marginLeft: "5px",
                  }}
                >
                  <p>MongoDB</p>
                </div>

                <div
                  style={{
                    background: "#7843E9",
                    width: "fit-content",
                    padding: "10px",
                    color: "#fff",
                    borderRadius: "6px",
                    marginTop: "10px",
                    marginLeft: "5px",
                  }}
                >
                  <p>Cloudflare</p>
                </div>

                <div
                  style={{
                    background: "#7843E9",
                    width: "fit-content",
                    padding: "10px",
                    color: "#fff",
                    borderRadius: "6px",
                    marginTop: "10px",
                    marginLeft: "5px",
                  }}
                >
                  <p>Funciones de AWS</p>
                </div>

                <div
                  style={{
                    background: "#7843E9",
                    width: "fit-content",
                    padding: "10px",
                    color: "#fff",
                    borderRadius: "6px",
                    marginTop: "10px",
                    marginLeft: "5px",
                  }}
                >
                  <p>Zustand</p>
                </div>

                <div
                  style={{
                    background: "#7843E9",
                    width: "fit-content",
                    padding: "10px",
                    color: "#fff",
                    borderRadius: "6px",
                    marginTop: "10px",
                    marginLeft: "5px",
                  }}
                >
                  <p>Wavesurfer</p>
                </div>
              </div>
            </div>
            <div style={{ marginTop: "20px" }}>
              <h2>¿Qué es FazeSound?</h2>
              FazeSound es una aplicación en la cual publico música generada por
              inteligencia artificial y que la gente puede descargar.
              Actualmente estoy trabajando en aumentar los géneros de la música,
              ya que actualmente hay pocos. Todos los días intento agregar
              música nueva, aunque por falta de tiempo lo estoy haciendo muy
              poco a poco. Esta aplicación pienso agregarle más funcionalidades
              como la posibilidad de compartir una canción por medio de una red
              social. Es una aplicación de música completamente gratis y la
              música no requiere ni atribución ni problemas de copyright.
            </div>

            <div style={{ marginTop: "5px" }}>
              <h2>Tecnologías utilizados en las ondas de sonido</h2>
              Para la generación de las ondas de audio utilicé la librería
              Wavesurfer, la cual genera picos de audio acorde al archivo de
              audio que se le dé. Esto es para que el usuario tenga una mejor
              experiencia. Utilice un archivo JSON para que la libreria de
              wavesurfer pueda leer mas facilmente las ondas de audio y de esta
              forma optimizar el sitio web, este archivo JSON lo alojo junto con
              los archivos principales de las canciones en un bucker de
              cloudflare R2 Cuenta con un panel en el cual aparece la canción
              que actualmente se está escuchando. Para la comunicación entre
              variables utilicé Zustand (para estados globales). Sin embargo,
              como la aplicación es bastante nueva, poco a poco le estoy
              agregando mejores funcionalidades.
            </div>

            <div style={{ marginTop: "20px" }}>
              <h2>Tecnologías utilizadas en las ondas de sonido</h2>
              Para la generación de las ondas de audio, utilicé la librería
              Wavesurfer, la cual genera picos de audio acorde al archivo de
              audio que se le dé. Esto es para que el usuario tenga una mejor
              experiencia. Utilicé un archivo JSON para que la librería de
              Wavesurfer pueda leer más fácilmente las ondas de audio y así
              optimizar el sitio web. Este archivo JSON lo alojé junto con los
              archivos principales de las canciones en un bucket de Cloudflare
              R2. La aplicación cuenta con un panel en el cual aparece la
              canción que actualmente se está escuchando. Para la comunicación
              entre variables, utilicé Zustand (para estados globales). Sin
              embargo, como la aplicación es bastante nueva, poco a poco le
              estoy agregando mejores funcionalidades.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
