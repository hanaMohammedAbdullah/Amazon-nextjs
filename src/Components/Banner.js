import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full  bg-gradient-to-t from-gray-50 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
      >
        <div>
          <img
            className="object-cover"
            loading="lazy"
            src="https://m.media-amazon.com/images/I/61q5Pg3hO8L._SX3000_.jpg"
            alt="amazonaws"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"
            alt="maxresdefault"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://m.media-amazon.com/images/I/61shpu9mvML._SX3000_.jpg"
            alt="sneakerbardetroit"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
