import { FiDownload } from "react-icons/fi"
import Button from "../components/ui/button"
import ContactIcons from "../components/contactIcons"
import resumeData from "../data/resumeData"

export default function Homepage() {
    return (
        <div className="pt-4 xl:py-32 xl:pl-0 pl-3">
            <div className="container mx-auto xl:block text-left">
                <div className="flex flex-col xl:flex-row items-left justify-between xl:pt-8 xl:pb-24">
                    <div>
                        <span className="text-xl">Software Developer</span>
                        <h1 className="h1">Hello Im,
                            <br></br>
                            <span className="text-teal-500">Davin Kurnia</span>
                        </h1>
                        <p className="xl:max-w-[500px] max-w-[450px] mb-4 text-white/80 pt-2 pr-8 text-base">
                        I'm a software developer who loves turning ideas into real-world applications and finding creative solutions using various technologies.  </p>
                        <ContactIcons contact={resumeData.contact}></ContactIcons>
                        <div className="flex justify-start">
                        <Button variant="outline" size='lg' className="uppercase flex items-center gap-2 mt-4">
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