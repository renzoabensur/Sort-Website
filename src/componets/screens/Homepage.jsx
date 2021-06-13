import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import ShowArray from './ShowArray'

//max 180
const arrayMaxLength = 180

export default function Homepage() {
    const [currentArray, setCurrentArray] = useState([]);
    
    useEffect(() => {
        randomArray()
    },{})

    function randomArray () {
        let randomArray = []
        while(randomArray.length < arrayMaxLength){
            randomArray.push(Math.floor(Math.random() * 100))
        }
        setCurrentArray(randomArray)
    };
    
    function selectionSort(){
        var selectArray = []
        for(var i = 0; i< arrayMaxLength; i++){
            selectArray.push(currentArray[i])
        }
        
        console.log(selectArray)
        
        for(var i = 0; i < selectArray.length; i++){
            var temp = selectArray[i]
            var tempPosition = i
            for(var j = i + 1; j < selectArray.length; j++){
                if(temp > selectArray[j]){
                    tempPosition = j
                    temp = selectArray[j]
                }
            }
            selectArray[tempPosition] = selectArray[i]
            selectArray[i] = temp     
            console.log(selectArray)     
        }
        
        console.log(currentArray)
        setCurrentArray(selectArray)
    }

    function bubbleSort(){
        console.log(currentArray)
        
    }
    function insertionSort(){
        
    }
    function mergeSort(){
        
    }
    function quickSort(){
        
    }
    function heapSort(){
        
    }
    function countingSort(){
        
    }
    function radixSort(){
        
    }
    function bucketSort(){
        
    }

    return (
        <div>
            <Navbar 
            randomArray={randomArray} 
            selectionSort={selectionSort} 
            bubbleSort={bubbleSort} 
            insertionSort={insertionSort} 
            mergeSort={mergeSort} 
            quickSort={quickSort} 
            heapSort={heapSort} 
            countingSort={countingSort} 
            radixSort={radixSort} 
            bucketSort={bucketSort} 
            />
            <ShowArray array={currentArray}/>
        </div>
    )
}
