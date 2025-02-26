import { sectionHeaders } from "../Data"
import SectionHeader from "./SectionHeader"






const Hotels = () => {
    return (
        <div className="mt-[142px]  flex flex-col justify-center items-center">
            <SectionHeader data={sectionHeaders[2]} />
        </div>
    )
}

export default Hotels