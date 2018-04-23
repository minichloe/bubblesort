describe('Split Array function', function () {
    let arr;

    beforeEach(() => {
        arr = [9,1,7,6,3,2,13,21,12];
    })

    it('is able to split an array into two halves', () => {
        expect(split(arr)).toEqual([[9,1,7,6],[3,2,13,21,12]]);
    });
});

describe('Merge function', () => {
    let arr, sorted;

    beforeEach(() => {
        arr = [9, 1, 7, 6, 3, 2, 13, 21, 12];
        sorted = [[1, 6, 7, 9], [2, 3, 12, 13, 21]]
    })

    it('is able to merge two sorted arrays into one sorted array', () => {
        expect(merge(sorted)).toEqual([1,2,3,6,7,9,12,13,21]);
    });
});

describe('MergeSort function', ()=>{
    let arr, sorted;

    beforeEach(() => {
        arr = [9, 1, 7, 6, 3, 2, 13, 21, 12];
        sorted = [[1, 6, 7, 9], [2, 3, 12, 13, 21]]
        // spyOn(window, 'merge').and.callThrough();
        // spyOn(window, 'split').and.callThrough();
    })

    it('is able to merge two sorted arrays into one sorted array', () => {
        expect(mergeSort(arr)).toEqual([1, 2, 3, 6, 7, 9, 12, 13, 21]);
    });
});
