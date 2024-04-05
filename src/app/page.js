"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope } from "react-icons/fa";

export default function Home() {
  const form = useRef();
  const aboutMe = useRef(null);
  const myProjects = useRef(null);
  const contactMe = useRef(null);
  const [isMessageSent, setIsMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_trtgwxx", "template_fvutoru", form.current, {
        publicKey: "5n_DXv2GLGmL_MdVX",
      })
      .then(
        () => {
          setIsMessageSent(true);
          form.current.from_email.value = "";
          form.current.from_name.value = "";
          form.current.message.value = "";
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const handleScrollContactMe = () => {
    aboutMe.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollMyProjects = () => {
    myProjects.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollContact = () => {
    contactMe.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isMessageSent) {
      setTimeout(() => {
        setIsMessageSent(false);
      }, 10000);
    }
  }, [isMessageSent]);

  return (
    <main style={{ position: "relative" }}>
      <div
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          background: "#fff",
          height: "60px",
          display: "flex",
          justifyContent: "space-between", // Align items to the edges
          alignItems: "center", // Vertically center items
          boxShadow: "1px 1px solid #000",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: "50px",
              height: "50px",
              marginLeft: "20px",
              borderRadius: "50%",
            }}
          >
            <img
              src="profile.jpg"
              style={{
                objectFit: "cover",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
              }}
            ></img>
          </div>
          <p
            style={{
              marginLeft: "10px",
              color: "#303030",
              fontSize: "16px",
              fontWeight: 700,
            }}
          >
            ANDRÉS FELIPE BETANCUR
          </p>
        </div>

        <div
          style={{
            width: "40%",
            height: "40px",
            fontSize: "16px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            color: "#303030",
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          <p onClick={() => handleScrollContactMe()}>ACERCA DE MI</p>
          <p onClick={() => handleScrollMyProjects()}>PROYECTOS</p>
          <p onClick={() => handleScrollContact()}>CONTACTO</p>
        </div>
      </div>
      <div
        style={{
          background: "#EEEEEE",
          height: "700px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <p style={{ color: "#303030", fontSize: 80, fontWeight: 700 }}>
          HOLA, SOY ANDRÉS
        </p>
        <div style={{ width: "500px", textAlign: "center" }}>
          <p style={{ color: "#303030" }}>
            Un desarrollador web enfocado full stack, apasionado por crear
            experiencias digitales innovadoras y funcionales
          </p>
        </div>
        <button
          style={{
            border: "none",
            outline: "none",
            padding: "10px",
            width: "200px",
            marginTop: "30px",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: 700,
            height: "50px",
            background: "#7843E9",
            color: "#fff",
          }}
          onClick={() => handleScrollMyProjects()}
        >
          PROYECTOS
        </button>
      </div>
      <div style={{ background: "#fff" }} ref={aboutMe}>
        <div
          style={{
            width: "80%",
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            height: "700px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "60px",
              width: "100%",
            }}
          >
            <p style={{ fontSize: "40px", color: "#303030", fontWeight: 700 }}>
              ACERCA DE MÍ
            </p>
            <div
              style={{
                width: "50px",
                height: "10px",
                background: "#7843E9",
                marginTop: "10px",
                borderRadius: "10px",
              }}
            ></div>

            <div
              style={{
                marginTop: "70px",
                width: "100%",
                height: "500px",
                display: "flex",
                flexDirection: "row",
                color: "#303030",
              }}
            >
              <div style={{ width: "50%", padding: "20px" }}>
                <p style={{ fontSize: "35px", fontWeight: 700 }}>
                  Un poco de mi
                </p>
                <p
                  style={{
                    wordWrap: "break-word",
                    marginTop: "15px",
                    fontSize: "19px",
                  }}
                >
                  Soy un desarrollador web full stack. Aprendí empíricamente
                  diversas habilidades, como el diseño 3D y la animación. Luego,
                  comencé a aprender programación, empezando con pequeños
                  proyectos en Python usando Django. Posteriormente, aprendí
                  JavaScript para eventualmente dominar React y Next.js. También
                  incursioné en la creación de mis primeros modelos de
                  inteligencia artificial para implementarlos en pequeños
                  proyectos web propios, aunque no profundicé mucho en este
                  campo sé lo básico. Mi estilo de desarrollo es MERN, pero
                  considero que soy bastante flexible y me adapto a cualquier
                  tecnología.
                </p>
              </div>

              <div
                style={{
                  width: "50%",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <p style={{ fontSize: "35px", fontWeight: 700 }}>
                  Mis habilidades
                </p>
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    height: "fit-content",
                    flexDirection: "column",
                    borderRadius: "4px",
                    border: "1px solid #dedede",
                    color: "#fff",
                  }}
                >
                  <p
                    style={{
                      color: "#303030",
                      margin: "10px",
                      fontSize: "700",
                    }}
                  >
                    Habilidades principales
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap" }}>
                    <div className={styles.skill}>HTML</div>
                    <div className={styles.skill}>CSS</div>
                    <div className={styles.skill}>JavaScript</div>
                    <div className={styles.skill}>React</div>
                    <div className={styles.skill}>Nextjs</div>
                    <div className={styles.skill}>MongoDB</div>
                    <div className={styles.skill}>Python</div>
                    <div className={styles.skill}>Django</div>
                    <div className={styles.skill}>Git</div>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    height: "fit-content",
                    flexDirection: "column",
                    borderRadius: "4px",
                    border: "1px solid #dedede",
                    color: "#fff",
                    marginTop: "10px",
                  }}
                >
                  <p
                    style={{
                      color: "#303030",
                      margin: "10px",
                      fontSize: "700",
                    }}
                  >
                    Habilidades secundarias
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap" }}>
                    <div className={styles.skill}>Photoshop</div>
                    <div className={styles.skill}>Adobe Illustrator</div>
                    <div className={styles.skill}>Blender</div>
                    <div className={styles.skill}>Cloudflare</div>
                    <div className={styles.skill}>AWS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
        ref={myProjects}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            width: "100%",
            background: "#dedede",
          }}
        >
          <p
            style={{
              fontSize: "40px",
              color: "#303030",
              fontWeight: 700,
              marginTop: "70px",
            }}
          >
            MIS PROYECTOS
          </p>
          <div
            style={{
              width: "50px",
              height: "10px",
              background: "#7843E9",
              marginTop: "10px",
              borderRadius: "10px",
            }}
          ></div>

          <div
            style={{
              marginTop: "70px",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              color: "#303030",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "70%",
              }}
            >
              <img src="./project1.webp"></img>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "50%",
                }}
              >
                <a href="https://fazesound.com" target="_blank">
                  <h2>fazesound.com</h2>
                </a>

                <p
                  style={{
                    wordWrap: "break-word",
                  }}
                >
                  Este es uno de mis proyectos más recientes: una aplicación de
                  música generada por inteligencia artificial. Está creada con
                  Next.js y alojada en Cloudflare. Para los espectros de audio,
                  utilicé la biblioteca Wavesurfer, y para la optimización de
                  las ondas de audio, convertí cada espectro en un archivo JSON,
                  los cuales se alojan en Cloudflare R2. Luego, los normalicé
                  con un script de Python. De esta forma, los espectros de audio
                  cargan rápidamente. La aplicación es bastante nueva y aún le
                  estoy agregando nuevas funcionalides.
                </p>
              </div>
            </div>
          </div>

          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              color: "#303030",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "70%",
              }}
            >
              <img src="./project2.webp"></img>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "50%",
                }}
              >
                <a href="https://impretion.com" target="_blank">
                  <h2>impretion.com</h2>
                </a>

                <p
                  style={{
                    wordWrap: "break-word",
                  }}
                >
                  Yo tengo una empresa pequeña de estampados y esta aplicación,
                  en la cual llevo más de 4 meses trabajando, permite a los
                  usuarios personalizar de forma más sencilla los productos que
                  ofrezco gracias a un editor que les permite colocar sus
                  diseños sobre el producto que desean comprar. Para la pasarela
                  de pago, utilizo PayU. La aplicación está alojada en
                  Cloudflare, todos sus archivos en Cloudflare R2, y utilizo
                  Photopea para el intercambio de objetos inteligentes, lo que
                  permite que el usuario pueda previsualizar cómo se verían sus
                  diseños en el producto que desea comprar en tiempo real.
                </p>
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: "70px",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              color: "#303030",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "70%",
              }}
            >
              <img src="./project3.webp"></img>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "50%",
                }}
              >
                <a
                  href="https://nuzke-abetancurlobelo2405.vercel.app/"
                  target="_blank"
                >
                  <h2>nuzke.com (dominio vencido)</h2>
                </a>

                <p
                  style={{
                    wordWrap: "break-word",
                  }}
                >
                  Nuzke fue uno de mis primeros proyectos y aprendí muchas cosas
                  al realizarlo. Se trata de una red social para animales que
                  están en adopción. Los usuarios pueden crear su perfil y
                  publicar animales en situación de calle. El inicio de sesión
                  lo realicé sin usar ninguna librería, ya que quería aprender a
                  autenticar usuarios utilizando únicamente JWT tokens y
                  cookies. En su momento, decidí guardar las imágenes en
                  Cloudinary, aunque me di cuenta de que, como las imágenes no
                  necesitan ningún tipo de optimización ni edición, lo mejor
                  sería simplemente guardarlas en Cloudflare R2 o AWS S3. Tengo
                  planeado retomar este proyecto y mejorarlo aún más con los
                  conocimientos que tengo ahora en el presente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          height: "700px",
        }}
        ref={contactMe}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              fontSize: "40px",
              color: "#303030",
              fontWeight: 700,
            }}
          >
            CONTACTAME
          </p>
          <div
            style={{
              width: "50px",
              height: "10px",
              background: "#7843E9",
              marginTop: "10px",
              borderRadius: "10px",
            }}
          ></div>
          {isMessageSent && (
            <div
              style={{
                margin: "20px",
                width: "50%",
                background: "#7843E9",
                display: "flex",
                justifyContent: "center",
                borderRadius: "4px",
                color: "#fff",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  padding: "15px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                MENSAJE ENVIADO CON ÉXITO!{" "}
                <FaEnvelope style={{ marginLeft: "10px", fontSize: "22px" }} />
              </p>
            </div>
          )}
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              width: "50%",
            }}
            ref={form}
            onSubmit={sendEmail}
          >
            <label>Nombre</label>
            <input
              type="text"
              name="from_name"
              style={{
                outline: "none",
                border: "1px solid #dedede",
                fontSize: "20px",
                padding: "10px",
                borderRadius: "4px",
              }}
            />
            <label style={{ marginTop: "20px" }}>Correo electrónico</label>
            <input
              type="email"
              name="from_email"
              style={{
                outline: "none",
                border: "1px solid #dedede",
                fontSize: "20px",
                padding: "10px",
                borderRadius: "4px",
              }}
            />
            <label style={{ marginTop: "20px" }}>Mensaje</label>
            <textarea
              name="message"
              style={{
                height: "200px",
                outline: "none",
                border: "1px solid #dedede",
                borderRadius: "4px",
                resize: "none",
                padding: "10px",
                fontSize: "15px",
              }}
            />
            <input
              type="submit"
              value="ENVIAR"
              style={{
                marginTop: "10px",
                outline: "none",
                border: "none",
                padding: "10px",
                borderRadius: "4px",
                background: "#7843E9",
                color: "#fff",
                fontWeight: "700",
                cursor: "pointer",
              }}
            />
          </form>
        </div>
      </div>
    </main>
  );
}
