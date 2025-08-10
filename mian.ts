import { BubbleSort } from './bubbleSort';
import { SelectionSort } from './selectionSort';
import { InsertionSort } from './insertionSort';
import { QuickSort } from './quickSort';


const sorter = new QuickSort();
const numbers = [5, 2, 9, 1, 5, 6];

console.log("Orignal Array:");
sorter.print(numbers)

sorter.ascending(numbers, 0, 5);
console.log("Sort Ascending:");
sorter.print(numbers);

// sorter.descending(numbers, 0, 5);
// console.log("Sort Descending:");
// sorter.print(numbers);
