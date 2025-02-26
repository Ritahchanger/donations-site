import { donateData } from "@/constants/Donate";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./WhatDonorSay.css";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 3 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const WhatDonorsSay = () => {
  return (
    <div className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-[1300px] mx-auto bg-white text-black p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">
            What Our Donors Say
          </h2>
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all .5s ease"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {donateData.map((testimony: any) => (
              <div key={testimony.id} className=" p-4 rounded-lg">
                <div className="flex items-center gap-[0.2rem] bg-gray-50 p-[0.3rem] border ">
                  <div className="basis-[20%]">
                    {/* <Image
                      src={testimony.urlImage}
                      width={64}
                      height={64}
                      alt={testimony.name || "Donor Image"}
                      className="object-cover"
                    /> */}
                    <img
                      src="https://images.pexels.com/photos/30355499/pexels-photo-30355499/free-photo-of-venetian-carnival-mask-in-festive-attire.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      className="h-[60px] w-[60px] rounded-full"
                      alt=""
                    />
                  </div>
                  <div className="basis-[80%]">
                    <p className="text-gray-700 text-sm italic">
                      "{testimony.description}"
                    </p>
                    <h3 className="font-semibold text-md mt-2">
                      {testimony.name}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {testimony.position}, {testimony.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default WhatDonorsSay;
