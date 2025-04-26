import { motion } from 'framer-motion';

function Humid({ info, feel,humidity,description }) {
    return (
        <div>
            <div className=' flex justify-center items-center'>
                <div className=' flex justify-center items-center mt-11 absolute z-30'>
                    <motion.div
                        animate={{ width: info ? '320px' : '60px' }} // dynamic width
                        transition={{ type: 'spring', stiffness: 120, damping: 25 }}
                        className='w-56 h-48 rounded-4xl absolute z-30 bg-white/5 backdrop-blur-lg backdrop-brightness-80 shadow-[0_0_30px_#1F51FF]'
                    ><i class="fa-solid fa-cloud-moon font-bold text-purple-300 m-6"></i>
                        <div className=' flex justify-center items-center gap-3.5 w-full'>

                            <div className=' size-20 bg-black/70 rounded-xl border-2 border-black flex justify-center flex-wrap hover:scale-120 transition cursor-pointer'>
                                <i class="fa-solid fa-cloud text-gray-300 text-2xl mt-1"></i>
                                <h4 className=' text-[0.9rem] font-medium'>Feels Like</h4>
                                <h2 className=' font-bold text-purple-300'>{feel}</h2>
                            </div>
                            

                            <div className=' size-20 bg-black/70 rounded-xl border-2 border-black flex justify-center flex-wrap hover:scale-120 transition cursor-pointer'>
                                <i class="fa-solid fa-cloud text-gray-300 text-2xl mt-1"></i>
                                <h4 className=' text-[0.9rem] font-medium'>Humidity</h4>
                                <h2 className=' font-bold text-purple-300'>{humidity}</h2>
                            </div>

                            <div className=' size-20 bg-black/70 rounded-xl border-2 border-black flex justify-center flex-wrap hover:scale-120 transition cursor-pointer'>
                                <i class="fa-solid fa-cloud text-gray-300 text-2xl mt-1"></i>
                                <h4 className=' text-[0.9rem] font-medium'>Description</h4>
                                <h2 className=' font-bold text-purple-300'>{description}</h2>
                            </div>


                        </div>
                    </motion.div>
                </div>
            </div>
        </div>

    )
}
export default Humid;


{/* <div className=' flex justify-center items-center mt-11'>
        <div className=' w-32 h-12 rounded-4xl absolute z-30 bg-white/5 backdrop-blur-lg backdrop-brightness-80 shadow-[0_0_30px_#1F51FF]'>
        <div className=' flex justify-center items-center h-full'>
        <i class="fa-solid fa-ellipsis font-bold text-4xl hover:text-black cursor-pointer transition ease-in-out"></i>
        </div>
        </div>
        </div> */}