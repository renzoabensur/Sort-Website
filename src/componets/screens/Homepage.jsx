import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import ShowArray from './ShowArray'
import * as Sort from '../sortFunctions/sortFunctions'

export default function Homepage() {
    const [currentArray, setCurrentArray] = useState([]);

    useEffect(() => {
        setCurrentArray(Sort.randomArray())
    }, [])

    const sleep = (milliseconds) => {
        return new Promise((resolve) => setTimeout(resolve, milliseconds));
    };

    async function selectionSort(currentArray) {
        var selectArray = currentArray
        //Select sort
        for (var i = 0; i < selectArray.length; i++) {
            var temp = selectArray[i]
            var tempPosition = i
            for (var j = i + 1; j < selectArray.length; j++) {
                if (temp > selectArray[j]) {
                    tempPosition = j
                    temp = selectArray[j]
                }
            }
            setCurrentArray([...currentArray, selectArray])
            await sleep(20)
            selectArray[tempPosition] = selectArray[i]
            selectArray[i] = temp
        }
    }

    async function bubbleSort(currentArray) {
        var bubbleArray = currentArray
        //Bubble sort
        do {
            var trocas = 0
            for (var i = 0; i < bubbleArray.length; i++) {
                if (bubbleArray[i + 1] < bubbleArray[i]) {
                    var temp = bubbleArray[i]
                    bubbleArray[i] = bubbleArray[i + 1]
                    bubbleArray[i + 1] = temp
                    console.log(bubbleArray)
                    trocas += 1
                }
                setCurrentArray([...currentArray, bubbleArray])
                await sleep(1)
            }
        } while (trocas !== 0)
    }

    async function insertionSort(currentArray) {
        var insertionArray = currentArray
        //Insertion sort
        for (var i = 1; i < insertionArray.length; i++) {
            console.log(insertionArray)
            var eleito = insertionArray[i]
            var j = i - 1
            while (j >= 0 && eleito < insertionArray[j]) {
                insertionArray[j + 1] = insertionArray[j]
                j--
                setCurrentArray([...currentArray, insertionArray])
                await sleep(20)
            }
            insertionArray[j + 1] = eleito
        }

        console.log(currentArray)
    }

    // async function mergeSort(currentArray) {
    //     var mergeArray = currentArray
    //     // Merge sort
    //     async function merge(a) {
    //         if (a.length === 1) return a

    //         var l1 = []
    //         var l2 = []

    //         var half = Math.trunc(a.length / 2)
    //         for (var i = 0; i < half; i++) {
    //             l1.push(a[i])
    //         }
    //         for (i = half; i < a.length; i++) {
    //             l2.push(a[i])
    //         }
    //         l1 = await merge(l1)
    //         l2 = await merge(l2)

    //         // await sleep(20)
    //         return await join(l1, l2)
    //     }

    //     async function join(a, b) {
    //         var l3 = []

    //         while (a.length > 0 && b.length > 0) {
    //             if (a[0] > b[0]) {
    //                 l3.push(b[0])
    //                 b.shift()
    //             } else {
    //                 l3.push(a[0])
    //                 a.shift()
    //             }
    //         }
    //         while (a.length > 0) {
    //             l3.push(a[0])
    //             a.shift()
    //         }
    //         while (b.length > 0) {
    //             l3.push(b[0])
    //             b.shift()
    //         }
    //         setCurrentArray(l3)
    //         await sleep(500)
    //         console.log(l3)
    //         return l3
    //     }
    //     merge(mergeArray)
    // }

    function quickSort(currentArray) {
        var quickArray = currentArray
        // Quick sort 
        async function quick(array, ArrayInic, ArrayFinal) {
            var i = ArrayInic
            var j = ArrayFinal
            var pivo = array[Math.trunc((ArrayInic + ArrayFinal) / 2)]
            var temp = 0

            while (i <= j) {
                while (array[i] < pivo) {
                    i++
                }
                while (array[j] > pivo) {
                    j--
                }
                if (i <= j) {
                    temp = array[i]
                    array[i] = array[j]
                    array[j] = temp
                    i++
                    j--
                }
            }
            setCurrentArray([...currentArray, array])
            await sleep(500)
            if (ArrayInic < j) {
                quick(quickArray, ArrayInic, j)
            }
            if (ArrayFinal > i) {
                quick(quickArray, i, ArrayFinal)
            }
        }
        console.log(currentArray)
        quick(quickArray, 0, quickArray.length - 1)
        console.log(quickArray)
    }

    return (
        <div>
            <Navbar
                randomArray={() => { setCurrentArray(Sort.randomArray(currentArray)) }}
                selectionSort={() => { selectionSort(currentArray) }}
                bubbleSort={() => { bubbleSort(currentArray) }}
                insertionSort={() => { insertionSort(currentArray) }}
                quickSort={() => { quickSort(currentArray) }}
                // mergeSort={() => { mergeSort(currentArray) }}
                // heapSort={() => { heapSort(currentArray) }}
                // countingSort={() => { countingSort(currentArray) }}
                // radixSort={() => { radixSort(currentArray) }}
                // bucketSort={() => { bucketSort(currentArray) }}
                reset={() => { window.location.reload() }}
            />
            <ShowArray array={currentArray} />
        </div>
    )
}
