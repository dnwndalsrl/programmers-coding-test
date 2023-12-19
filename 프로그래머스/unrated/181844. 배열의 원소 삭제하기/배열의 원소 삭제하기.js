function solution(arr, delete_list) {
    return arr.filter(element1 => !delete_list.includes(element1));
}