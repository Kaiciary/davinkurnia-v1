import Image from "next/image";
import Navbar from "./navbar";
import MobileNav from "./mobileNav";

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between">
                <div className="flex-none w-full max-w-[180px] sm:max-w-[100px] md:max-w-[150px]">
                    <h1 className='xl:h3 h2'>Davin <strong className='text-teal-500'>.</strong></h1>
                </div>
                <div>
                    <Navbar />
                    <div className="xl:hidden">
                        <MobileNav></MobileNav>
                    </div>
                </div>
            </div>
        </header>
    )
}


export default Header