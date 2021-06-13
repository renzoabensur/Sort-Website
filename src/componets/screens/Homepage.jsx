import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import ShowArray from './ShowArray'

const arrayMaxLength = 180


export default function Homepage() {
    const firstArray = []
    firstCall()

    const [currentArray, setCurrentArray] = useState(firstArray);
    
    function firstCall(){
        while(firstArray.length < arrayMaxLength){
            firstArray.push(Math.floor(Math.random() * 100))
        }
    }

    function randomArray () {
        let currentArray = []
        while(currentArray.length < arrayMaxLength){
            currentArray.push(Math.floor(Math.random() * 100))
        }
        setCurrentArray(currentArray)
    };
    
    function selectSort(){
        console.log("array")
    }


    useEffect(() => {
        
    })

    return (
        <div>
            <Navbar randomArray={randomArray} selectSort={selectSort} />
            <ShowArray array={currentArray}/>
        </div>
    )
}
