import { MdEventSeat } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineDateRange } from "react-icons/md";
import { Link } from "react-router-dom";

import './Event.css'

const Event = ({event}) => {

    const {title,date,address,seat,img,id}=event;

    return (
        <div className="card w-96 bg-base-100 shadow-xl font-semibold  hover:translate-y-10 duration-500">
                        <figure>
                            <img className="" src={img} alt="Shoes" />
                            
                        </figure>

                <div className="card-body">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center ">
                            <MdOutlineDateRange />
                            <h4 className="ml-2">{date}</h4>
                        </div>

                        <div className="flex items-center">
                            <CiLocationOn />
                            <h4 className="ml-2">{address}</h4>
                        </div>
                    </div>
                    <h2 className="card-title">{title}</h2>
                    
                        <div className="card-actions">
                            <Link className="underline text-red-700">Book Now</Link>
                        </div>
                </div>
        </div>
    );
};

export default Event;