import React from "react";

const CardPricing = ({ data }) => {
  return (
    <div className="container-pricing">
      <div className="pricing">
        <span className="food-dishes">
          <h1>{data.titleDish}</h1>
        </span>
        <div className="dishes">
          {data.dishes.map((row) => {
            return (
              <div key={row.id} className="dishes-card">
                <div className="dishes-info">
                  <h3>{row.subTitleDish}</h3>
                  <span>{row.descriptionDish}</span>
                </div>
                <div className="dishes-price">{row.price}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const ComponentMenu = () => {
  return (
    <div id="menu-hamburgo-sports" className="menu-container">
      <h1 className="title-section">Menu</h1>
      <div className="content-menu">
        <div className="aside-left-menu">
          <img
            className="image-aside-menu"
            src="./soccer_ball.png"
            alt="background_ball"
          />
          <div className="font-aside-menu">
            <h1 className="title-aside-menu">PARA BOTANEAR</h1>
          </div>
        </div>
        <div className="table-local-menu">
          <div className="local-menu">
            <span
              className="select"
            >
              <img src="logo_wings.png" alt="Wings" />
            </span>
            <span>
              <img src="logo_el_maiztro.png" alt="El maiztro" />
            </span>
            <span>
              <img src="logo_cochinita.png" alt="El Bosho Feliz" />
            </span>
            <span>
              <img src="logo_milanesas.png" alt="Milanesas House" />
            </span>
            <span>
              <img src="logo_texas_ribs.png" alt="Texas Bull" />
            </span>
            <span>
              <img src="logo_helados.png" alt="Helados" />
            </span>
            <span>
              <img src="logo_bar.png" alt="Bar" />
            </span>
          </div>
          <div className="pricing-menu">
            <CardPricing
              data={{
                titleDish: "ALITAS",
                dishes: [
                  {
                    id: "A-1",
                    subTitleDish: "ALITAS (8 pzas.)",
                    descriptionDish:
                      "(Las alitas más jugosas y doraditas hechas al momento y bañadas con nuestra suculenta salsa)",
                    price: "$110.00",
                  },
                  {
                    id: "A-2",
                    subTitleDish: "ALITAS (16 pzas.)",
                    descriptionDish:
                      "(Las alitas más jugosas y doraditas hechas al momento y bañadas con nuestra suculenta salsa)",
                    price: "$199.00",
                  },
                ],
              }}
            />
            <CardPricing
              data={{
                titleDish: "BONELESS",
                dishes: [
                  {
                    id: "B-1",
                    subTitleDish: "BONELESS (8 pzas.)",
                    descriptionDish:
                      "(Suaves trocitos de pechuga de pollo empanizados, dorados a la perfección y bañados en nuestra deliciosa salsa)",
                    price: "$110.00",
                  },
                  {
                    id: "B-2",
                    subTitleDish: "BONELESS (16 pzas.)",
                    descriptionDish:
                      "(Suaves trocitos de pechuga de pollo empanizados, dorados a la perfección y bañados en nuestra deliciosa salsa)",
                    price: "$199.00",
                  },
                ],
              }}
            />
            <CardPricing
              data={{
                titleDish: "SALSAS Y ACOMPAÑANTES",
                dishes: [
                  {
                    id: "SA-1",
                    subTitleDish: "NUESTRAS SALSAS",
                    descriptionDish:
                      "Búfalo * Picositas Maracuyá Mango * Mango Habanero * Spicy * Tamarindo Chipotle * BBQ * Las de la casa",
                    price: "",
                  },
                  {
                    id: "SA-2",
                    subTitleDish: "ACOMPAÑANTES",
                    descriptionDish:
                      "Papas a la francesa * Zanahoria y Apio * Aderezo blue cheese * Aderezo ranch",
                    price: "",
                  },
                ],
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentMenu;
