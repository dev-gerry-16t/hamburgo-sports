import Head from "next/head";
import Image from "next/image";
import PrincipalImg from "../assets/img/principal_picture.png";
import AboutUs from "../assets/img/about_us.jpg";
import ComponentReservation from "../components/componentReservation";
import ComponentMenu from "../components/componentMenu";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hamburgo Sports</title>
        <meta name="description" content="Restaurante-bar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <main className="container">
          <div className="header-main">
            <div className="mask-main">
              <div className="menu-header">
                <div className="menu">
                  <span>Inicio</span>
                  <span>Reservación</span>
                  <span>Menu</span>
                  <span>Galería</span>
                  <span>Ubicación</span>
                  <span>Cava VIP</span>
                  <span>
                    <button className="button-secondary">
                      Pide para recoger
                    </button>
                  </span>
                </div>
              </div>
              <div className="body-message">
                <h1>Hamburgo Sports</h1>
                <span>Siente el sabor de el entretenimiento</span>
                <span>
                  Disfruta de los mejores eventos deportivos
                  <br /> mientras degustas nuestros platillos
                </span>
                <button className="button-action">Nuestro menu</button>
              </div>
            </div>
            <div className="content-image"></div>
          </div>
          <div className="body-container">
            <div className="white-space"></div>
            <div className="eat-space">
              <div className="eat-mask-main"></div>
              <div className="eat-content-image"></div>
            </div>
            <div className="container-info">
              <div className="about-us">
                <div className="about-us-1">
                  <div className="description">
                    <h2>Sobre nosotros</h2>
                    <span>
                      Hamburgo sports trae una idea original combinando el mejor
                      sabor y entretenimiento para los amantes del deporte. El
                      restaurante ofrece diferentes tipos de comida y postres
                      deliciosos ideales para disfrutar mientras miras tu evento
                      deportivo favorito
                    </span>
                  </div>
                </div>
                <div className="about-us-2">
                  <img
                    className="image-container"
                    src="./about_us.jpg"
                    alt="sobre-nosotros"
                  ></img>
                </div>
              </div>
              <ComponentReservation />
              <ComponentMenu/>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
