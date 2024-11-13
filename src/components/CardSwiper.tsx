import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from './Card';
import { IData } from '../interface/DataInteface';

import '../../node_modules/swiper/swiper.css'
import '../../node_modules/swiper/modules/navigation.css';
import '../../node_modules/swiper/modules/pagination.css';
import '../../node_modules/swiper/modules/scrollbar.css';


interface ICardSwiper {
  data?: IData[]
}
const CardSwiper = ({ data }:ICardSwiper) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {
        data?.map((item) => (
          <SwiperSlide key={item.id}>
            <Card
              name={item.name}
              image={item.image}
              status={item.status}
              species={item.species}
            />
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
};

export default CardSwiper