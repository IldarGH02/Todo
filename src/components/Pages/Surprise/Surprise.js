import React, { useState } from "react";
import style from "../Surprise/style.css"

const Surprise = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className="surprise">
            <div className="container">
                <div className="surprise__content">
                    <button onClick={() => setOpen(!open)} className="surprise__btn">Нажми на меня</button>
                    {open && 
                        <div>
                            <img 
                            src="http://newslab.ru/content/forumImage/2015/October/r/3ec7e1be-efa4-4d75-8b02-613cee0ce18f.jpg"
                            alt="fox"
                            />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Surprise