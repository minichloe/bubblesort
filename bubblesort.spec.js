describe('Bubble Sort', () => {
    let testArr, newArray;

    beforeEach(() => {
        testArr = [4, 2, 12, 5, 6, 7, 1];
        newArray = bubbleSort(testArr);
    })

    it('handles and empty array', () => {
        expect(bubbleSort([])).toEqual([])
    })

    it('sorts given array in ascending order', () => {
        expect(bubbleSort(testArr)).toEqual([1, 2, 4, 5, 6, 7, 12])
    })

    it('returns a new array and does not mutate original array', () => {
        expect(newArray).toEqual([1, 2, 4, 5, 6, 7, 12])
        expect(testArr).toEqual(testArr)
    })

    it('keeps the original length of the array', () => {
        expect(newArray.length).toEqual(7)
    })

    it('does not do anything to a sorted array', () => {
        expect(bubbleSort(newArray)).toEqual([1, 2, 4, 5, 6, 7, 12])
    })

    // it(' calls itself recursively', () => {
    //     spyOn(window, 'bubbleSort').and.callThrough();
    //     bubbleSort(testArr);
    //     expect(bubbleSort.calls.count()).toEqual(7)
    // })
})

// [4,2,12,5,6,7,1];
// [2,4,5,6,7,1,12];
// [2,4,5,6,1,7,12];
// [2,4,5,1,6,7,12];
// [2,4,1,5,6,7,12];
// [2,]