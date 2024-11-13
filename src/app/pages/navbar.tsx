import Link from 'next/link'
import links from "../data/links"
const Navbar = () => {
    return (
        <div className="hidden xl:flex xl:gap-x-10 xl:flex-grow max-w-full justify-end items-center">
            {links.map((link, index) => {
                return (
                    <Link href={link.path} key={index} className='hover:text-teal-500 transition-all'>
                        {link.name}
                    </Link>
                )
            })}
        </div>
        
    )
}


export default Navbar