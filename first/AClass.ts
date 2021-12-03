abstract class AClass {
    Numbers: number[] = [];
    n: number;

    constructor(n: number) {
        this.n = n;
        this.fill();
    }

    private fill() {
        for (let i = 0; i < this.n; i++) {
            const randomNubmer = Math.round(Math.random() * 10);
            this.Numbers.push(randomNubmer);
        }
    }

    protected factorial(arr: typeof this.Numbers) {
        let arrFact = [];

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 0 || arr[i] === 1) {
                arrFact.push(1);
            } else {
                for (let k = arr[i] - 1; k >= 1; k--) {
                    arr[i] *= k;
                }
                arrFact.push(arr[i]);
            }
        }

        return arrFact;
    }

    abstract sort(): number[];
}

class Class1 extends AClass {
    public sort() {
        this.Numbers = this.Numbers.sort();
        return this.factorial(this.Numbers);
    }
}

class Class2 extends AClass {
    public sort() {
        for (let i = 0; i < this.Numbers.length; i++) {
            for (let k = i; k < this.Numbers.length; k++) {
                if (this.Numbers[i] > this.Numbers[k]) {
                    let arr_i = this.Numbers[i];
                    this.Numbers[i] = this.Numbers[k];
                    this.Numbers[k] = arr_i;
                }
            }
        }

        return this.factorial(this.Numbers);
    }
}

const one = new Class1(7);
const two = new Class2(7);

console.log(one.sort());
console.log(two.sort());
