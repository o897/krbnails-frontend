import React from "react";

const Menu = () => {
  return (
    <>
      <div className="menu">
        <div className="menu__heading">Tlami's Nail Gallery</div>
        <div className="menu__subheading">PRICELIST</div>
        <div className="menu__container">
          <div className="menu__title">Nail Services - Acrylic</div>

          <div className="menu__pricelist">
            <div className="menu__pricelist-row">
              <div className="menu__pricelist-row--title">
                Small - Medium Size
              </div>
              <div className="menu__pricelist-row--cost">R190 - R200</div>
            </div>
            <div className="menu__pricelist-row menu__bg-pink">
              <div className="menu__pricelist-row--title">
                Long
              </div>
              <div className="menu__pricelist-row--cost">R250</div>
            </div>
            <div className="menu__pricelist-row">
              <div className="menu__pricelist-row--title">
                XL
              </div>
              <div className="menu__pricelist-row--cost">R300</div>
            </div>
            <div className="menu__pricelist-row menu__bg-pink">
              <div className="menu__pricelist-row--title">
                CCL
              </div>
              <div className="menu__pricelist-row--cost">R350</div>
            </div>
            <div className="menu__pricelist-row  ">
              <div className="menu__pricelist-row--title">
                Acrylic Overlay
              </div>
              <div className="menu__pricelist-row--cost">R185</div>
            </div>
          </div>
        </div>

        <div className="menu__container">
          <div className="menu__title">Pedicures</div>
          <div className="menu__pricelist">
            <div className="menu__pricelist-row  menu__bg-pink">
              <div className="menu__pricelist-row--title">
               Pedicure
              </div>
              <div className="menu__pricelist-row--cost">R110</div>
            </div>
            <div className="menu__pricelist-row ">
              <div className="menu__pricelist-row--title">
                Gel Pedicure
              </div>
              <div className="menu__pricelist-row--cost">R150</div>
            </div>{" "}
          </div>
        </div>

        <div className="menu__container">
          <div className="menu__title">Added services</div>
          <div className="menu__pricelist">
          <div className="menu__pricelist-row ">
              <div className="menu__pricelist-row--title">Gel Overlay</div>
              <div className="menu__pricelist-row--cost">R180</div>
            </div>
          <div className="menu__pricelist-row  menu__bg-pink">
              <div className="menu__pricelist-row--title">Buff & Shine</div>
              <div className="menu__pricelist-row--cost">R110</div>
            </div>
          <div className="menu__pricelist-row">
              <div className="menu__pricelist-row--title">Foot Treatment</div>
              <div className="menu__pricelist-row--cost">R180</div>
            </div>
            <div className="menu__pricelist-row  menu__bg-pink">
              <div className="menu__pricelist-row--title">Soak OFF</div>
              <div className="menu__pricelist-row--cost">R80</div>
            </div>
          </div>
        </div>

        <div className="menu__container">
          <div className="menu__title">Designs</div>
          <div className="menu__pricelist">
          <div className="menu__pricelist-row">
              <div className="menu__pricelist-row--title">Drawings</div>
              <div className="menu__pricelist-row--cost">R5 per nail</div>
          </div>

          <div className="menu__pricelist-row menu__bg-pink">
              <div className="menu__pricelist-row--title">Glitter</div>
              <div className="menu__pricelist-row--cost">R10 per nail</div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
