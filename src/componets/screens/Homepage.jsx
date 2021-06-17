import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import ShowArray from './ShowArray'
import * as Sort from '../sortFunctions/sortFunctions'

export default function Homepage() {
    const [currentArray, setCurrentArray] = useState([]);

    useEffect(() => {
        setCurrentArray(Sort.randomArray())
    }, [])

    return (
        <div>
            <Navbar
                randomArray={()=>{setCurrentArray(Sort.randomArray(currentArray))}}
                selectionSort={()=>{setCurrentArray(Sort.selectionSort(currentArray))}}
                bubbleSort={()=>{setCurrentArray(Sort.bubbleSort(currentArray))}}
                insertionSort={()=>{setCurrentArray(Sort.insertionSort(currentArray))}}
                mergeSort={()=>{setCurrentArray(Sort.mergeSort(currentArray))}}
                quickSort={()=>{setCurrentArray(Sort.quickSort(currentArray))}}
                heapSort={()=>{setCurrentArray(Sort.heapSort(currentArray))}}
                countingSort={()=>{setCurrentArray(Sort.countingSort(currentArray))}}
                radixSort={()=>{setCurrentArray(Sort.radixSort(currentArray))}}
                bucketSort={()=>{setCurrentArray(Sort.bucketSort(currentArray))}}
            />
            <ShowArray array={currentArray} />
        </div>
    )
}
