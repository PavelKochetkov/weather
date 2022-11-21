import React from "react"
import '../css/weekContainer.css'

export const WeekContainer = (props) => {
    const ms = props.list.dt * 1000
    const weekDayName = new Date(ms).toLocaleString('ru', {weekday: 'long'})
    const dayNumber = new Date(ms).toLocaleString('ru', {month: 'long', day: '2-digit', year: 'numeric'})
    const cardText = props.list.weather[0].description
    const tempNow = Math.round(props.list.main.temp) + ' °C'
    
    const imgURL = `owf owf-${props.list.weather[0].id} owf-4x icon`
    return (
        <div className="weekContainer">
            <div className="weekDayName">{weekDayName}</div>
            <div className="dayNumber">{dayNumber}</div>
            <i className={imgURL}/>
            <div className="temp">{tempNow}</div>
            <div className="descripion">{cardText}</div>
        </div>
    )
}