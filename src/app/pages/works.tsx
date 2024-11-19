import MyWork from "../components/works"
import resumeData from "../data/resumeData"

const Works: React.FC = () => {
    return (<div className="py-8 xl:py-32">
        <div className="container mx-auto xl:block text-center xl:text-left">
            <div className="flex flex-col xl:flex-row gap-32">
                <div>
                    <h1 className="h2">My Works</h1>
                    <div className="mt-4 flex xl:justify-start justify-center">
                            <div className="xl:max-w-xl max-w-[450px]">
                                <MyWork works={resumeData.projects}></MyWork>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>)
}

export default Works