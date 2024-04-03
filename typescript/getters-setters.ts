
//why no arrow function on _setColor?


class Egg0 {

    private color: string;

    private _setColor = (color: string): void  => {
        this.color = color; }

    public getColor(): string {
        return this.color
    }

    public setColor(color: string): string {
        this._setColor(color);
        //        this.color = color;
        return this.color;
    }

    public constructor(color : string) {
        this.color = color;
    }
}

let egg = new Egg0('blue');
let foo : number = 2;
