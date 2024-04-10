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
          <img src="/project2.webp" style={{ marginRight: "10px" }}></img>
          <div style={{ flexDirection: "column", display: "flex" }}>
            <div style={{ marginTop: "90px" }}>
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
                  <p>Photopea</p>
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
              </div>
            </div>
            <div style={{ marginTop: "20px" }}>
              <h2>Objetivo de Impretion</h2>
              Esta aplicación la realicé utilizando Next.js como framework. Se
              trata de una aplicación creada para complementar un emprendimiento
              mío que permite a los usuarios personalizar sus propios diseños y
              pedirlos, similar a Printify. Actualmente, la aplicación es
              totalmente funcional y utiliza como pasarela de pago a PayU. Está
              alojada en Cloudflare usando la funcionalidad de Cloudflare Pages,
              por lo que la aplicación corre en el Edge. Para la conexión con la
              base de datos, no puedo utilizar tecnologías como Mongoose debido
              a que el Edge, por el momento, no soporta Node.js API, justo lo
              que utiliza el driver de MongoDB para conectarse con la base de
              datos. Para esto, utilicé los HTTP endpoints que ofrece MongoDB,
              de esta forma puedo hacer todas las operaciones de la base de
              datos ya sea desde los server components o desde la API de Next.js
              sin ningún problema.
            </div>
            <div style={{ marginTop: "5px" }}>
              <h2>Futuros sistemas e implementaciones en el presente</h2>
              La aplicación es relativamente nueva y todos los días trabajo para
              mejorarla, agregarle más productos y en general mejorar la
              experiencia de usuario. Actualmente estoy creando un sistema de
              links de referidos para que la gente pueda ganar dinero vendiendo
              productos de Impretion. Para pagarle a los usuarios
              automáticamente, estoy utilizando la API de Nequi y para
              validación OTP/mensajes de marketing o publicitarios para los
              afiliados estoy utilizando una plataforma llamada LabsMobile, la
              cual permite una comunicación certera con mis clientes por medio
              de mensajes.
            </div>
            <div style={{ marginTop: "5px" }}>
              <h2>El editor</h2>
              <p>
                El editor de la aplicación puede generar mockups instantáneos
                con los diseños que utilice el cliente. Esto permite a los
                clientes ver cómo va a quedar su producto antes de comprarlo.
                Estoy utilizando Photopea para la generación de mockups, aunque
                debido a lo pesado que es el proceso de generación, ya que
                Photopea se integra con un iframe el cual le carga al usuario,
                hace que se relentice mucho el dispositivo. Por eso, estoy
                optando por realizar este proceso en un Cloudflare Worker, de
                esa forma este tipo de ejecución se realizaría remotamente y
                solo quedaría obtener el ArrayBuffer de las imágenes finales
                obtenidas. También, actualmente cuento con un panel de diseños
                personalizados. Son diseños que puede utilizar la gente para
                adornar el producto de elección. Los diseños se están guardando
                en Cloudflare R2, el cual tiene implementación con funciones de
                AWS S3. El panel de diseños actualmente lo tengo deshabilitado
                porque pienso cambiar el editor para que sea más dinámico y que
                los usuarios tengan una mejor experiencia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
