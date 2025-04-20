import { motion } from 'framer-motion';
import './App.css'

function Card(){
    return(
        <div className='flex justify-center items-center'>
              <motion.div
                initial={{ y: -200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 80 }}
                className='bg-white h-96 w-80 absolute z-30 mt-[28rem] m-auto rounded-4xl overflow-y-auto'
              >
                {/* Cross */}
                <div className='absolute right-3 top-3'>
                  <div
                    className='bg-gray-300 rounded-4xl size-6 flex justify-center items-center hover:scale-125 transition cursor-pointer'
                    onClick={() => isVisible(!visible)}
                  >
                    <i className="fa-solid font-bold text-black fa-xmark"></i>
                  </div>
                </div>

                {/* Static Texts/Info */}
                <div>
                  <div className='h-12 w-20 rounded-4xl flex justify-center items-center m-5'><img className='rounded-4xl' src="/src/assets/openweather.png" alt="" /></div>
                  <h1 className='font-bold text-black m-3'>This weather app uses the</h1>
                  <h1 className='font-bold text-black m-3'><a href="https://openweathermap.org/api" className=' font-medium text-blue-500 underline'>OpenWeather Api</a><br />to fetch real-time weather data.</h1>
                  <br />
                  <h1 className='font-bold text-black m-3'>- The Api Includes Some Special Features Like : -</h1>
                  <ul>
                    <li className=' m-3 text-gray-500 font-bold'>- Access current weather data for any location</li>
                    <li className=' m-3 text-gray-500 font-bold'>- We collect and process weather data from different sources such as global and local weather models, satellites, radars and a vast network of weather stations</li>
                    <li className=' m-3 text-gray-500 font-bold'>- JSON, XML, and HTML formats</li>
                    <li className=' m-3 text-gray-500 font-bold'>- Included in both free and paid subscriptions</li>
                  </ul>
                  <h1 className='font-bold text-black m-3'>Other features</h1>
                  <br />
                  <h2 className='font-bold text-black m-3'>Geocoding API</h2>
                  <h1 className='font-bold text-gray-400 m-3'>Requesting API calls by geographical coordinates is the most accurate way to specify any location. If you need to convert city names and zip-codes to geo coordinates and the other way around automatically, please use our</h1><a className='m-3 font-medium text-blue-500 underline' href="https://openweathermap.org/api/geocoding-api">Geocoding API.</a>
                  <br />
                  <h1 className='font-bold text-black m-3'>Product concept</h1>
                  <h2 className='font-bold text-gray-400 m-3'>Access current weather data for any location on Earth! We collect and process weather data from different sources such as global and local weather models, satellites, radars and a vast network of weather stations. Data is available in JSON, XML, or HTML format.</h2>
                  <br />
                  <br />
                  <h1 className='font-bold text-gray-500 m-3'>~ Thanks For Using My react App, Developer Kartikey</h1>
                </div>
                {/* Static Texts/Info */}

              </motion.div>
            </div>
    )
}
export default Card;