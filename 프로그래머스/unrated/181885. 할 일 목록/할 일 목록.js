function solution(todo_list, finished) {
    return todo_list.filter((element, index) => !finished[index]);
}