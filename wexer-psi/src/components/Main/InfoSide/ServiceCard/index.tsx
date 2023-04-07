import React from "react";

const ServiceCard = () => {
  return (
    <div className="sideCard">
      <div className="buttonSide">
          <button><img src="/react.svg" width={'24px'} /></button>
        </div>
      <div>
        <h4>Serviço</h4>
      </div>
      <div>
        <div>
          <span>Data inicial</span>
          <p>14/06/2021</p>
        </div>
        <div>
          <span>Tipo</span>
          <p>Porte de arma</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;