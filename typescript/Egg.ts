
class EggO {
    
    private color   :string
    private size    :string
    private weight  :number

    constructor (color :string = 'orange') {
        this.color = color
    }

//interface = all public functions
    public getColor = () => this.color
    public setColor = (color :string) => this.changeColor(color)

    private changeColor = (color :string) => this.color = color.toUpperCase()
    
}

let eggO = new EggO('red')
let egg1 = new EggO()

eggO.color = 'blue'
//eggO.setColor('orange')
//eggO.changeColor('green')

console.log(`Color: ${eggO.getColor()}`)
console.log(`Color: ${egg1.getColor()}`)
