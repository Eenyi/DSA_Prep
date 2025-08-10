export class QuickSort {
    ascending(array: number[], start: number, end: number): number[] {
        if (start < end) {
            let pivot: number = this.partition(array, start, end)
            this.ascending(array, start, pivot - 1);
            this.ascending(array, pivot + 1, end);
        }
        return array;
    }
    partition(array: number[], start: number, end: number): number {
        let pivot: number = array[end]!,
        index = start - 1;
        for (let j = start; j < end; j++) {
            if (pivot! >= array[j]!) {
                index++;
                [array[j], array[index]] = [array[index]!, array[j]!]
            }            
        }
        index++;
        [array[end], array[index]] = [array[index]!, array[end]!]
        return index;
    }
    print(arr: number[]): void {
        console.log(arr.join(", "));
    }
}


