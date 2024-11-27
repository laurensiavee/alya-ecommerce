import Title from "../../component/base/Title";
import { Carousel } from "flowbite-react";

export default function PromotionCarousel() {
    return (
        <div>
            <h1 className="text-l-text font-bold">Promotions</h1>
            <h2 className="text-l-text-secondary">until today 09.00</h2>
                 <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                    <Carousel>
                        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
                        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
                        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
                        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
                        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
                    </Carousel>
                </div>
        </div>
    );
  }
  