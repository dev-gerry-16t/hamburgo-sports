import Head from "next/head";
import Image from "next/image";
import PrincipalImg from "../assets/img/principal_picture.png";
import AboutUs from "../assets/img/about_us.jpg";
import ComponentReservation from "../components/componentReservation";
import ComponentMenu from "../components/componentMenu";
import ComponentGallery from "../components/componentGallery";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hamburgo Sports</title>
        <meta
          name="description"
          content="Los mejores eventos deportivos sólo en Hamburgo Sports Restaurente - Bar"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <div>
        <main className="container">
          <div className="header-main">
            <div className="mask-main">
              <div className="menu-header">
                <div className="menu">
                  <span>
                    <Link href="/">Inicio</Link>
                  </span>
                  <span>
                    <Link href="#reservacion-hamburgo-sports">Reservación</Link>
                  </span>
                  <span>
                    <Link href="#menu-hamburgo-sports">Menu</Link>
                  </span>
                  <span>
                    <Link href="#galeria-hamburgo-sports">Galería</Link>
                  </span>
                  <span>
                    <Link href="#ubicacion-hamburgo-sports">Ubicación</Link>
                  </span>
                  {/* <span>Cava VIP</span>
                  <span>
                    <button className="button-secondary">
                      Pide para recoger
                    </button>
                  </span> */}
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
              <div className="container-info-1">
                <div className="about-us">
                  <div className="about-us-1">
                    <div className="description">
                      <h2>Sobre nosotros</h2>
                      <span>
                        Hamburgo sports trae una idea original combinando el
                        mejor sabor y entretenimiento para los amantes del
                        deporte. El restaurante ofrece diferentes tipos de
                        comida y postres deliciosos ideales para disfrutar
                        mientras miras tu evento deportivo favorito
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
                <ComponentMenu />
              </div>
              <div className="container-info-2">
                <ComponentGallery />
                <div
                  id="ubicacion-hamburgo-sports"
                  className="container-location"
                >
                  <div className="location">
                    <div>
                      <h1>Ubicación</h1>
                      <span>
                        Hamburgo 301, Juárez, Cuauhtémoc, 06600 Juárez, CDMX
                      </span>
                    </div>
                  </div>
                  <div className="map-location">
                    <iframe
                      id="gmap_canvas"
                      src="https://maps.google.com/maps?q=Hamburgo%20sports&t=&z=17&ie=UTF8&iwloc=&output=embed"
                      frameBorder={0}
                      scrolling="no"
                      marginHeight={0}
                      marginWidth={0}
                    />
                  </div>
                </div>
                <footer>
                  <img
                    className="image-footer-left"
                    src="./soccer_ball.png"
                    alt="background_ball"
                  />
                  <img
                    className="image-footer-right"
                    src="./soccer_ball.png"
                    alt="background_ball"
                  />
                  <div className="container-footer">
                    <div>
                      <h3>Horarios</h3>
                      <p>
                        Lunes - Miércoles
                        <br />
                        12pm - 9pm
                      </p>
                      <p>
                        Jueves - Viernes
                        <br />
                        12pm - 10pm
                      </p>
                      <p>
                        Sábado
                        <br />
                        12pm - 9pm
                      </p>
                    </div>
                    <div>
                      <h3>Info</h3>
                      <p>Términos y Condiciones</p>
                      <p>Aviso de privacidad</p>
                      <p>Contactanos</p>
                      <p>Misión y Visión</p>
                      <p>Tel: 55 5086 8161</p>
                    </div>
                    <div>
                      <h3>Dirección</h3>
                      <p>
                        Hamburgo 301, Juárez, Cuauhtémoc, 06600 Juárez, CDMX
                      </p>
                    </div>
                    <div>
                      <h3>Más</h3>
                      <p>Únete a nuestro equipo</p>
                      <p>Eventos y fiestas privadas</p>
                      <p>Galería de eventos</p>
                      <p>Promociones</p>
                    </div>
                  </div>
                  <div className="copyright">
                    © 2022 Hamburgo Sports. Todos los derechos reservados.
                  </div>
                </footer>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
