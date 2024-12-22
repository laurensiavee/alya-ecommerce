'use client'
import { EventService } from "@/services/event/event.service";
import { Carousel } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { selectToken, setLoading } from "@/store/authSlice";
import { useEffect, useState } from "react";
import { showToast } from "@/utils/toastNotify";

export default function PromotionCarousel() {
    const [eventList, setEventList] = useState<any[]>([]);

    const eventService = new EventService();

    const dispatch = useDispatch();
    const token = useSelector(selectToken);

    useEffect(() => {
        getEventList()
        
        return () => {
            console.log('Component unmounted');
        };
    }, []); 

    function getEventList() {
        dispatch(setLoading(true))
        
        eventService.getEventList(token)
        .then((resp) => {
          if(resp.status === 200){
            setEventList(resp.data? resp.data : [])
          }
          else
            showToast(resp.message, "error")
        })
        .catch((error) => {
          showToast(error.message, "error")
          console.error(error.message);
        }).finally(() => {
          dispatch(setLoading(false))
        });
    }

    return (
        <div>
            <h1 className="text-l-text font-bold">Promotions</h1>
            {/* <h2 className="text-l-text-secondary">until today 09.00</h2> */}
                 <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                    <Carousel>
                        {eventList.map((event, index) => (
                            <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
                        ))}

                        {/* <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
                        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
                        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
                        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
                        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." /> */}
                    </Carousel>
                </div>
        </div>
    );
  }
  