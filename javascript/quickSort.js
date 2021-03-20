var count = 0;

function quickSort(arr, low, height) {
    count++;
    if (low >= height) {
        return;
    }
    let left = low;
    let right = height;
    let pivot = arr[Math.floor((low + height) / 2)];

    while (left <= right) {

        while (left < right && Number(arr[left] + pivot) > Number(pivot + arr[left])) {
            left++;
        }

        while (left < right && Number(arr[right] + pivot) < Number(pivot + arr[right])) {
            right--;
        }

        if (left <= right) {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }
    console.log('count:', count, left, right);
    quickSort(arr, low, right);
    quickSort(arr, left, height);

}
// let arr = ['9', '532', '40', '36', '3'];
let arr = ['132', '3', '40', '30', '9'];

quickSort(arr, 0, arr.length - 1)

console.log(arr[5]);
console.log(arr)
