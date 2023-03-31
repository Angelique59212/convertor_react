import "./ConvertorCapacity.css";
import PropTypes from "prop-types";
import { useState } from "react";

/**
 * Convertor unit l, dl, cl, ml
 * @returns {JSX.Element}
 * @constructor
 */
export const ConvertorCapacity = () => {
  /**
   * initialize value and update value
   *
   */
  const [value, setValue] = useState("");
  const [from, setFrom] = useState("l");
  const [to, setTo] = useState("ml");
  const [result, setResult] = useState(null);

  const reset = () => {
    setValue("");
    setResult("");
  };

  const units = ["litre", "décilitre", "centilitre", "millilitre"];
  const unit = {
    l: {
      cl: 100,
      dl: 10,
      ml: 1000,
    },
    dl: {
      cl: 10,
      l: 0.1,
      ml: 100,
    },
    cl: {
      l: 0.01,
      dl: 0.1,
      ml: 10,
    },
    ml: {
      cl: 0.1,
      l: 0.001,
      dl: 0.01,
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
      <h1 id="title">Convertisseur de Capacité</h1>
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
        <button className="button-submit" onClick={reset}>
          Réinitialiser
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

ConvertorCapacity.propTypes = {
  value: PropTypes.number.isRequired,
  from: PropTypes.string,
  to: PropTypes.string,
};
