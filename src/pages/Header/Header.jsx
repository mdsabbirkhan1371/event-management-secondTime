
import Events from "../Events/Events";
import Banner from "../Home/Banner";


const Header = () => {
    return (
            <div >
                
                <Banner></Banner>
                <div className="mt-32">
                    <Events></Events>
                </div> 
            </div>
         
    );
};

export default Header;