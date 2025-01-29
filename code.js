function quicksort(array) {
    if (array.length <= 1) {
        return array; // No sorting needed for arrays of size 0 or 1
    }
    const stack = [[0, array.length - 1]]; // Stack to hold subarray indices [start, end]
    while (stack.length > 0) {
        //console.log(`Stack content: ${stack.map(([start, end]) => `[Start: ${start}, End: ${end}]`).join(', ')}`);
        const [start, end] = stack.pop();
        if (start >= end) continue;

        const pivotIndex = partition(array, start, end);

        // Push the indices of subarrays to the stack
        stack.push([start, pivotIndex - 1]); // Left subarray
        stack.push([pivotIndex + 1, end]);  // Right subarray
    }
    return array;
}

function partition(array, start, end) {
    const pivot = array[end]; // Choose the last element as the pivot
    let i = start - 1; // Index of the smaller element
    for (let j = start; j < end; j++) {
        if (array[j] <= pivot) {
            i++;
            [array[i], array[j]] = [array[j], array[i]]; // Swap elements
            //console.log(array);
        }
    }
    // Place the pivot in its correct position
    [array[i + 1], array[end]] = [array[end], array[i + 1]];
    return i + 1; // Return the index of the pivot
}

//const unsortedArray = [5, 3, 7, 2, 8, 1, 4, 6];
//const sortedArray = quicksort(unsortedArray);
//console.log(sortedArray); // [1, 2, 3, 4, 5, 6, 7, 8]
