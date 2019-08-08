



export default class Ball {


    constructor(props){

        this.coordX = props.coordX;
        this.coordY = props.coordY;
        this.direction = props.direction;
        this.radius = props.radius;
        this.speed = props.speed;



    }

    move = () => {
        if (!this.coordX || !this.coordY || !this.direction){
            console.log('coord or direction in not exist');
            return;
        }


    };

    calculateNewCoords = () => {
        
    };

    render = (ctx) => {
        ctx.beginPath();
        ctx.arc(this.coordX, this.coordY, this.radius, 0, 2*Math.PI, false);
        ctx.fill();
    }

}