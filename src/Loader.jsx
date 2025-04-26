import { div } from "framer-motion/client";

function Loader() {
    return (
        <div className=" absolute z-50 h-full w-full flex justify-center items-center bg-white/5 backdrop-brightness-80 backdrop-blur-lg">

            <span className="loading loading-ring loading-xl text-blue-600 shadow-[0_0_30px_#1F51FF]"></span>

        </div>
    )
}
export default Loader;