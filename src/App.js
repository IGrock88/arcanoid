import GameField from "./js/GameField";


export default class App {


    init = () => {

        const root = document.getElementById('root');

        let gameField = new GameField(root);

        gameField.initGame();





    }




}