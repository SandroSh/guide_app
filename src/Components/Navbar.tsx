import { Link } from "react-router-dom"
import { navData, navLink } from "../Data"
import { useEffect, useState } from "react"
import borderEllipse from '../../public/assets/Ellipse 22-2.svg'
import ProfileIcon from '../../public/assets/profile.svg'

import HeartIcon from '../../public/assets/heart-angle-svgrepo-com.svg'
const Navbar = () => {

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
        <div className={`fixed  w-full max-w-[1300px] flex justify-between items-start  gap-[70px] z-100 p-[10px] rounded-2xl transition-all duration-300 ${isScrolled ? "bg-white shadow-lg mt-[17px]" : "bg-transparent mt-[47px]"
            }`}>
            <div className="flex items-start justify-start ">
                <div>
                    <div className="w-[100px] h-[100px] bg-primaryRed rounded-tl-[20px] rounded-tr-[10px] rounded-br-[30px] rounded-bl-[20px]"></div>
                    <div className="absolute top-1/2 left-[2%] -translate-y-1/2  flex flex-col justify-center items-center">
                        <img src={HeartIcon}  alt="heart logo" />
                        <p className="text-[12px] font-bold text-white">With Love</p>
                        <p className="text-[7px] font-bold text-white">Racha</p>
                    </div>
                </div>
                <ul className="flex items-center mt-[19px] ml-[70px]">
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
            <div className="mt-[5px] flex justify-center items-center">
                <p className="mr-3 font-bold">GIORGI 99</p>
                <img src={ProfileIcon} className="w-[56px] mr-5" alt="profileIcon" />
                <div className="relative" >
                    <img src={borderEllipse} className="w-[56px] h-[56px]" alt="border ellipse" />
                    <p className="absolute top-[28%] left-[20%]">ENG</p>
                </div>

            </div>
        </div>
    )
}

export default Navbar