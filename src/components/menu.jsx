import React from "react";

const Menu = () => {
  return (
    <div>
      <div className="menu">
        <div className="menu__container">
          <div className="menu__title">Nail Services - Acrylic</div>

          <ul className="menu__pricelist">
            <li>Small - Medium Size - R190 - R200</li>
            <li>Long - R250</li>
            <li> XL - R300</li>
            <li>XXL - R350</li>
            <li>Acrylic Overlay - R185</li>
          </ul>
        </div>
      </div>
      <div className="menu">
        <div className="menu__container">
          <div className="menu__title">Pedicures</div>
          <ul className="menu__pricelist">
            <li>Pedicure - R110</li>
            <li> Gel Pedicure - R110</li>
          </ul>
        </div>
      </div>

      <div className="menu">
        <div className="menu__container">
          <div className="menu__title">Add-ons</div>
          <ul className="menu__pricelist">
            <li> Gel Overlay - R180</li>
            <li>Buff & Shine - R110</li>
            <li>Foot Treatment - R100</li>
            <li>Soak off - R80</li>
          </ul>
        </div>
      </div>

      <div className="menu">
        <div className="menu__container">
          <div className="menu__title">Designs</div>
          <ul className="menu__pricelist">
            <li>Drawing - R5 per nail</li>
            <li>Glitter - R10 per nail</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
