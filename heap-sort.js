function swap(firstIndex, secondIndex) {
  let tmp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = tmp;
}
function getLeftChildIndex(parentIndex) { return parentIndex * 2 + 1;}
function getRightChildIndex(parentIndex) { return parentIndex * 2 + 2;}
function getParentIndex(childIndex) { return Number.parseInt((childIndex - 1) / 2);}
function getParent(index) { return arr[getParentIndex(index)];}
function getLeftChild(index) { return arr[getLeftChildIndex(index)];}
function getRightChild(index) { return arr[getRightChildIndex(index)];}
function hasParent(index) { return getParentIndex(index) >= 0;}
function hasLeftChild(index) { return getLeftChildIndex(index) < arr.length;}
function hasRightChild(index) { return getRightChildIndex(index) < arr.length;}

function heapifyUp() {
  let index = arr.length - 1;
  while (hasParent(index) && getParent(index) > arr[index]) {
    swap(getParentIndex(index), index);
    index = getParentIndex(index);
  }
}
function heapifyDown() {
  let index = 0;
  while (hasLeftChild(index)) {
    let smallerChildIndex = getLeftChildIndex(index); 
    if (hasRightChild(index) && getRightChild(index) < getLeftChild(index)) {
      smallerChildIndex = getRightChildIndex(index);
    }
    if (arr[index] < arr[smallerChildIndex]) { break; } 
    else { swap(index, smallerChildIndex); }
    index = smallerChildIndex;
  }
}
function heapSort() {
  heapifyUp();
  //heapifyDown();
  console.log(arr);
}

let arr = [4,10,3,5,1];
heapSort();
