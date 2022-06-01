import React from "react";

const ComponentGallery = () => {
  return (
    <div className="gallery-hamburgo">
      <h1 className="title-section">Galeria</h1>
      <div className="container-gallery">
        <div className="gallery-col-1">
          <div className="image-effect">
            <img src="hamburgo_beer.jpg" alt="Bar" />
          </div>
          <div className="image-effect">
            <img src="hamburgo_in.jpg" alt="Entrada" />
          </div>
          <div className="image-effect">
            <img src="mojitos_frutos_rojos.jpg" alt="Mojitos" />
          </div>
        </div>
        <div className="gallery-col-2">
          <div className="image-effect">
            <img src="hamburgo_planta_baja.jpg" alt="Planta baja" />
          </div>
          <div className="image-effect">
            <img src="hamburgo_high_level.jpg" alt="Planta alta" />
          </div>
          <div className="image-effect">
            <img src="hamburgo_people.jpg" alt="Gente" />
          </div>
        </div>
        <div className="gallery-col-3">
          <div className="image-effect">
            <img src="hamburgo_medio_rack.jpg" alt="Medio Rack" />
          </div>
          <div className="image-effect">
            <img src="hamburgo_terraza.jpg" alt="Terraza" />
          </div>
          <div className="image-effect">
            <img src="hamburgo_ensalada.jpg" alt="Ensalada" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentGallery;
