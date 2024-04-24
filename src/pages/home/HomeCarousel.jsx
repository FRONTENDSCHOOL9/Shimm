import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import {
  CaraouselTitle,
  CarouselAuthor,
  CarouselText,
  CarouselImage,
} from '@pages/home/Home.style';
import carouselImage01 from '@assets/images/carousel-image01.png';
import carouselImage02 from '@assets/images/carousel-image02.png';
import carouselImage03 from '@assets/images/carousel-image03.png';
import carouselImage04 from '@assets/images/carousel-image04.png';

function HomeCarousel() {
  SwiperCore.use([Autoplay]);
  return (
    <>
      <div>
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          speed={5000}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          <SwiperSlide>
            <img src={carouselImage01} alt="메인 스와이퍼 첫번째 이미지" />
            <CarouselText>
              <CaraouselTitle>
                “마음을 고요히 하라. <br />
                그러면 모든 것이 고요해질 것이다.”
              </CaraouselTitle>
              <CarouselAuthor>바하우딘 나크시반디</CarouselAuthor>
            </CarouselText>
          </SwiperSlide>
          <SwiperSlide>
            <CarouselImage
              src={carouselImage02}
              alt="메인 스와이퍼 두번째 이미지"
            />
            <CarouselText>
              <CaraouselTitle>
                “마음을 조용하게 하라,
                <br />
                그러면 영혼이 말할 것이다.”
              </CaraouselTitle>
              <CarouselAuthor>마자야 사티 바가티</CarouselAuthor>
            </CarouselText>
          </SwiperSlide>
          <SwiperSlide>
            <CarouselImage
              src={carouselImage03}
              alt="메인 스와이퍼 세번째 이미지"
            />
            <CarouselText>
              <CaraouselTitle>“명상은 마음의 고요한 바다이다.”</CaraouselTitle>
              <CarouselAuthor>윌리엄 펜</CarouselAuthor>
            </CarouselText>
          </SwiperSlide>
          <SwiperSlide>
            <CarouselImage
              src={carouselImage04}
              alt="메인 스와이퍼 네번째 이미지"
            />
            <CarouselText>
              <CaraouselTitle>
                “잠시 멈춰 서서 호흡하라.
                <br />
                그리고 계속 나아가라.”
              </CaraouselTitle>
              <CarouselAuthor>랄프 왈도 에머슨</CarouselAuthor>
            </CarouselText>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default HomeCarousel;
