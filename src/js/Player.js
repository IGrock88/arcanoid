

export default class Player {


    constructor(props){
        this.coordX = props.coordX;
        this.coordY = props.coordY;
        this.width = props.width;
        this.height = props.height;
        this.color = props.color;
    }


    respawn = (ctx) => {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.coordX, this.coordY, this.width, this.height);
        console.log('Player respawn');
    };
}