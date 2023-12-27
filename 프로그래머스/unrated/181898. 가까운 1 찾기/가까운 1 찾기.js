function solution(arr, idx) {
    return arr.findIndex((element, index) => {
        if (index >= idx) {
            return element === 1
        }
    })
}