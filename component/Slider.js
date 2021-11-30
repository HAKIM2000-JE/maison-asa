// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import Product from "./Product";




   



    

    



export default function Slider() {
    return (
        <div>
        <Swiper
      spaceBetween={50}
      slidesPerView={3}
      centeredSlides
      onSlideChange={() => console.log("slide change")}
      onSwiper={swiper => console.log(swiper)}
    >
      <SwiperSlide> <Product /> </SwiperSlide>
      <SwiperSlide><Product /></SwiperSlide>
      <SwiperSlide><Product /></SwiperSlide>
      <SwiperSlide><Product /></SwiperSlide>
    </Swiper>
            
        </div>
    )
}
