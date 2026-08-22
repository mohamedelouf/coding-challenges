function deleteNth(arr, n) {
    let result = [];
​
    for (let i = 0; i < arr.length; i++) {
        if (result.filter(num => num === arr[i]).length < n) {
            result.push(arr[i]);
        }
    }
​
    return result;
}