"use client";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Props {
  children: React.ReactNode[];
  className: string;
  spaceBetween?: number;
  slidesPerView?: number;
}

const Carousel: React.FunctionComponent<Props> = ({
  children,
  className,
  spaceBetween = 50,
  slidesPerView = 1,
}) => {
  return (
    <div className={className}>
      <Swiper
        modules={[Pagination]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoHeight
        grabCursor={true}
      >
        {children.map((child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
