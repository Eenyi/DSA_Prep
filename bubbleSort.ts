export class BubbleSort {
    ascending(arr: number[]): number[] {
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = 0; j < arr.length - i - 1; j++) {
                if (arr[j]! > arr[j + 1]!) {
                    [arr[j], arr[j + 1]] = [arr[j + 1]!, arr[j]!];
                }
            }
        }
        return arr;
    }

    descending(arr: number[]): number[] {
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = 0; j < arr.length - i - 1; j++) {
                if (arr[j]! < arr[j + 1]!) {
                    [arr[j], arr[j + 1]] = [arr[j + 1]!, arr[j]!];
                }
            }
        }
        return arr;
    }

    print(arr: number[]): void {
        console.log(arr.join(", "));
    }
}
