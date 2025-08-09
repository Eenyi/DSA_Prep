export class SelectionSort {
    ascending(arr: number[]): number[] {
        for (let i = 0; i < arr.length - 1; i++) {
            let smallest = i;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[smallest]! > arr[j]!) {
                    smallest = j;
                }
            }
            [arr[smallest], arr[i]] = [arr[i]!, arr[smallest]!];
        }
        return arr;
    }
    descending(arr: number[]): number[] {
        for (let i = 0; i < arr.length - 1; i++) {
            let smallest = i;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[smallest]! < arr[j]!) {
                    smallest = j;
                }
            }
            [arr[smallest], arr[i]] = [arr[i]!, arr[smallest]!];
        }
        return arr;
    }
    print(arr: number[]): void {
        console.log(arr.join(", "));
    }
}