

export default class Player {


    constructor(props){
        this.coordX = props.coordX;
        this.coordY = props.coordY;
        this.width = props.width;
        this.height = props.height;
        this.color = props.color;

    }


    getMouseXCoord = (event) => {

        let rect = event.target.getBoundingClientRect();
        return Math.abs(Math.ceil(event.clientX - rect.left));
    };

    move = (e) => {

            this.coordX = this.getMouseXCoord(e) - this.width / 2;
            console.log(this.coordX);
    };

    render = (ctx) => {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.coordX, this.coordY, this.width, this.height);
    }


}