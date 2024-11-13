import { FiDownload } from "react-icons/fi"
import Button from "../components/ui/button"

export default function Homepage() {
    return (
        <div className="py-8 xl:py-32">
            <div className="container mx-auto xl:block text-center xl:text-left">
                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                    <div>
                        <span className="text-xl">Software Developer</span>
                        <h1 className="h1">Hello Im,
                            <br></br>
                            <span>Davin Kurnia</span>
                        </h1>
                        <p className="max-w-[500px] mb-9 text-white/80 pt-8">
                            I’m a software developer passionate about creating innovative applications and solving problems to deliver impactful solutions using various programming languages and technologies.  </p>
                        <div className="flex xl:justify-start justify-center">
                        <Button variant="outline" size='lg' className="uppercase flex items-center gap-2">
                            <span>Download CV</span>
                            <FiDownload className="text-xl"></FiDownload>
                        </Button>
                        </div>
                       
                    </div>
                    <div className="hidden xl:block">
                        Image
                    </div>

                </div>
            </div>
        </div>

    )
}