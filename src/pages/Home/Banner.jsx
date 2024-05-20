
import speaker1 from '../../assets/small-pic/sb-speaker1.png'
import speaker2 from '../../assets/small-pic/sb-speaker2.png'
import speaker3 from '../../assets/small-pic/sb-speaker3.png'
import speaker4 from '../../assets/small-pic/sb-speaker4.png'
import speaker5 from '../../assets/small-pic/sb-speaker5.png'
import MySwiper from '../MySwiper/MySwiper'






const Banner = () => {

    const style ={
        backgroundColor: "rgb(254, 202 ,202)",       
    }


    return (
        <div style={style} className='p-5'>
            <div className='grid grid-cols-1 md:grid-cols-9'>
                <div className='p-12 mx-auto space-y-4'>
                    <img  src={speaker1} alt="" />
                    <img src={speaker2} alt="" />
                    <img src={speaker3} alt="" />
                    <img src={speaker4} alt="" />
                    <img src={speaker5} alt="" />
                </div>

                <div className='col-span-8'>
                    <MySwiper></MySwiper>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;