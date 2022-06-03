import React, { useState, useEffect } from "react";
import isEmpty from "lodash/isEmpty";
import moment from "moment";
import "moment/locale/es";

const personSelect = [
  2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
let intervalCount = null;

const ComponentReservation = () => {
  const initialStates = {
    name: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    description: "",
    checkAllowNotify: false,
  };
  const [selectPeople, setSelectPeople] = useState("");
  const [dateSchedule, setDateSchedule] = useState("");
  const [timeSchedule, setTimeSchedule] = useState("");
  const [visibleStep1, setVisibleStep1] = useState(1);
  const [loadApi, setLoadApi] = useState(false);
  const [finishReservation, setFinishReservation] = useState(false);
  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);
  const [startCount, setStartCount] = useState(false);
  const [dataForm, setDataForm] = useState(initialStates);

  const generateNowDate = () => {
    const nowDate = moment().format("YYYY-MM-DD");
    return nowDate;
  };

  const handlerCleanProperties = () => {
    clearInterval(intervalCount);
    setVisibleStep1(1);
    setSelectPeople("");
    setDateSchedule("");
    setTimeSchedule("");
    setMinutes(5);
    setSeconds(0);
    setStartCount(false);
    setDataForm(initialStates);
  };

  const handlerInitCount = () => {
    let count = seconds;
    let countMinutes = minutes;
    intervalCount = setInterval(() => {
      count = count === 0 ? 59 : count - 1;
      setSeconds(count);

      if (count === 59 && countMinutes > 0) {
        countMinutes = countMinutes - 1;
        setMinutes(countMinutes);
      }

      if (count === 0 && countMinutes === 0) {
        handlerCleanProperties();
      }
    }, 1000);
  };

  const handlerGetNumberPerson = (idNumber) => {
    let person = "";
    if (idNumber === "1") {
      person = "1 persona";
    } else {
      if (idNumber === "21") {
        person = "Evento especial";
      } else {
        person = `${idNumber} personas`;
      }
    }

    return person;
  };

  useEffect(() => {
    const selectStep1 = document.getElementById("step-reservation-1");
    const selectStep2 = document.getElementById("step-reservation-2");
    if (visibleStep1 === 1) {
      selectStep1.className = "select-step step step-reservation-2";
      selectStep2.className = "step step-reservation-1";
    } else if (visibleStep1 === 2) {
      selectStep1.className = "step step-reservation-1";
      selectStep2.className = "select-step step step-reservation-2";
      if (startCount === false) {
        setStartCount(true);
        handlerInitCount();
      }
    }
  }, [visibleStep1]);

  return (
    <div id="reservacion-hamburgo-sports" className="reservation">
      <h1 className="title-section">Reservación</h1>
      <div className="component-reservation">
        <div className="steps-reservation">
          <div
            id="step-reservation-1"
            className="select-step step step-reservation-1"
            onClick={() => {
              setVisibleStep1(1);
            }}
          >
            <span>1.- Encontrar una mesa</span>
          </div>
          <div
            id="step-reservation-2"
            className="step step-reservation-2"
            onClick={() => {}}
          >
            <span>2.- Agregar detalles</span>
          </div>
        </div>
        {visibleStep1 === 1 && (
          <div className="time-reservation">
            <div className="inputs-container">
              <div className="input">
                <select
                  value={selectPeople}
                  name="select"
                  placeholder="Personas"
                  onChange={(value) => {
                    setSelectPeople(value.target.value);
                  }}
                >
                  <option disabled value="">
                    -- Personas --
                  </option>
                  <option value="1">1 persona</option>
                  {personSelect.map((row) => {
                    return (
                      <option key={`key-${row}`} value={row}>
                        {row} personas
                      </option>
                    );
                  })}
                  <option value="21">Evento especial</option>
                </select>
              </div>
              <div className="input">
                <input
                  type="date"
                  id="start"
                  name="trip-start"
                  value={dateSchedule}
                  min={generateNowDate()}
                  onChange={(e) => {
                    setDateSchedule(e.target.value);
                  }}
                ></input>
              </div>
              <div className="input">
                <input
                  value={timeSchedule}
                  type="time"
                  id="appt"
                  name="appt"
                  min="12:00"
                  max="22:00"
                  required
                  onChange={(e) => {
                    setTimeSchedule(e.target.value);
                  }}
                ></input>
              </div>
              <div className="input">
                <button
                  onClick={() => {
                    if (
                      isEmpty(selectPeople) === false &&
                      isEmpty(dateSchedule) === false &&
                      isEmpty(timeSchedule) === false
                    ) {
                      setVisibleStep1(2);
                    }
                  }}
                >
                  Encontrar una mesa
                </button>
              </div>
            </div>
          </div>
        )}
        {visibleStep1 === 2 && (
          <>
            {finishReservation === false ? (
              <div className="detail-reservation">
                <div className="time-loading">
                  <span>
                    Debido a la disponibilidad limitada podemos reservar esta
                    mesa para usted durante{" "}
                    <strong>
                      {`${minutes === 0 ? "00" : minutes}:${
                        seconds < 10 ? "0" + seconds : seconds
                      }`}{" "}
                      minutos
                    </strong>
                    .
                  </span>
                </div>
                <div className="info-reservation">
                  {loadApi === true && (
                    <div className="content-loading">
                      <div className="loading">
                        <p>Reservando</p>
                        <span></span>
                      </div>
                    </div>
                  )}
                  <div className="left-section">
                    <div className="info-components">
                      <input
                        type="text"
                        placeholder="Nombre"
                        value={dataForm.name}
                        onChange={(e) => {
                          const value = e.target.value;
                          setDataForm({
                            ...dataForm,
                            name: value,
                          });
                        }}
                      />
                      <input
                        type="text"
                        placeholder="Apellidos"
                        value={dataForm.lastName}
                        onChange={(e) => {
                          const value = e.target.value;
                          setDataForm({
                            ...dataForm,
                            lastName: value,
                          });
                        }}
                      />
                      <input
                        name="phone"
                        type="number"
                        placeholder="Teléfono"
                        value={dataForm.phoneNumber}
                        onChange={(e) => {
                          const value = e.target.value;
                          setDataForm({
                            ...dataForm,
                            phoneNumber: value,
                          });
                        }}
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Correo"
                        value={dataForm.email}
                        onChange={(e) => {
                          const value = e.target.value;
                          setDataForm({
                            ...dataForm,
                            email: value,
                          });
                        }}
                      />
                      <textarea
                        value={dataForm.description}
                        name="description"
                        placeholder="Agregar una solicitud especial (opcional)"
                        onChange={(e) => {
                          const value = e.target.value;
                          setDataForm({
                            ...dataForm,
                            description: value,
                          });
                        }}
                      />
                    </div>
                    <div className="check-box-section">
                      <label className="input-checkbox">
                        <input
                          type="checkbox"
                          checked={dataForm.checkAllowNotify}
                          onChange={() => {
                            setDataForm({
                              ...dataForm,
                              checkAllowNotify: !dataForm.checkAllowNotify,
                            });
                          }}
                        ></input>
                        Deseo recibir notificaciones de ofertas, actualizaciones
                        y nuevos platillos de Hamburgo Sports
                      </label>
                    </div>
                  </div>
                  <div className="detail-step-1">
                    <div className="detail-top">
                      <div className="top-information">
                        <strong>Hamburgo Sports</strong>
                        <br />
                        <p>
                          <i className="fa fa-calendar" aria-hidden="true"></i>{" "}
                          <span>
                            {moment(dateSchedule, "YYYY-MM-DD").format(
                              "dddd, LL"
                            )}
                          </span>
                        </p>
                        <p>
                          <i className="fa fa-clock-o" aria-hidden="true"></i>{" "}
                          <span>
                            {" "}
                            {moment(timeSchedule, "hh:mm").format("hh:mm a")}
                          </span>
                        </p>
                        <p>
                          <i className="fa fa-user-o" aria-hidden="true"></i>{" "}
                          <span>{handlerGetNumberPerson(selectPeople)}</span>
                        </p>
                      </div>
                      <div>
                        <strong>¿Que saber antes de ir?</strong>
                        <br />
                        <p>
                          Gracias por elegirnos, si tus planes cambian, por
                          favor háznoslo saber con anticipación.
                        </p>
                        <p>
                          Llámanos al 55 5086 8161 para consultas o eventos
                          especiales. En Hamburgo Sports valoramos tu
                          preferencia y haremos todo lo posible para satisfacer
                          todas las solicitudes.
                        </p>
                      </div>
                    </div>
                    <div className="detail-bottom">
                      <button
                        onClick={async () => {
                          setLoadApi(true);
                          const createReservation = await fetch(
                            `${window.location.href}api/reservation`,
                            {
                              method: "POST",
                              body: JSON.stringify({
                                ...dataForm,
                                checkAllowNotify:
                                  dataForm.checkAllowNotify === true
                                    ? "Si"
                                    : "No",
                                selectPeople:
                                  handlerGetNumberPerson(selectPeople),
                                dateSchedule: moment(
                                  dateSchedule,
                                  "YYYY-MM-DD"
                                ).format("dddd, LL"),
                                timeSchedule: moment(
                                  timeSchedule,
                                  "hh:mm"
                                ).format("hh:mm a"),
                              }),
                            }
                          );
                          const response = await createReservation.json();
                          setLoadApi(false);
                          setFinishReservation(true);

                          setTimeout(() => {
                            handlerCleanProperties();
                            setFinishReservation(false);
                          }, 8000);
                        }}
                      >
                        Confirmar reservación
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="thankyou-page">
                <h1>¡Gracias por tu preferencia!</h1>
                <p>
                  Tu reservación se realizó con éxito, ¡te esperamos pronto!.
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ComponentReservation;
