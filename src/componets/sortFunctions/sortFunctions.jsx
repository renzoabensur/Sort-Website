//max 180
const arrayMaxLength = 7

export function randomArray() {
    let randomArray = []
    while (randomArray.length < arrayMaxLength) {
        randomArray.push(Math.floor(Math.random() * 100))
    }
    return randomArray
};

export function selectionSort(currentArray) {
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
    return (selectArray)
}

export function bubbleSort(currentArray) {
    var bubbleArray = []
    for (var i = 0; i < arrayMaxLength; i++) {
        bubbleArray.push(currentArray[i])
    }
    //Bubble sort
    do {
        var trocas = 0
        for (i = 0; i < bubbleArray.length; i++) {
            if (bubbleArray[i + 1] < bubbleArray[i]) {
                var temp = bubbleArray[i]
                bubbleArray[i] = bubbleArray[i + 1]
                bubbleArray[i + 1] = temp
                console.log(bubbleArray)
                trocas += 1
            }
        }
    } while (trocas !== 0)

    console.log(currentArray)
    return (bubbleArray)
}

export function insertionSort(currentArray) {
    var insertionArray = []
    for (var i = 0; i < arrayMaxLength; i++) {
        insertionArray.push(currentArray[i])
    }
    //Insertion sort
    for (i = 1; i < insertionArray.length; i++) {
        console.log(insertionArray)
        var eleito = insertionArray[i]
        var j = i - 1
        while (j >= 0 && eleito < insertionArray[j]) {
            insertionArray[j + 1] = insertionArray[j]
            j--
        }
        insertionArray[j + 1] = eleito
    }

    console.log(currentArray)
    return (insertionArray)
}

export function mergeSort(currentArray) {
    var mergeArray = []
    for (var i = 0; i < arrayMaxLength; i++) {
        mergeArray.push(currentArray[i])
    }
    // Merge sort
    function merge(a) {
        if (a.length === 1) return a

        var l1 = []
        var l2 = []

        var half = Math.trunc(a.length / 2)
        for (i = 0; i < half; i++) {
            l1.push(a[i])
        }
        for (i = half; i < a.length; i++) {
            l2.push(a[i])
        }
        l1 = merge(l1)
        l2 = merge(l2)

        return join(l1, l2)
    }

    function join(a, b) {
        var l3 = []

        while (a.length > 0 && b.length > 0) {
            if (a[0] > b[0]) {
                l3.push(b[0])
                b.shift()
            } else {
                l3.push(a[0])
                a.shift()
            }
        }
        while (a.length > 0) {
            l3.push(a[0])
            a.shift()
        }
        while (b.length > 0) {
            l3.push(b[0])
            b.shift()
        }

        return l3
    }

    mergeArray = merge(mergeArray)
    console.log(mergeArray)
    return (mergeArray)
}

export function quickSort(currentArray) {
    var quickArray = []
    for (var i = 0; i < arrayMaxLength; i++) {
        quickArray.push(currentArray[i])
    }
    // Quick sort (entender melhor)
    function quick(array, ArrayInic, ArrayFinal) {
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
    return (quickArray)
}

export function heapSort(currentArray) {
    var heapArray = []
    for (var i = 0; i < arrayMaxLength; i++) {
        heapArray.push(currentArray[i])
    }
    console.log(heapArray)

    // Heap sort (entender melhor)
    function sort( arr)
    {
        var n = arr.length;
 
        // Build heap (rearrange array)
        for (var i = n / 2 - 1; i >= 0; i--)
            heapify(arr, n, i);
 
        // One by one extract an element from heap
        for (var i = n - 1; i > 0; i--) {
            // Move current root to end
            var temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;
 
            // call max heapify on the reduced heap
            heapify(arr, i, 0);
        }
    }
 
    // To heapify a subtree rooted with node i which is
    // an index in arr[]. n is size of heap
    function heapify(arr, n, i)
    {
        var largest = i; // Initialize largest as root
        var l = 2 * i + 1; // left = 2*i + 1
        var r = 2 * i + 2; // right = 2*i + 2
 
        // If left child is larger than root
        if (l < n && arr[l] > arr[largest])
            largest = l;
 
        // If right child is larger than largest so far
        if (r < n && arr[r] > arr[largest])
            largest = r;
 
        // If largest is not root
        if (largest != i) {
            var swap = arr[i];
            arr[i] = arr[largest];
            arr[largest] = swap;
 
            // Recursively heapify the affected sub-tree
            heapify(arr, n, largest);
        }
    }
    sort(heapArray);
    console.log(heapArray)
    return heapArray
}

export function countingSort(currentArray) {

}

export function radixSort(currentArray) {

}

export function bucketSort(currentArray) {

}