import { div } from "framer-motion/client"

function Dot({ info, setInfo }){
    return(
        <div>

        <div className=' flex justify-center items-center mt-14'>
        <div className=' w-32 h-12 rounded-4xl absolute z-30 bg-white/5 backdrop-blur-lg backdrop-brightness-80 shadow-[0_0_30px_#1F51FF] 'onClick={()=>{setInfo(!info)}}>
        <div className=' flex justify-center items-center h-full'>
        <i class="fa-solid fa-ellipsis font-bold text-4xl hover:text-black cursor-pointer transition ease-in-out"></i>

        </div>
        </div>
        </div>

        </div>
    )
}
export default Dot;
