
import speaker1 from '../../assets/small-pic/sb-speaker1.png'
import speaker2 from '../../assets/small-pic/sb-speaker2.png'
import speaker3 from '../../assets/small-pic/sb-speaker3.png'
import speaker4 from '../../assets/small-pic/sb-speaker4.png'
import speaker5 from '../../assets/small-pic/sb-speaker5.png'


import { MdOutlineDateRange } from "react-icons/md";



const Banner = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className='flex items-center'>
                <div className='mr-5 space-y-2'>
                    <img className='' src={speaker1} alt="" />
                    <img src={speaker2} alt="" />
                    <img src={speaker3} alt="" />
                    <img src={speaker4} alt="" />
                    <img src={speaker5} alt="" />
                </div>
                <div className='my-10'>

                <div className='flex items-center text-red-700'>
                        <MdOutlineDateRange />
                    <h3 className='ml-2 font-semibold'>January 21,2024</h3>
                    </div>
                    <div className='text-3xl font-extrabold'>
                        <h2>EVENTS,MEETUPS & </h2>
                        <h2 className='text-red-700'>CONFERENCES</h2>
                    </div>
                    
                </div>
            </div>
            <div>
               <h3>Hello</h3>
            </div>

        </div>
    );
};

export default Banner;