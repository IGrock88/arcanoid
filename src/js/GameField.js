import {
    FIELD_WIDTH,
    FIELD_HEIGHT,
    RESPAWN_PLAYER_COORD_X,
    RESPAWN_PLAYER_COORD_Y,
    PLAYER_WIDTH,
    PLAYER_HEIGHT,
    PLAYER_COLOR
} from "../config";
import Player from "./Player";


export default class GameField {


    constructor(rootElement){
        this.rootElement = rootElement;
    }

    initGame = () => {
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

        this.player.respawn(this.ctx);



    }




}

