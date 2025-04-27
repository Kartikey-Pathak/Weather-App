import { useState, useEffect, useActionState, useRef } from 'react';
import './App.css'
import clear_icon from './assets/clear.png';
import cloud_icon from './assets/cloud.png';
import drizzle_icon from './assets/drizzle.png';
import rain_icon from './assets/rain.png';
import snow_icon from './assets/snow.png';
import react_icon from './assets/react.svg';

import cloud from './assets/clouds.mp4'
import clear from './assets/clear.mp4'
import rain from './assets/rain.mp4'
import haze from './assets/haze.mp4'

import { motion } from 'framer-motion';
import Card from './Card';
import Humid from './Humid';
import Dot from './Dot';
import Loader from './Loader';



function App() {
  const inputref = useRef();
  const [weather, setWeather] = useState({});
  const [visible, isVisible] = useState(false);

  const [expanded, setExpanded] = useState(false);
  const [info, setInfo] = useState(false);
  
  const [display,Setdisplay]=useState({});
   
  const [load,setload]=useState(true);

  const search = async (city) => {
        
     setload(true);

    //Its For the Videos in the Background
    const allvideo={
      "Clear":clear,
      "Clouds":cloud,
      "Rain":rain,
      "Haze":haze
    }
    
    //It's for the icons 
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

      const vid=allvideo[data.weather[0].main]
      setWeather({
        humidity: data.main.humidity,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        windSpeed: data.wind.speed,
        icon: icon,
        feel: data.main.feels_like,
        humidity: data.main.humidity,
        description: data.weather[0].main,
        vid:vid
        
      })

      setload(false);

    } catch (error) {
      console.log("Falied To Fetch", error);
    }
  }
  useEffect(() => {
    search("new york");
  }, [])
  return (
    <div className='flex justify-center md:items-center min-h-screen relative'>
      <div className="h-full md:h-[38rem] w-96 bg-black  rounded-4xl absolute z-10 " onClick={() => { if (visible == true) { isVisible(!visible) } if (info == true) { setInfo(!info) } }}>
        
        {/* Loader Componet */}
        {load?<Loader/>:null}
      
        <video
           src={weather.vid || cloud} // fallback to cloud if no weather.vid
          autoPlay
          loop
          muted
          playsInline
          className="absolute -z-10 top-0 left-0 w-full h-full object-cover"
          onLoadedData={() => setLoading(false)}
        ></video>
        <div className='ml-3 mt-3 size-2'><i onClick={() => { isVisible(!visible) }} class="fa-brands fa-react text-blue-400 font-bold text-2xl cursor-pointer hover:scale-75 transition"></i></div>
        <br />

        {/* Card Componet */}
        {
          visible ?
            <Card />
            :
            null
        }
        {/* Card Componet */}

        <div className='flex justify-center items-center'>
          <motion.div
            animate={{ width: expanded ? '320px' : '60px' }} // dynamic width
            transition={{ type: 'spring', stiffness: 120, damping: 25 }}
            className='flex items-center gap-1 h-11 shadow-[0_0_25px_#1F51FF] rounded-2xl bg-white overflow-hidden px-2'
          >
            {expanded && (
              <input
                type="text"
                ref={inputref}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') search(inputref.current.value);
                }}
                placeholder='Enter City'
                className='w-full h-full placeholder-shown:m-3 bg-transparent outline-none text-xl font-bold text-black'
              />
            )}
            <div className='h-11 w-11 flex justify-center items-center relative'>
              <i
                className="fa-solid fa-magnifying-glass text-2xl text-black cursor-pointer"
                onClick={() => {
                  if (expanded) search(inputref.current.value);
                  setExpanded(true);
                }}
              ></i>

              <i
                className="fa-solid fa-circle-arrow-left absolute -right-10 text-xl text-black hover:text-yellow-500 transition cursor-pointer"
                onClick={() => setExpanded(!expanded)}
              ></i>
            </div>
          </motion.div>
        </div>


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
        <div className='flex justify-center items-center mt-10 '>
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

        {/* The Info Component */}
        {
          info ? <Humid info={info} feel={weather.feel} humidity={weather.humidity} description={weather.description} /> : null
        }


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

        {
          (info == false) ? <Dot info={info} setInfo={setInfo} /> : null
        }
      </div>

    </div>
  )
}

export default App;
