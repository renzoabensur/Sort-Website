import React from 'react'

export default function Navbar(props) {
    return (
        <div>
            <button type="button" className="btn btn-primary" onClick={props.randomArray}>Create random array</button>
            <button type="button" className="btn btn-primary" onClick={props.selectionSort}>Selection Sort</button>
            <button type="button" className="btn btn-primary" onClick={props.bubbleSort}>Bubble Sort</button>
            <button type="button" className="btn btn-primary" onClick={props.insertionSort}>Insertion Sort</button>
            <button type="button" className="btn btn-primary" onClick={props.mergeSort}>Merge Sort</button>
            <button type="button" className="btn btn-primary" onClick={props.quickSort}>Quick Sort</button>
            <button type="button" className="btn btn-primary" onClick={props.heapSort}>Heap Sort</button>
            <button type="button" className="btn btn-primary" onClick={props.countingSort}>Counting Sort</button>
            <button type="button" className="btn btn-primary" onClick={props.radixSort}>Radix Sort</button>
            <button type="button" className="btn btn-primary" onClick={props.bucketSort}>Bucket Sort</button>
        </div>
    )
}
