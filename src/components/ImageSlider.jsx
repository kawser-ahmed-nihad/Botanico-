import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ImageSlider = ({ appData }) => {
    // console.log(appData);
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const promotedApps = appData?.filter(app => app.promotion);


    return (
        <div className="w-full max-w-11/12 mx-auto mt-4 rounded overflow-hidden ">
            <Slider {...settings}>
                {promotedApps.map((app, index) => (
                    <div key={index} className="relative w-full h-[400px]">
                        <img
                            src={app.banner}
                            alt={`promo-slide-${index}`}
                            className="w-full h-full object-cover rounded"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">
                            <h2 className="text-xl font-bold">{app.name}</h2>
                            <p className="text-sm">{app.description}</p>
                        </div>
                    </div>
                ))}
            </Slider>

        </div>
    );
};

export default ImageSlider;
