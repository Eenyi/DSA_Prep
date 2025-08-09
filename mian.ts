import { BubbleSort } from './bubbleSort';

const sorter = new BubbleSort();
const numbers = [5, 2, 9, 1, 5, 6];

sorter.ascending(numbers);
console.log("Ascending:");
sorter.print(numbers);

sorter.descending(numbers);
console.log("Descending:");
sorter.print(numbers);
