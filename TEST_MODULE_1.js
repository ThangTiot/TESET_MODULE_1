let array = [1, 3, 9, 9, 9, 9, 2, 3, 8];

///Câu 1
function findMax(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function task1() {
    let max = findMax(array);
    alert("Gia tri lon nhat la: " + max);
}

///CÂU 2
function tryRemoveFromArray(arr, num) {
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== num) {
            arr1.push(arr[i]);
        }
    }
    if (arr1.length === 0) {
        return arr;
    } else {
        return arr1;
    }
}

function task2() {
    let number = 9;
    let result = tryRemoveFromArray(array, number);
    alert("Ket qua mang tra ve la: " + result);
}

///CÂU 3
function isFibonacci(num) {
    let a = 1;
    let b = 1;
    let c;
    do {
        c = a + b;
        a = b;
        b = c;
    } while (c < num)
    if (num === 1 || c === num) {
        return true;
    } else {
        return false;
    }
}

function task3() {
    let number = +prompt("Nhap vao so muon kiem tra: ");
    let result = isFibonacci(number);
    alert("So do co thuoc day Fibo khong: " + result);
}

///CÂU 4
class Circle {
    x;
    y;
    radius;
    color;

    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }

    render(canvas) {
        canvas.beginPath();
        canvas.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        canvas.fillStyle = this.color;
        canvas.fill();
    }
}

function task4() {
    let circle = new Circle(10, 10, 100, "#000000");
    let canvas = document.getElementById("canvas").getContext("2d");
    circle.render(canvas);
}
