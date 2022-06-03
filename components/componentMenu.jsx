import React, { useState, useEffect } from "react";

const arrayMenu = [
  {
    id: "wi-1",
    titleAsideMenu: "PARA BOTANEAR",
    titleLocal: "WINGS PREMIUM",
    imageLocal: "logo_wings.png",
    principalDish: [
      {
        id: "wi-1-a",
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
      },
      {
        id: "wi-1-b",
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
      },
      {
        id: "wi-1-c",
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
      },
    ],
  },
  {
    id: "ma-2",
    titleAsideMenu: "ANTOJITOS",
    titleLocal: "EL MAIZTRO",
    imageLocal: "logo_el_maiztro.png",
    principalDish: [
      {
        id: "ma-2-a",
        titleDish: "SOPAS",
        dishes: [
          {
            id: "A-1",
            subTitleDish: "Sopa de tortilla",
            descriptionDish:
              "(Con aguacate, crema, queso, chicharrón y chile pasilla)",
            price: "$39.00",
          },
          {
            id: "A-2",
            subTitleDish: "Crema de cone",
            descriptionDish: "(De frijol con juliana de tortilla y queso)",
            price: "$39.00",
          },
          {
            id: "A-3",
            subTitleDish: "Consomé ranchero",
            descriptionDish:
              "(Con verduras, cilantro, cebolla y chile picado) ",
            price: "$39.00",
          },
        ],
      },
      {
        id: "ma-2-b",
        titleDish: "FLAUTAS",
        dishes: [
          {
            id: "B-1",
            subTitleDish: "Ahogadas (Orden de 3)",
            descriptionDish:
              "Servidas con deliciosa salsa verde, crema y queso cotija).\n A elegir: De pollo - De papa - De carne - De frijol - De queso ",
            price: "$69.00",
          },
          {
            id: "B-1-1",
            subTitleDish: "Con queso oaxaca",
            descriptionDish: "",
            price: "$79.00",
          },
          {
            id: "B-2",
            subTitleDish: "Tradicionales (Orden de 3)",
            descriptionDish:
              "(Servidas con lechuga, crema, jitomate y queso). A elegir: De pollo - De papa - De carne - De queso",
            price: "$69.00",
          },
          {
            id: "B-3",
            subTitleDish: "Por pieza",
            descriptionDish: "",
            price: "$25.00",
          },
        ],
      },
      {
        id: "ma-3-c",
        titleDish: "ANTOJITOS",
        dishes: [
          {
            id: "SA-1",
            subTitleDish: "Sopes (Orden de 3)",
            descriptionDish:
              "(Servidos con frijol, salsa, crema, cebolla y queso).",
            price: "$36.00",
          },
          {
            id: "SA-2",
            subTitleDish: "A elegir: ",
            descriptionDish: "De papa con chorizo - De pollo - De bistec",
            price: "$48.00",
          },
          {
            id: "SA-3",
            subTitleDish: "Gordita",
            descriptionDish: "(Chicharrón, frijol o requeson) ",
            price: "$26.00",
          },
          {
            id: "SA-4",
            subTitleDish: "Con queso oaxaca",
            descriptionDish: "",
            price: "$36.00",
          },
          {
            id: "SA-5",
            subTitleDish: "Tostada (Orden de 2)",
            descriptionDish:
              "(De pata o tinga de pollo con frijoles refritos, crema y queso) ",
            price: "$48.00",
          },
        ],
      },
      {
        id: "ma-4-d",
        titleDish: "ESPECIALIDADES",
        dishes: [
          {
            id: "SA-1",
            subTitleDish: "Huarache especial hamburgo",
            descriptionDish: "(Milanesa con queso oaxaca)",
            price: "$110.00",
          },
          {
            id: "SA-2",
            subTitleDish: "Huarache",
            descriptionDish:
              "(Con frijol, salsa, crema y queso). A elegir: Con costilla asada * Con chicharrón prensado * Con pechuga de pollo * Con milanesa * Con bistec",
            price: "$95.00",
          },
          {
            id: "SA-3",
            subTitleDish: "Con queso oaxaca ",
            descriptionDish: "",
            price: "$105.00",
          },
          {
            id: "SA-4",
            subTitleDish: "Enchiladas verdes (4 piezas)",
            descriptionDish:
              "(Exquisitas enchiladas verdes rellenas de pollo, crema y queso acompañadas de frijoles refritos)",
            price: "$85.00",
          },
          {
            id: "SA-5",
            subTitleDish: "Enmoladas (4 piezas)",
            descriptionDish:
              "(Exquisitas enmoladas de mole rellenas de pollo, crema y queso)",
            price: "$85.00",
          },
        ],
      },
      {
        id: "ma-4-e",
        titleDish: "ESPECIALIDADES",
        dishes: [
          {
            id: "SA-6",
            subTitleDish: "Chilaquiles verdes o rojos",
            descriptionDish:
              "(Acompañados de frijoles refritos). A elegir: Con pollo * Con huevo (2 pzas.) * Con costilla * Con bistec",
            price: "$80.00",
          },
          {
            id: "SA-7",
            subTitleDish: "Machete especial",
            descriptionDish: "(Milanesa con queso oaxaca)  ",
            price: "$105.00",
          },
          {
            id: "SA-8",
            subTitleDish: "Machete",
            descriptionDish:
              "(Quesadilla gigante con 1 rico guisado). A elegir: De chicharrón * De tinga de pollo * De hongos * De milanesa * De papa con chorizo  ",
            price: "$85.00",
          },
          {
            id: "SA-9",
            subTitleDish: "Con queso oaxaca",
            descriptionDish: "",
            price: "$95.00",
          },
          {
            id: "SA-10",
            subTitleDish: "Pambacitos (2 pzas.)",
            descriptionDish:
              "Exquisito pambazo de papa con chorizo con nuestra tradicional salsa, lechuga, queso y crema.",
            price: "$48.00",
          },
        ],
      },
    ],
  },
  {
    id: "co-3",
    titleAsideMenu: "COCHINITA",
    titleLocal: "COCHINITA",
    imageLocal: "logo_cochinita.png",
    principalDish: [
      {
        id: "co-3-a",
        titleDish: "SOPAS",
        dishes: [
          {
            id: "A-1",
            subTitleDish: "Sopa de lima",
            descriptionDish:
              "(Con tiras de tortilla frita, rodaja de lima, pollo y pimiento morrón)",
            price: "$45.00",
          },
        ],
      },
      {
        id: "co-3-c",
        titleDish: "COCHINITA AL PLATO",
        dishes: [
          {
            id: "SA-1",
            subTitleDish: "",
            descriptionDish:
              "(Tortillas, cebolla morada, salsa habanera, salsa xnipec y limones)",
            price: "",
          },
          {
            id: "SA-2",
            subTitleDish: "1/4 de kilo de cochinita pibil ",
            descriptionDish: "",
            price: "$98.00",
          },
          {
            id: "SA-3",
            subTitleDish: "1/2 kilo de cochinita pibil ",
            descriptionDish: "",
            price: "$189.00",
          },
          {
            id: "SA-4",
            subTitleDish: "1 kilo de cochinita pibil ",
            descriptionDish: "",
            price: "$370.00",
          },
        ],
      },
      {
        id: "co-3-b",
        titleDish: "ESPECIALIDADES",
        dishes: [
          {
            id: "B-1",
            subTitleDish: "Tacos de cochinita (Orden de 3)",
            descriptionDish:
              "(Nuestra única y exquisita cochinita en tortilla de maíz, bien servido)",
            price: "$60.00",
          },
          {
            id: "B-2",
            subTitleDish: "Tacos de cochinita (Por pieza) ",
            descriptionDish: "",
            price: "$22.00",
          },
          {
            id: "B-3",
            subTitleDish: "Panucho de cochinita (Orden de 2) ",
            descriptionDish:
              "(Tortilla de maíz frita con nuestra especial cochinita sobre una cama de frijol negro y rebanadas de aguacate) ",
            price: "$45.00",
          },
          {
            id: "B-4",
            subTitleDish: "Panucho de cochinita (Por pieza)",
            descriptionDish: "",
            price: "$22.00",
          },
          {
            id: "B-5",
            subTitleDish: "Costra de cochinita",
            descriptionDish:
              "(Costra de queso manchego relleno de cochinita en tortilla de harina, con aguacate y cebolla morada)",
            price: "$39.00",
          },
          {
            id: "B-6",
            subTitleDish: "Torta de cochinita",
            descriptionDish:
              "(Nuestro pan especial con frijoles y aguacate, con 200 gr de deliciosa cochinita, jitomate, cebolla, habanero y aguacate)",
            price: "$75.00",
          },
          {
            id: "B-7",
            subTitleDish: "Burrito de cochinita",
            descriptionDish:
              "(Nuestra única y exquisita cochinita en tortilla de maíz bien servido)",
            price: "$69.00",
          },
        ],
      },
    ],
  },
  {
    id: "te-5",
    titleAsideMenu: "RIBS & BURGERS",
    titleLocal: "TEXAS BULL",
    imageLocal: "logo_texas_ribs.png",
    principalDish: [],
  },
  {
    id: "he-6",
    titleAsideMenu: "HELADOS Y CAFE",
    titleLocal: "HELADOS Y CAFE",
    imageLocal: "logo_helados.png",
    principalDish: [],
  },
  {
    id: "ba-7",
    titleAsideMenu: "BEBIDAS",
    titleLocal: "BAR",
    imageLocal: "logo_bar.png",
    principalDish: [],
  },
];

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
  const [step, setStep] = useState(0);
  const maxStep = 5;
  const [selectMenu, setSelectMenu] = useState({
    id: "wi-1",
    aside: "PARA BOTANEAR",
    content: [
      {
        id: "wi-1-a",
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
      },
      {
        id: "wi-1-b",
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
      },
      {
        id: "wi-1-c",
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
      },
    ],
  });

  useEffect(() => {
    const objectStep = arrayMenu[step];
    setSelectMenu({
      id: objectStep.id,
      aside: objectStep.titleAsideMenu,
      content: objectStep.principalDish,
    });
  }, [step]);

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
            <h1 className="title-aside-menu">{selectMenu.aside}</h1>
          </div>
        </div>
        <div className="table-local-menu">
          <div
            className="next-step"
            onClick={() => {
              if (step === maxStep) {
                setStep(0);
              } else {
                setStep(step + 1);
              }
            }}
          >
            {"Sieguiente >>"}
          </div>
          <div
            className="back-step"
            onClick={() => {
              if (step === 0) {
                setStep(maxStep);
              } else {
                setStep(step - 1);
              }
            }}
          >
            {"<< Anterior"}
          </div>
          <div className="local-menu">
            {arrayMenu.map((row, ix) => {
              return (
                <span
                  key={row.id}
                  className={row.id === selectMenu.id ? "select" : ""}
                  onClick={() => {
                    setStep(ix);
                  }}
                >
                  <img src={row.imageLocal} alt={row.titleLocal} />
                </span>
              );
            })}
          </div>
          <div className="pricing-menu">
            {selectMenu.content.map((row) => {
              return <CardPricing key={row.id} data={row} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentMenu;
