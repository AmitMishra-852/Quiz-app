import React, { useRef, useState } from 'react';
import "./Start.css";

function Start({ setQuizPlayer }) {
    const playerName = useRef()
    const clickHandler = () => {
        console.log(playerName.current?.value)
        setQuizPlayer(playerName.current?.value)
    }
    return (
        <div className="start">
            <div className="startwrap">
                <input
                    placeholder="Enter your userName"
                    className="userInput"
                    ref={playerName}
                />
                <button
                    className="enterButton"
                    onClick={clickHandler}> Start </button>
            </div>
        </div>
    )
}

export default Start
