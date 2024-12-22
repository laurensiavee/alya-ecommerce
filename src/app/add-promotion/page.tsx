'use client'

import Card from "@/component/base/Card";
import Label from "@/component/base/Label";
import Title from "@/component/base/Title";
import { PostAddEventReqBody } from "@/entities/event/PostAddEvent.interface";
import { EventService } from "@/services/event/event.service";
import { selectToken, setLoading } from "@/store/authSlice";
import { showToast } from "@/utils/toastNotify";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const AddEventPage = () => {
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventStartAt, setEventStartAt] = useState('');
  const [eventEndAt, setEventEndAt] = useState('');
  const [error] = useState<string | null>(null);

  const eventService = new EventService();

  const router = useRouter();
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    postAddEvent();
  }

  function postAddEvent() {
    dispatch(setLoading(true))
    const body: PostAddEventReqBody = {
        event_name: eventName,
        event_description: eventDescription,
        event_start_at: eventStartAt,
        event_end_at: eventEndAt,
        is_active: true,
    }
    
    eventService.postAddEvent(body, token)
    .then((resp) => {
      if(resp.status === 200){
        showToast(resp.message, "success")
        router.push('/')
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
    <div className='flex justify-center align-center h-[calc(100vh-10rem)] '>
      <div className='w-1/2 m-auto'>
        <Card>
          <div>
            <Title className="my-3 align-middle text-center">Add Event</Title>
            <form onSubmit={handleSubmit}>
              <div className='mb-3'>
                <Label>Event Name</Label>
                <input
                  placeholder="Input Event Name" 
                  className="bg-white border border-l-secondary/60 text-l-text text-sm rounded-lg block w-full p-2.5"
                  id="eventName"
                  type="text"
                  value={eventName}
                  onChange={(e) => setEventName(e.target.value)}
                  required
                />
              </div>
              <div className='mb-3'>
                <Label>Event Description</Label>
                <input
                  placeholder="Input Event Description" 
                  className="bg-white border border-l-secondary/60 text-l-text text-sm rounded-lg block w-full p-2.5"
                  id="eventDescription"
                  type="text"
                  value={eventDescription}
                  onChange={(e) => setEventDescription(e.target.value)}
                  required
                />
              </div>
              <div className='mb-3'>
                <Label>Event Start At</Label>
                <input
                  placeholder="Input Event Start Time" 
                  className="bg-white border border-l-secondary/60 text-l-text text-sm rounded-lg block w-full p-2.5"
                  id="eventStartAt"
                  type="text"
                  value={eventStartAt}
                  onChange={(e) => setEventStartAt(e.target.value)}
                  required
                />
              </div>
              <div className='mb-3'>
                <Label>Event End At</Label>
                <input
                  placeholder="Input Event End Time" 
                  className="bg-white border border-l-secondary/60 text-l-text text-sm rounded-lg block w-full p-2.5"
                  id="eventEndAt"
                  type="text"
                  value={eventEndAt}
                  onChange={(e) => setEventEndAt(e.target.value)}
                  required
                />
              </div>
              <div className='flex justify-end'>
                <button type='submit' className="rounded-xl py-2 px-5 ms-2 bg-gradient-to-br from-l-primary to-l-secondary text-d-text font-bold hover:from-l-secondary hover:to-l-primary hover:shadow-2xl hover:shadow-l-primary/50">
                  Add Event
                </button>
              </div>
              {error && <p>{error}</p>}
            </form>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default AddEventPage;
