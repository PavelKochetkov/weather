import React from "react"
import axios from 'axios'
import { WeekContainer } from "./Components/WeekContainer"
import './App.css'
import { useState } from "react"
import { useEffect } from "react"

const api = {
  id: '65fdf2698bc46edde145bb0b8b52cbf8',
  url: 'https://api.openweathermap.org/data/2.5/'
}

const App = () => {
  const [weatherMorning, setWeatherMorning] = useState([])
  const [weatherDaytime, setWeatherDaytime] = useState([])
  const [weatherEvening, setWeatherEvening] = useState([])
    useEffect(() => {
      const fetchData = async () => {
      const response = await axios.get(`${api.url}forecast?q=Vladimir&lang=ru&units=metric&APPID=${api.id}`)
      const dailyDataMorning = response.data.list.filter(read => read.dt_txt.includes('09:00:00'))
      setWeatherMorning(dailyDataMorning)
      const dailyDataDaytime = response.data.list.filter(read => read.dt_txt.includes('15:00:00'))
      setWeatherDaytime(dailyDataDaytime)
      const dailyDataEvening = response.data.list.filter(read => read.dt_txt.includes('00:00:00'))
      setWeatherEvening(dailyDataEvening)
      }
      fetchData()
    }, [])
  
    return (
      <React.Fragment>
        <div className="head">
          Прогноз погоды г. Владимир
        </div>
        <div className='App'>
          <div className="morning">Утро</div>
          {weatherMorning.map(list => <WeekContainer list={list}/>)}
          <div className="day">День</div>
          {weatherDaytime.map(list => <WeekContainer list={list}/>)}
          <div className="evening">Вечер</div>
          {weatherEvening.map(list => <WeekContainer list={list}/>)}
        </div>
      </React.Fragment>
    )
}
export default App
