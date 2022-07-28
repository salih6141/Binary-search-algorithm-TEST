let numbers: Array<number>;
numbers = [1];

let target: number = 1;
let location: number = 0;

let minArray = 0;
let maxArray = numbers.length - 1;
while(target != numbers[location]) {
    let midArray = Math.floor((minArray + maxArray)/2);
    if(target === numbers[midArray]){
        location = midArray;
        console.log(location)
    };
    if(target > numbers[midArray]){
        minArray = midArray + 1;
        console.log("verandering minimum waarde" + minArray)
    }
    else if (target < numbers[midArray]){
        maxArray = midArray - 1; 
        console.log("verandering max waarde" + maxArray)
    }
}

export{}