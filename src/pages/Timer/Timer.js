import React, { useEffect, useState } from "react";

const Timer = () => {    
    const [date, setDate] = useState(getTimer())

    useEffect(() => {
        setInterval(() => {
            setDate(getTimer)
        }, 1000)
    }, [])

    function getTimer() {  
        let date = new Date().toLocaleTimeString()
        return date
    }    

    return (
        <div className="clock">
            <div className="container">
                <div className="clock__content">
                    <div className="clock">{date}</div>
                </div>
            </div>
        </div>
    )
}

export default Timer