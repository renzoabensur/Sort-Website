import React from 'react'

export default function Navbar(props) {
    return (
        <div className="navbar">
            <button type="button" className="btn btn-second" onClick={props.randomArray}>Create random array</button>
            <button type="button" className="btn btn-primary teste" onClick={props.selectionSort}>SelectionSort</button>
            <button type="button" className="btn btn-primary" onClick={props.insertionSort}>InsertionSort</button>
            <button type="button" className="btn btn-primary" onClick={props.bubbleSort}>BubbleSort</button>
            <button type="button" className="btn btn-primary" onClick={props.quickSort}>QuickSort</button>
            <button type="button" className="btn btn-second" onClick={props.reset}>Reset</button>
            {/* <button type="button" className="btn btn-primary" onClick={props.mergeSort}>Merge Sort</button> */}
            {/* <button type="button" className="btn btn-primary" onClick={props.heapSort}>Heap Sort</button> */}
            {/* <button type="button" className="btn btn-primary" onClick={props.countingSort}>Counting Sort</button>
            <button type="button" className="btn btn-primary" onClick={props.radixSort}>Radix Sort</button>
            <button type="button" className="btn btn-primary" onClick={props.bucketSort}>Bucket Sort</button> */}
        </div>
    )
}

