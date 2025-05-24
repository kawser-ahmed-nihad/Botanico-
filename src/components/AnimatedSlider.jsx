import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const slides = [
    {
        img: "https://i.postimg.cc/jqPdJQ2x/stages-of-growth-stockcake.jpg",
        title: "Grow with Nature",
        description: "Discover the magic of plants and their healing power.",
    },
    {
        img: "https://i.postimg.cc/DyRFzSdV/Screenshot-2025-05-21-215937.png",
        title: "Plant a Better Future",
        description: "Let’s go green and give back to Earth.",
    },
    {
        img: "https://i.postimg.cc/XJx4Nxxx/Screenshot-2025-05-21-220613.png",
        title: "Nature in Your Home",
        description: "Bring calm and freshness with indoor plants.",
    },
];

const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
};

const AnimatedSlider = () => {
    return (
        <div className=" max-w-7xl mx-auto ">

            <div className="flex flex-col mt-3 items-center mb-8">
                <h2 className="text-3xl font-bold text-green-700 mt-2">
                    Welcome to Botanico
                </h2>
                <p className="text-gray-600 text-center max-w-xl mt-2">
                    Experience the beauty of nature through our curated plant collection.
                </p>
            </div>


            <Slider {...sliderSettings}>
                {slides.map((slide, index) => (
                    <div key={index} className="relative w-full h-[400px]">
                        <img
                            src={slide.img}
                            alt={`slide-${index}`}
                            className="w-full h-full object-cover rounded-xl"
                        />
                        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center p-6 rounded-xl">
                            <h3 className="text-2xl md:text-3xl font-bold">{slide.title}</h3>
                            <p className="text-sm md:text-base max-w-md mt-2">{slide.description}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default AnimatedSlider;
