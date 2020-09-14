import React from "react";

//swiper
import Swiper from "react-id-swiper";

//css
import "swiper/css/swiper.min.css";

function MySwiper({ children }) {
  return (
    <Swiper
      pagination={{
        el: ".swiper-pagination",
        clickable: true,
      }}
      shouldSwiperUpdate
    >
      {children}
    </Swiper>
  );
}

export default MySwiper;