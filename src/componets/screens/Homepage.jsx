import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import ShowArray from './ShowArray'

//max 180
const arrayMaxLength = 180

export default function Homepage() {
    const [currentArray, setCurrentArray] = useState([]);

    useEffect(() => {
        randomArray()
    }, [])

    function randomArray() {
        let randomArray = []
        while (randomArray.length < arrayMaxLength) {
            randomArray.push(Math.floor(Math.random() * 100))
        }
        setCurrentArray(randomArray)
    };

    function selectionSort() {
        var selectArray = []
        for (var i = 0; i < arrayMaxLength; i++) {
            selectArray.push(currentArray[i])
        }
        //Select sort
        for (i = 0; i < selectArray.length; i++) {
            var temp = selectArray[i]
            var tempPosition = i
            for (var j = i + 1; j < selectArray.length; j++) {
                if (temp > selectArray[j]) {
                    tempPosition = j
                    temp = selectArray[j]
                }
            }
            selectArray[tempPosition] = selectArray[i]
            selectArray[i] = temp
        }
        setCurrentArray(selectArray)   
    }

    function bubbleSort() {
        var bubbleArray = []
        for (var i = 0; i < arrayMaxLength; i++) {
            bubbleArray.push(currentArray[i])
        }
        //Bubble sort
        do {
            var trocas = 0
            for (i = 0; i < bubbleArray.length; i++) {
                if (bubbleArray[i+1] < bubbleArray[i]) {
                    var temp = bubbleArray[i]
                    bubbleArray[i] = bubbleArray[i+1]
                    bubbleArray[i+1] = temp 
                    console.log(bubbleArray)
                    trocas += 1
                }
            }
        } while(trocas !== 0)

        setCurrentArray(bubbleArray)  

        console.log(currentArray)
    }

    function insertionSort() {
        var insertionArray = []
        for (var i = 0; i < arrayMaxLength; i++) {
            insertionArray.push(currentArray[i])
        }
        //Insertion sort
        for(i = 1; i < insertionArray.length; i++) {
            console.log(insertionArray)
            var eleito = insertionArray[i]
            var j = i-1
            while(j >= 0 && eleito < insertionArray[j]){
                insertionArray[j+1] = insertionArray[j] 
                j--
            }
            insertionArray[j+1] = eleito
        } 

        setCurrentArray(insertionArray)  

        console.log(currentArray)
    }

    function mergeSort() {
        var mergeArray = []
        for (var i = 0; i < arrayMaxLength; i++) {
            mergeArray.push(currentArray[i])
        }
        // Merge sort
        function merge(a){
            if(a.length === 1) return a

            var l1 = []
            var l2 = []

            var half = Math.trunc(a.length/2)
            for(i = 0; i < half ; i++ ){
                l1.push(a[i])
            }
            for(i = half; i < a.length; i++ ){
                l2.push(a[i])
            }
            l1 = merge(l1)
            l2 = merge(l2)

           return join(l1,l2)     
        }

        function join(a, b){
            var l3 = []

            while(a.length > 0 && b.length > 0){
                if(a[0] > b[0]){
                    l3.push(b[0])
                    b.shift()
                } else{
                    l3.push(a[0])
                    a.shift()
                }
            }
            while(a.length > 0){
                l3.push(a[0])
                a.shift()
            }
            while(b.length > 0){
                l3.push(b[0])
                b.shift()
            }

            return l3
        }

        mergeArray = merge(mergeArray)
        setCurrentArray(mergeArray)  
        console.log(mergeArray)
    }

    function quickSort() {
        var quickArray = []
        for (var i = 0; i < arrayMaxLength; i++) {
            quickArray.push(currentArray[i])
        }
        // Quick sort (entender melhor)
        function quick(array, ArrayInic, ArrayFinal){
            var i = ArrayInic
            var j = ArrayFinal
            var pivo = array[Math.trunc((ArrayInic + ArrayFinal)/2)]
            var temp = 0
            
            while( i <= j){
                while(array[i] < pivo){
                    i ++
                }
                while(array[j] > pivo){
                    j--
                }
                if(i <= j){
                    temp = array[i]
                    array[i] = array[j]
                    array[j] = temp
                    i++
                    j--
                }
            }
            if(ArrayInic < j){
                quick(quickArray, ArrayInic, j)
            }
            if(ArrayFinal > i){
                quick(quickArray, i, ArrayFinal )
            }
        }
        console.log(currentArray)
        quick(quickArray, 0, quickArray.length-1)
        setCurrentArray(quickArray)  
        console.log(quickArray)
    }

    function heapSort() {

    }

    function countingSort() {

    }

    function radixSort() {

    }

    function bucketSort() {

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
            <ShowArray array={currentArray} />
        </div>
    )
}
