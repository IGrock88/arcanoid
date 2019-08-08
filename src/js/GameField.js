import {
    FIELD_WIDTH,
    FIELD_HEIGHT,
    RESPAWN_PLAYER_COORD_X,
    RESPAWN_PLAYER_COORD_Y,
    PLAYER_WIDTH,
    PLAYER_HEIGHT,
    PLAYER_COLOR, RESPAWN_BALL_COORD_X, RESPAWN_BALL_COORD_Y, BALL_SPEED, BALL_START_DIRECTION, BALL_RADIUS
} from "../config";
import Player from "./Player";
import Stats from "stats.js/src/Stats";
import Ball from "./Ball";



export default class GameField {


    constructor(rootElement){
        this.rootElement = rootElement;

        this.isStartGame = false;
    }

    initGame = () => {
        this.initStats();
        this.drawField();
        this.getContext();
        this.respawnPlayer();

    };

    drawField = () => {

        this.canvas = document.createElement(`canvas`);
        this.canvas.id = 'gameField';
        this.canvas.width = FIELD_WIDTH;
        this.canvas.height = FIELD_HEIGHT;
        this.rootElement.appendChild(this.canvas);

        let startButton = document.createElement('button');
        startButton.innerText = 'Start game';
        this.rootElement.appendChild(startButton);

        startButton.addEventListener('click', this.startGame);

        let stopButton = document.createElement('button');
        stopButton.innerText = 'Stop Game';
        this.rootElement.appendChild(stopButton);

        stopButton.addEventListener('click', this.stopGame);
        console.log('draw field complete');
    };

    getContext = () => {
        if (!this.canvas){
            console.log('canvas is not exist');
            return;
        }

        if (this.ctx){
            console.log('context already exist');
            return;
        }
        this.ctx = this.canvas.getContext('2d');
        console.log('context is receive');
    };

    respawnPlayer = () => {

        this.player = new Player({
            coordX: RESPAWN_PLAYER_COORD_X,
            coordY: RESPAWN_PLAYER_COORD_Y,
            width: PLAYER_WIDTH,
            height: PLAYER_HEIGHT,
            color: PLAYER_COLOR
        });

        this.player.render(this.ctx);

        this.canvas.addEventListener('mousemove', (e) => {
            this.player.move(e);
        });
    };

    respawnBall = () => {

        this.ball = new Ball({
            coordX: RESPAWN_BALL_COORD_X,
            coordY: RESPAWN_BALL_COORD_Y,
            speed: BALL_SPEED,
            direction: BALL_START_DIRECTION,
            radius: BALL_RADIUS
        });

        this.ball.render(this.ctx);
    };

    render = () => {




        if (this.isStartGame){
            console.log('frame');

            this.stats.begin();



            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.player.render(this.ctx);




            this.stats.end();
            requestAnimationFrame(this.render);
        }
        else{
            return;
        }

    };


    startGame = () => {
        console.log('start game');
        this.isStartGame = true;
        this.animation = requestAnimationFrame(this.render);
    };

    stopGame = () => {
        console.log('stop game');
        this.isStartGame = false;
        cancelAnimationFrame(this.animation);
    };

    initStats =() => {
        this.stats = new Stats();
        this.stats.showPanel( 0 ); // 0: fps, 1: ms, 2: mb, 3+: custom
        document.body.appendChild( this.stats.dom );
    }
}

