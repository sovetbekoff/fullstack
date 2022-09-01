import React from "react";
// import MediaList from "../components/media/MediaList";
import Navbar from "../components/Navbar";
// import AdsCards from "../components/product/AdsCards";

// import {
//   MDBCarousel,
//   MDBCarouselInner,
//   MDBCarouselItem,
//   MDBCarouselElement,
//   MDBCarouselCaption,
// } from "mdb-react-ui-kit";

const HomePage = () => {
  return (
    <div>
      {/* <MDBCarousel showIndicators showControls fade>
        <MDBCarouselInner className=" square bg-primary rounded-6 mt-3">
          <MDBCarouselItem className="active ">
            <MDBCarouselElement
              // className="square bg-primary rounded-pill"
              // style="width: 150px"
              src="https://images.wbstatic.net/bners1/big_school_6_0838485.jpg"
              alt="..."
            />
            <MDBCarouselCaption></MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem>
            <MDBCarouselElement
              src="https://images.wbstatic.net/bners1/big_mango_11_08_22.jpg"
              alt="..."
            />
            <MDBCarouselCaption></MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem>
            <MDBCarouselElement
              src="https://images.wbstatic.net/bners1/new_big_day_price_11_08_22.jpg"
              alt="..."
            />
            <MDBCarouselCaption></MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>

   
      {/* <AdsCards />
      <MediaList /> */}
      <Navbar />
    </div>
  );
};

export default HomePage;
