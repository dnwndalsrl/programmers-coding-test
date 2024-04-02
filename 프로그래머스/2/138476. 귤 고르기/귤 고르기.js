function solution(k, tangerine) {
    let result = 0;
    const processObj = tangerine.reduce((acc, value) => {
        if (acc[value]) {
            acc[value] += 1;
        } else {
            acc[value] = 1;
        }
        return acc;
    }, {});
    const sortedEntries = Object.entries(processObj).sort((a, b) => b[1] - a[1]);
    for(let i = 0; i < sortedEntries.length; i++) {
        if(k <= 0) break;
        k -= sortedEntries[i][1];
        result += 1;
    }  
    return result
}