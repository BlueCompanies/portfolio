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
          <img src="/project3.webp" style={{ marginRight: "10px" }}></img>
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
                  <p>Vercel</p>
                </div>
              </div>
            </div>
            <div style={{ marginTop: "20px" }}>
              <h2>Mi primer proyecto: Nuzke</h2>
              Nuzke fue uno de mis primeros proyectos, una aplicación destinada
              a la adopción de mascotas que operaba como una especie de red
              social. A través de esta aplicación, aprendí una gran cantidad de
              conceptos y técnicas que aún aplico en mis proyectos actuales.
              Además, tuve la oportunidad de experimentar con diversas
              tecnologías durante su desarrollo. Utilicé Cloudinary para el
              almacenamiento de imágenes que los usuarios subían a la
              plataforma, MongoDB como base de datos para la gestión de datos, y
              Next.js como framework para el desarrollo del lado del servidor.
              Aunque fue uno de mis primeros proyectos reales, el diseño CSS es
              bastante básico y no muy llamativo. Sin embargo, cada línea de
              código escrita y cada problema resuelto durante el desarrollo de
              Nuzke representaron un valioso aprendizaje para mí. Además de
              adquirir habilidades técnicas, Nuzke me brindó la oportunidad de
              sumergirme en el mundo de los DNS y dominios, ya que fue una de
              mis primeras aplicaciones en pasar a producción. Este aspecto del
              proyecto me permitió comprender en profundidad cómo funcionan los
              servicios de alojamiento web y cómo configurar correctamente un
              dominio para que mi aplicación esté accesible en línea. En
              resumen, Nuzke no solo fue mi primer proyecto real, sino también
              una experiencia formativa fundamental en mi camino como
              desarrollador. Cada desafío superado y cada solución implementada
              contribuyeron significativamente a mi crecimiento profesional y
              personal en el fascinante mundo del desarrollo de software.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
