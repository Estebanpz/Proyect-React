/*import { useState } from "react";
import Contacto from "../img/contacto.svg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";*/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
export default function Contact() {
//const [celular, setCelular] = useState(0);

  return (
    <div className="content">
      <h2 className="logo">
        Contacto Paez <span>Extintores</span>
      </h2>
      <div className="content-wrapper">
        <div className="contact-form">
          <form action="#" onSubmit={(e) => e.preventDefault()}>
            <p>
              <label htmlFor="full_name">Nombre</label>
              <input type="text" name="full_name" id="full_name" />
            </p>
            <p>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </p>
            <p>
              <label htmlFor="phone">Celular / Telefono</label>
              <input type="tel" name="phone" id="phone" />
            </p>
            <p>
              <label htmlFor="affair">Asunto</label>
              <input type="text" name="affair" id="affair" />
            </p>
            <p className="block">
              <label htmlFor="message">Mensaje</label>
              <textarea name="message" id="message" rows="3"></textarea>
            </p>

            <p className="block">
              <button type="submit">Enviar</button>
            </p>
          </form>
        </div>
        <div className="contact-info">
          <h4>Para mas información</h4>
          <ul>
            <li>
              <FontAwesomeIcon icon={faLocationDot} />
              Girardot, cundinamarca.
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} />
              321-386-2654
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} />
              paezextintores@gmail.com
            </li>
          </ul>
          <p>Paez Extintores</p>
        </div>
      </div>
    </div>
  );
}