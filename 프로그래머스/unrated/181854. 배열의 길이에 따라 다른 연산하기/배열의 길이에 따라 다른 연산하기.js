function solution(arr, n) {
    return arr.length % 2 == 0 
        ? arr.map((element,index) => index % 2 != 0 ? (element + n) : element)
        : arr.map((element,index) => index % 2 == 0 ? (element + n) : element)
}