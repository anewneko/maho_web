export class LoginImf {
    firstKey: string
    secondKey: string

    constructor(firstKey: string = "", secondKey: string = "") {
        this.firstKey = firstKey;
        this.secondKey = secondKey;
    }

    reset = () => {
        this.firstKey = '';
        this.secondKey = '';
    }
}
