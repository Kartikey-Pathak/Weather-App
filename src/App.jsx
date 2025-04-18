import { useState, useEffect, useActionState, useRef } from 'react';
import './App.css'
import clear_icon from './assets/clear.png';
import cloud_icon from './assets/cloud.png';
import drizzle_icon from './assets/drizzle.png';
import rain_icon from './assets/rain.png';
import snow_icon from './assets/snow.png';
import react_icon from './assets/react.svg';

import { motion } from 'framer-motion';

function App() {
  const inputref = useRef();
  const [weather, setWeather] = useState({});
  const [visible,isVisible]=useState(false);
  const search = async (city) => {

    const allIcons = {
      "01d": clear_icon,
      "01n": clear_icon,
      "02d": cloud_icon,
      "02n": cloud_icon,
      "03d": cloud_icon,
      "03n": cloud_icon,
      "04d": drizzle_icon,
      "04n": drizzle_icon,
      "09d": rain_icon,
      "09n": rain_icon,
      "10d": rain_icon,
      "10n": rain_icon,
      "13d": snow_icon,
      "13n": snow_icon,
    };

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_key}`;

      const resp = await fetch(url);
      let data = await resp.json();
      console.log(data);

      const icon = allIcons[data.weather[0].icon] || clear_icon;
      setWeather({
        humidity: data.main.humidity,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        windSpeed: data.wind.speed,
        icon: icon

      })

    } catch (error) {
      console.log("Falied To Fetch", error);
    }
  }
  useEffect(() => {
    search("delhi");
  }, [])
  return (
    <div className='flex justify-center md:items-center min-h-screen relative'>
      <div className="glass h-[38rem] w-96 bg-[linear-gradient(172deg,rgba(2,0,36,1)_0%,rgba(9,9,121,1)_35%,rgba(0,212,255,1)_100%)]  rounded-4xl absolute z-10 ">
        <div className='ml-3 mt-3 size-2'><i class="fa-brands fa-react text-blue-400 font-bold text-2xl cursor-pointer hover:scale-75 transition"></i></div>
        <br />
        
        {/* <div className='flex justify-center items-center'>
        <div className='bg-white h-80 w-80 absolute z-30 mt-96 m-auto rounded-4xl'>helo</div>
        </div> */}



        <div className='flex items-center justify-center mt-10'>

          <motion.img
            key={weather.icon} // this re-triggers animation on icon change
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="size-28"
            src={weather.icon}
            alt=""
          />

        </div>
        <div className='flex justify-center items-center mt-10'>
          <motion.h1
            key={weather.temperature}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className='font-medium text-6xl text-white'
          >
            {weather.temperature}°C
          </motion.h1>
        </div>
        <div className='flex justify-center items-center mt-10'>
          <label htmlFor="humid">
            <motion.h1
              key={weather.humidity}
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className='mr-1 text-2xl'
            >
              {weather.humidity}%
            </motion.h1>
          </label>
          <i class="fa-solid fa-wind text-3xl text-gray-400 ml-2.5"></i>
        </div>
        <div className='flex items-center justify-center mt-5'>
          <motion.h1
            key={weather.location}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className='font-medium text-6xl text-white'
          >
            {weather.location}
          </motion.h1>
        </div>
        <div className=' flex justify-center items-center mt-20 gap-1'>
          <input type="text" ref={inputref} onKeyDown={(e)=>{
                    if(e.key=='Enter')search(inputref.current.value);
          }} placeholder='Enter City' id='city' className=' border-4 border-black rounded-2xl w-64 h-11 outline-0 bg-transparent text-xl font-bold text-black' />
          <label htmlFor="city"><div className=' bg-black rounded-xl h-11 w-11 flex justify-center items-center'><i class="fa-solid fa-magnifying-glass text-2xl text-white rounded-2xl" onClick={() => { search(inputref.current.value) }} ></i></div></label>
        </div>
      </div>

    </div>
  )
}

export default App;
