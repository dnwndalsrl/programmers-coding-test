function solution(arr1, arr2) {
    const arr1Length = arr1.length
    const arr2Length = arr2.length
    
    if (arr1Length > arr2Length) return 1
    if (arr1Length < arr2Length) return -1
    if (arr1Length === arr2Length) {
        const arr1Total = arr1.reduce((accumulator, currentValue) => {
          return accumulator + currentValue
        }, 0);
        const arr2Total = arr2.reduce((accumulator, currentValue) => {
          return accumulator + currentValue
        }, 0);
        if (arr1Total > arr2Total) return 1
        if (arr1Total < arr2Total) return -1
        if (arr1Total === arr2Total) return 0
    }
}