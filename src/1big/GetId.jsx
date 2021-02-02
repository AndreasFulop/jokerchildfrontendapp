import React from 'react'
import PinkInfo from "../1medium/PinkInfo"
import PurpleButton from "../1small/PurpleButton"
import "./getId.css"
import urhajos from "../pics/urhajos.png"
import urhajoshata from "../pics/urhajoshata.png"


export default function GetId() {
    return (
        <div>
            <PinkInfo text="Kérlek add meg a kártyán található kódot amivel játszani szeretnél." />
            <input type="text" name="name"  className="input1"/>
            <PurpleButton text="Mutasd a kártyát!" />
            <div className="pics">
                <img src={urhajos} style={{height: "320px", paddingRight:"1%"}}/>
                <img src={urhajoshata} style={{height: "320px"}}/>
            </div>
            
        </div>
    )
}