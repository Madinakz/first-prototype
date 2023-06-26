import './Calculation.css'

import { useState } from "react";

export default function  Calculation (){

const [calculation, setCalculation] = useState("light");

const handleLightClick = () => {
  setCalculation("light");
};

const handleDetailedClick = () => {
  setCalculation("detailed");
};

  return (
    <div>
      {/* <h1>Switch Between Tables</h1> */}
      <button onClick={handleLightClick}>Упрощенный расчет</button>
      <button onClick={handleDetailedClick}>Детализированнный расчет</button>
      {calculation === "light" ? (
        <div>
          <p>Среднемесячный доход за последние 12 месяцев:</p>
          <input></input>
          <p>Среднемесячный доход за последние 24 месяца:</p>
          <input></input>
        </div>

      ) : (
        <div>
          <div>
            <p>Ежемесячный доход за последние 24 месяца:</p>
          </div>
          <div className="period">
            <div>
              <p>Июнь 2021</p>
              <p>Доход:</p>
              <input></input>
            </div>
            <div>
              <p>Июль 2021</p>
              <p>Доход:</p>
              <input></input>
            </div>
            <div>
              <p>Август 2021</p>
              <p>Доход:</p>
              <input></input>
            </div>              
          </div>
        </div>
       
      )}
    </div>
  );
};


