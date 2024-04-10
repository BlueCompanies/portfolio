"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header({ home, aboutMe, myProjects, contactMe }) {
  const pathNameDetails = usePathname();
  console.log(pathNameDetails);
  const handleScrollContactMe = () => {
    aboutMe?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollMyProjects = () => {
    myProjects?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollContact = () => {
    contactMe?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollHome = () => {
    home?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
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
          borderBottom: "1px solid #dedede",
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
              src="/profile.webp"
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
          <p onClick={() => handleScrollContactMe()}>
            {pathNameDetails === "/" && <>ACERCA DE MI</>}
          </p>
          <p onClick={() => handleScrollMyProjects()}>
            {pathNameDetails === "/" && <>PROYECTOS</>}
          </p>
          <p onClick={() => handleScrollContact()}>
            {pathNameDetails === "/" && <>CONTACTO</>}
          </p>
          <p onClick={() => handleScrollHome()}>
            {pathNameDetails !== "/" ? <Link href="/">HOME</Link> : <>HOME</>}
          </p>
        </div>
      </div>
    </>
  );
}
