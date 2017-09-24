function swap(arr, firstIndex, secondIndex) {
  let targetArr = JSON.parse(JSON.stringify(arr));
  let tmp = targetArr[firstIndex];
  targetArr[firstIndex] = targetArr[secondIndex];
  targetArr[secondIndex] = tmp;
  return targetArr;
}
function heapify(arr, n, i) {
  let largest = i; // init as root
  const leftChild = 2 * i + 1, rightChild = 2 * i + 2;
  let targetArr = JSON.parse(JSON.stringify(arr));

  if (leftChild < n && arr[leftChild] > arr[largest]) largest = leftChild;
  if (rightChild < n && arr[rightChild] > arr[largest]) largest = rightChild;

  if (largest !== i) {
    targetArr = swap(targetArr, i, largest); 
    targetArr = heapify(targetArr, n, largest);
  }

  return targetArr;
  
}
function heapSort(arr, n) {
  let targetArr = JSON.parse(JSON.stringify(arr));
  for(let i = 0; i < n; i++) targetArr = heapify(targetArr, n, i);

  for(let i = n - 1; i >= 0; i--) {
    const FIRST = 0, LAST = i;
    targetArr = swap(targetArr, FIRST, LAST);
    targetArr = heapify(targetArr, i, 0);
  }
  return targetArr;
}

let arr = [4,10,3,5,1];
const n = 5;
console.log('result', heapSort(arr, n));
