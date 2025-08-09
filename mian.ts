import { BubbleSort } from './bubbleSort';
import { SelectionSort } from './selectionSort';
import { InsertionSort } from './insertionSort';

const sorter = new InsertionSort();
const numbers = [5, 2, 9, 1, 5, 6];

console.log("Orignal Array:");
sorter.print(numbers)

sorter.ascending(numbers);
console.log("Bubble Sort Ascending:");
sorter.print(numbers);

sorter.descending(numbers);
console.log("Bubble Sort Descending:");
sorter.print(numbers);
