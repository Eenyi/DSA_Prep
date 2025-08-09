export class InsertionSort {
    ascending(array: Number[]): Number[] {
        for (let i = 1; i < array.length; i++) {
            let current = array[i];
            let previous = i - 1;
            while (previous >=0 && array[previous]! > current!) {
                array[previous + 1] = array[previous]!;
                previous = previous - 1;                
            }
            array[previous + 1] = current!;
        }
        return array;
    }
    descending(array: Number[]): Number[] {
        for (let i = 1; i < array.length; i++) {
            let current = array[i];
            let previous = i - 1;
            while (previous >=0 && array[previous]! < current!) {
                array[previous + 1] = array[previous]!;
                previous = previous - 1;                
            }
            array[previous + 1] = current!;
        }
        return array;
    }
    print(arr: number[]): void {
        console.log(arr.join(", "));
    }
}