import Image from "next/image";
import Link from 'next/link'

export default function Navbar() {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto xl:flex">
                <div className="flex-none">
                    <Image
                        className="dark:invert"
                        src="/next.svg"
                        alt="Next.js logo"
                        width={180}
                        height={38}
                        priority
                    />
                </div>
                <div className="xl:flex xl:gap-x-10 xl:flex-grow max-w-full justify-end items-center">
                    <Link href="#">Home Page</Link>
                    <Link href="#">Resume</Link>
                    <Link href="#">Work</Link>
                    <Link href="/next-page">
                        <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                            Connect
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    )

}