import React from "react";
import "../Css/HomeC1.css";
import Slide from "react-reveal/Slide";
import Footer from "./Footer";
// import Grid from "./Grid";
export default function HomeC1() {
  return (
    <div>
      <div className="hb-container1">
        <div className="hb-item hb-item1">
          <h2>Finest Art</h2>
          <h4>We have a coplateection of finest painting.</h4>
          <i class="fa-solid fa-pot-food"></i>
        </div>
        <div className="hb-item hb-item2">
          <h2>Famous Artists</h2>
          <h4>Our Portfolio consist of world famous Artist's art</h4>
        </div>
        <div className="hb-item hb-item3">
          <h2>Weekly Auction</h2>
          <h4>We oraganise weekly auctions with 500+ participants.</h4>
        </div>
      </div>
      <div className="hb-container2">
        {/* <div className="cont2_left">
            
        </div> */}
        <div className="cont2_right">
          <div className="blur-pic"></div>
          <div className="cont2_content">
            <h1>Our Story</h1>
            <h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              praesentium iusto dolorum quibusdam molestiae.
            </h4>
            <a href="/">Know More..</a>
          </div>
        </div>
        <div className="cont4">
          <div className="row1 crow">
            <div className="rowL word lom">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sint fugit molestias quidem corporis autem obcaecati placeat quas assumenda provident?
            </div>
            <Slide right>
              <div className="rowR plate "></div>
            </Slide>
          </div>
          <div className="row2 crow ">
            <Slide left>
              <div className="rowL Lpic"></div>
            </Slide>
            <div className="rowR word">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit et
              voluptas soluta minus quaerat ad fuga dolorem libero cupiditate
              dicta?
            </div>
          </div>
          <div className="row1 crow">
            <div className="rowL word lom">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sint fugit molestias quidem corporis autem obcaecati placeat quas assumenda provident?
            </div>
            <Slide right>
              <div className="rowR plate"></div>
            </Slide>
          </div>
          <div className="row2 crow">
            <Slide left>
              <div className="rowL Lpic"></div>
            </Slide>
            <div className="rowR word">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit et
              voluptas soluta minus quaerat ad fuga dolorem libero cupiditate
              dicta?
            </div>
          </div>
          
        </div>
      </div>
      {/* <Footer/> */}
      {/* <Grid/> */}
    </div>
  );
}
