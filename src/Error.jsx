import { motion } from 'framer-motion';

function Error({ seterror,haserror }) {
    return (
        <div>

            <div className=" absolute z-50 h-full w-full flex justify-center items-center bg-white/5 backdrop-brightness-80 backdrop-blur-lg">
                <motion.div
                    initial={{ y: -200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 80 }}
                    role="alert"
                    className="alert alert-error"
                >
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => { seterror(false) }} className=" hover:scale-125 transition cursor-pointer h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Error! Wrong City Name Please Re-Try.</span>
                    </motion.div>
            </div>
        </div>
    )
}
export default Error;