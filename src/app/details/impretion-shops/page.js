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
          <img src="/project4.webp" style={{ marginRight: "10px" }}></img>
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
                  <p>VPS</p>
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
                  <p>Puppeteer</p>
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
              </div>
            </div>
            <div style={{ marginTop: "20px" }}>
              <h2>Impretion-shops extensión de impretion</h2>
              Impretion-shops está pensada para dispositivos móviles. Está
              diseñada para que los usuarios puedan personalizar sus productos
              fácilmente, sin necesidad de saber de diseño. Aunque actualmente
              está en desarrollo, al ser el proyecto más reciente, es uno de los
              más difíciles que he realizado debido a la complejidad de la
              ejecución del código HTML que utiliza Photopea, llegando al punto
              de tener que comprar un servidor privado únicamente para poder
              llevarlo a cabo.
              <h2>Objetivo y futuro de impretion-shops</h2>
              El principal objetivo es permitir que las personas que no saben de
              diseño puedan personalizar sus productos fácilmente desde su
              celular y realizar sus pedidos rápida y fácilmente. Actualmente,
              en cuanto a los productos en stock, solo hay tazas para
              personalizar, pero el catálogo se expandirá con el tiempo.
              Actualmente, me centro más en la funcionalidad de la aplicación
              para facilitar la expansión de la misma.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
