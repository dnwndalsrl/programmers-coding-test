function solution(n) {
    let result = 0
    let t1 = 0
    let t2 = 1
    for(let i = 2 ; i <= n + 1 ; i++) {
        result = t1 + t2 % 1234567;
        t1 = t2;
        t2 = result;
    }
    return result % 1234567;
}