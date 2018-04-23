function split (arr) {
    const middle = Math.floor(arr.length/2);
    console.log(arr);
    return [arr.slice(0,middle),arr.slice(middle)];
}

function merge (arr){
    const newArr = [];
    console.log(arr);
    let left = 0;
    let right = 0;
    while (left < arr[0].length && right < arr[1].length) {
        if (arr[0][left] < arr[1][right]) {
            newArr.push(arr[0][left]);
            left++
        } else {
            newArr.push(arr[1][right]);
            right++
        }
    }
    return [...newArr, ...arr[0].slice(left), ...arr[1].slice(right)];
}

function mergeSort (arr) {
    if (arr.length <= 1) return arr;
    else {
        let splitted = split(arr);
        let left = splitted[0];
        let right = splitted[1];
        // let mergedLeft = mergeSort(left);
        // let mergedRight = mergeSort(right);
        return merge([mergeSort(left), mergeSort(right)]);

    }
}

// const split = (array) => {
//     const middle = Math.floor(array.length / 2);
//     return [array.slice(0, middle), array.slice(middle)];
// };

// const merge = (left, right) => {
//     const newArr = [];
//     let leftIndex = 0;
//     let rightIndex = 0;
//     while (leftIndex < left.length && rightIndex < right.length) {
//         if (left[leftIndex] < right[rightIndex]) {
//             newArr.push(left[leftIndex]);
//             leftIndex++;
//         } else {
//             newArr.push(right[rightIndex]);
//             rightIndex++;
//         }
//     }

//     return [...newArr, ...left.slice(leftIndex), ...right.slice(rightIndex)];
// };

// const mergeSort = (array) => {
//     if (array.length === 1 || array.length === 0) {
//         return array;
//     }
//     let splitted = split(array);
//     return merge(mergeSort(splitted[0]), mergeSort(splitted[1]));
// };