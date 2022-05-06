import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./imageCarousel.css";

export default function ImageCarousel({ images }) {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  console.log(images);
  return (
    <div className="p-1">
      <Slider {...settings}>
        {images.map((item) => (
          <div className="image-div" key={item.id}>
            <img
              className="image-bg"
              src={item.src}
              alt={item.alt}
              style={{ width: 500, marginLeft: "auto", marginRight: "auto" }}
            />
            <img
              className="image-fg"
              src={item.src}
              alt={item.alt}
              style={{ width: 500, marginLeft: "auto", marginRight: "auto" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
