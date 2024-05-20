import { useLoaderData } from "react-router-dom";
import Event from "../Event/Event";
import { useEffect, useState } from "react";


const Events = () => {

    const [events,setEvents]=useState([])

    useEffect(()=>{
        fetch('events.json')
        .then(res=>res.json())
        .then(data=>setEvents(data))
    },[])
    
    return (
        
        <div className="">
            <h2 className="text-5xl font-bold text-center my-12 underline">POPULAR EVENT</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                {
                    events.map(event=><Event key={event.id} event={event}></Event>)
                }   
            </div>
        </div>
    );
};

export default Events;