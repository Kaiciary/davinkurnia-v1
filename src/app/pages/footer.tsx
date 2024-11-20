const Footer = () => {
    return <div className="pt-40 xl:py-32 pl-3">
        <div className="container mx-auto xl:block text-left items-center">
            <div className="flex flex-col xl:flex-row xl:gap-32">
                <h1 className="h3 xl:pt-4">Conenct With Me</h1>
                <p className="text-white/80 text-left pr-2 text-sm mt-4 pr-8">
                    I'm always excited to explore new opportunities where I can use my skills, learn from others, and work on meaningful projects.
                    <br />
                    <br />
                    If you think we could create something amazing together, feel free to reach out—I’d love to connect!
                </p>
                <p className="text-white/50 text-left pr-2 text-sm mt-10 xl:max-w-full max-w-[300px] pb-20">Built with 
                    <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className='text-teal-500 hover:underline'> Next.js </a> 
                    and 
                    <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className='text-teal-500 hover:underline'> Tailwind </a> 
                    — all text using  <a href="https://rsms.me/inter" target="_blank" rel="noopener noreferrer" className='text-teal-500 hover:underline'>Inter</a> typeface, 
                    deployed on Vercel.</p>
            </div>
        </div>
    </div>
}

export default Footer