import "./Convertor.css";
import { useState } from "react";
import PropTypes from "prop-types";

/**
 * Convertor unit m, dm, cm, mm
 * @returns {JSX.Element}
 * @constructor
 */
export const Convertor = () => {
  /**
   * initialize value and update value
   *
   */
  const [value, setValue] = useState("");
  const [from, setFrom] = useState("m");
  const [to, setTo] = useState("mm");
  const [result, setResult] = useState(null);

  const units = ["mètre", "décimètre", "centimètre", "millimetre"];
  const unit = {
    m: {
      cm: 100,
      dm: 10,
      mm: 1000,
    },
    dm: {
      cm: 10,
      m: 0.1,
      mm: 100,
    },
    cm: {
      m: 0.01,
      dm: 0.1,
      mm: 10,
    },
    mm: {
      cm: 0.1,
      m: 0.001,
      dm: 0.01,
    },
  };

  /**
   * function operation of conversion result on click
   */
  function handleClick() {
    const factor = unit[from][to];
    const result = value * factor;
    setResult(result);
  }

  return (
    <div className="container">
      <h1 id="title">Convertisseur d'Unité</h1>
      <div className="number">
        <input
          type="number"
          value={value}
          className="style-input-number"
          placeholder="Entrez votre valeur"
          onChange={(e) => setValue(e.target.value)}
        />
      </div>

      <div className="from">
        <select
          className="from-select"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        >
          {units.map(
            (
              unit /* loop on array and return a new array with value enter  */
            ) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            )
          )}
        </select>
        <select
          className="from-select"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        >
          {units.map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>
      </div>

      <div className="submit">
        <button className="button-submit" onClick={handleClick}>
          Convertir
        </button>
        {result !== null && (
          <div>
            <p className="result">
              <p>Résultat:</p> {value} {from} = {result} {to}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

Convertor.propTypes = {
  value: PropTypes.number.isRequired,
  from: PropTypes.string,
  to: PropTypes.string,
};
