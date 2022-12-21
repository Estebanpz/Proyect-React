import { useState } from "react";
import Contacto from "../img/contacto.svg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
export default function Contact() {
  const [cotizar, setCotizar] = useState(false);
  const [celular, setCelular] = useState(0);
  function Cotizar() {
    setCotizar(!cotizar);
  }
  return (
    <form
      action="#"
      method="Post"
      className="row shadow-lg p-3 mb-5 bg-body rounded"
    >
      <h4 className="display-5 text-center mb-4">Paez Extintores</h4>
      <div className="col-md-6">
        <div className="col-md-12 col-sm-12 col-xl-12 col-lg-12">
          <label htmlFor="nombre" className="form-label">
            Nombre
          </label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-md-12 col-sm-12 col-xl-12 col-lg-12">
          <label htmlFor="apellido" className="form-label">
            Apellido
          </label>
          <input type="text" className="form-control" />
        </div>

        <div className="col-md-6 col-sm-6 col-xl-6 col-lg-6">
          <label htmlFor="celular" className="form-label">
            Celular / Teléfono
          </label>
          <input type="tel" className="form-control" />
        </div>

        <div className="col-sm-6 col-md-6">
          <PhoneInput
            country={"col"}
            value={celular}
            placeholder="310 xxx xx xx"
            autoFormat={true}
            enableSearch={true}
            onChange={(phone) => setCelular(phone) }
          />
          {celular}
        </div>

        <div className="col-md-12 col-sm-12 col-xl-12 col-lg-12">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              name="cotizar"
              id="cotizar"
              onChange={() => Cotizar()}
            />
            <label htmlFor="cotizar">¿Deseas cotizar?</label>
          </div>
        </div>

        {cotizar && (
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div className="col-md-5 col-sm-5 col-xl-5 col-lg-5 mb-2">
              <label htmlFor="extintor" className="form-label">
                Tipo de extintor
              </label>
              <select name="extintor" className="form-select" id="extintor">
                <option value="ABC">ABC</option>
                <option value="Multiproposito">Multiproposito</option>
                <option value="Solkaflam">Solkaflam</option>
                <option value="K">Tipo K</option>
              </select>
            </div>
            <div className="col-md-5 col-sm-5 col-xl-5 col-lg-5 mb-2">
              <label htmlFor="libras" className="form-label">
                Peso del extintor según corresponda
              </label>
              <select name="peso" className="form-select" id="peso">
                <option value="5">5 Lbs</option>
                <option value="10">10 Lb</option>
                <option value="20">20 Lbs</option>
                <option value="30">30 Lbs</option>
                <option value="3700">3700 Gramos (solkaflam)</option>
              </select>
            </div>
          </div>
        )}

        <div className="col-md-12 col-sm-12 col-xl-12 col-lg-12">
          <button type="submit" className="btn btn-primary d-block w-100">
            Enviar
          </button>
        </div>
      </div>
      <div className="col-md-6">
        <div className="col-md-12">
          <img src={Contacto} alt="Contactanos" />
        </div>
      </div>
    </form>
  );
}
