import { Link } from "react-router-dom"
import { navData, navLink } from "../Data"
import { useEffect, useState } from "react"
import borderEllipse from '../../public/assets/Ellipse 22-2.svg'
import ProfileIcon from '../../public/assets/profile.svg'

import HeartIcon from '../../public/assets/heart-angle-svgrepo-com.svg'
const Navbar = ({handleRegistrationClick}:{handleRegistrationClick: React.Dispatch<React.SetStateAction<boolean>>}) => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
    }, []);

    const [navLinks, setNavLinks] = useState(navData)
    const handleClick = (item: navLink) => {
        const temArr = navLinks.map((link) => ({
            ...link,
            isActive: item.route === link.route,
        }));
        setNavLinks(temArr);
    }

    return (
        <div className={`fixed  w-full max-w-[1300px] flex justify-between ${isScrolled ? 'items-center' : 'items-start'}  gap-[70px] z-100 p-[10px] rounded-2xl transition-all duration-300 ${isScrolled ? "bg-white shadow-lg mt-[17px]" : "bg-transparent mt-[47px]"
            }`}>
            <div className={`flex  ${isScrolled ? 'items-center' : 'items-start'} justify-start`}>
                <div>
                    <div className={` ${isScrolled ? 'w-[80px] h-[80px]' : 'w-[100px] h-[100px]'}  bg-primaryRed rounded-tl-[20px] rounded-tr-[10px] rounded-br-[30px] rounded-bl-[20px]`}></div>
                    <div className={` ${isScrolled ? 'top-1/2 left-[1.5%]' : 'top-1/2 left-[2%]'} absolute  -translate-y-1/2  flex flex-col justify-center items-center`}>
                        <img src={HeartIcon} className={`${isScrolled ? 'w-[35px] h-[35px]' : ''}`} alt="heart logo" />
                        <p className="text-[12px] font-bold text-white">With Love</p>
                        <p className="text-[7px] font-bold text-white">Racha</p>
                    </div>
                </div>
                <ul className={` ${isScrolled ? '' : 'mt-[19px]'} flex items-center  ml-[70px]`}>
                    {navLinks.map((item, i) => (
                        <li className="mr-[15px]" key={i}>
                            <Link
                                to={item.route}
                                className={item.isActive ? "text-primaryRed font-[700] text-[17px] " : "text-primaryBlue font-[700] text-[17px]"}
                                onClick={() => handleClick(item)}>
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            {/* <div className= {`${isScrolled ? '': 'mt-[5px]'} flex justify-center items-center`}>
                <p className="mr-3 font-bold">GIORGI 99</p>
                <img src={ProfileIcon} className="w-[56px] mr-5" alt="profileIcon" />
                <div className="relative" >
                    <img src={borderEllipse} className="w-[56px] h-[56px]" alt="border ellipse" />
                    <p className="absolute top-[28%] left-[20%]">ENG</p>
                </div>
            </div> */ }
            <div className=" mt-[5px] flex justify-center items-center gap-[15px]" >
                <div className="pt-[15px] pb-[15px] pl-[25px] pr-[25px] bg-primaryRed text-white font-bold  rounded-4xl cursor-pointer " onClick={() => handleRegistrationClick(prev => !prev)}><p>რეგისტრაცია</p></div>
                <div className="pt-[15px] pb-[15px] pl-[25px] pr-[25px] border-2 border-primaryBlue text-primaryBlue font-bold rounded-4xl cursor-pointer "><p>ავტორიზაცია</p></div>
                <div className="relative" >
                    <img src={borderEllipse} className="w-[56px] h-[56px]" alt="border ellipse" />
                    <p className="absolute top-[28%] left-[20%]">ENG</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar