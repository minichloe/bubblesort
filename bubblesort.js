// function bubbleSort (arr) {
// 	let newArr = arr.slice();
// 	let sorted = false;
// 	while (!sorted) {
// 		let copy;
// 		sorted = true;
// 		for (let i = 0; i < newArr.length-1; i++) {
// 			if (newArr[i] > newArr[i+1]) {
// 					copy = newArr[i];
// 					newArr[i] = newArr[i+1];
// 					newArr[i+1] = copy;
// 					sorted = false;
// 			}	
// 		}
// 	}

// 	return newArr;
// }

// function bubbleSort (arr) {
// 	if (!arr.length) return arr;
// 	let newArr = arr.slice();
// 	let copy;
// 	let counter = 0;
// 	let sorted = false;
// 	for (let i = 0; i < newArr.length-1; i++) {
// 		if (newArr[i] > newArr[i+1]) {
// 			copy = newArr[i];
// 			newArr[i] = newArr[i+1];
// 			newArr[i+1] = copy;
// 			counter++
// 		}
// 	}
// 	if (counter === 0) sorted = true;
// 	return sorted ? newArr : bubbleSort(newArr);
// }

function bubbleSort(arr) {
    return arr.sort((a, b) => {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    })
}