function solution(my_string) {
    return my_string.split(/\s+/).filter(space => space !== '');
}