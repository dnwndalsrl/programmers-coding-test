function solution(arr, n) {
    let isEven = arr.length % 2 === 0 ? true : false
    let result = []
    arr.forEach((element1, index) => {
        // 짝수일경우 모든 홀수 인덱스에 n을 더한 배열
        if (isEven) {
            if (index % 2 === 0) {
                result.push(element1)
            } else {
                result.push(element1 + n)
            }
        } else {
            if (index % 2 === 0) {
                result.push(element1 + n)
            } else {
                result.push(element1)
            }
        }
    })
    return result
}