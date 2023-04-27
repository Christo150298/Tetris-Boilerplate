import React, {useState,useCallback} from 'react';
import { createStage } from '../gameHelpers';
// Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';
import { checkCollision } from '../gameHelpers';

//Stylos componentes
import { StyledTetris, StyledTetrisWrapper } from './styles/StyledTetris';
import Contador from './contador';
//hooks
import { usePlayer } from '../js/hooks/usePlayer';
import { useStage } from '../js/hooks/useStage';
import { useInterval } from '../js/hooks/useInterval';
import { useGameStatus } from '../js/hooks/useGameStatus';
import { useContador } from '../js/hooks/useContador';
import useAppContext from '../js/store/context';
const Tetris = () => {
const {store, action}= useAppContext()
const {registro, setRegistro , }=store

const[ seg, min, horas, onOff, setOnOff, start, restore , stop]=useContador({});



   
    //tiempo de caida que dependerá del nivel que se encuentre el jugador
    const [dropTime , setDropTime] = useState(null);
   
    //establece el fin del juego que nos indicará si el juego a terminado o no
    const [gameOver, setGameOver]= useState(false);
    
    //desestructuramos 
    const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
    //Estado de juego para ese jugador
    const [stage, setStage , rowCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel ] = useGameStatus(rowCleared);
  
  

  //
  
  //coje la direccion
  const movePlayer = dir => {
      //si no chocamos hace el movimiento y si es asi no hace nada
      if (!checkCollision(player, stage, { x:dir, y: 0})) {
        updatePlayerPos({ x: dir, y: 0 });
      }
    };


    const pauseDropTime = ()=>{
      
      if(dropTime !== null){
        setDropTime(null)
        stop()
      
      }else {
        setDropTime(1000 )
        start()
      }
     
  
    }
  
  const registrarJugada=()=>{

     if(seg > 0){
      const newRegistro={
        score:score,
        rows:rows,
        level: level,
        time: {
          horas: horas,
           min : min,
           seg: seg
        } 
      }
      console.log(newRegistro)
      setRegistro([...registro, newRegistro])
      console.log(registro)
      


     }
     
    
  } 
  
//funcion para el boton de start
const startGame = () => {
  registrarJugada()

  restore()
  start()
 
  // Reset everything
  setStage(createStage());
  setDropTime(1000);
  resetPlayer();
  setScore(0);
    setLevel(0);
    setRows(0);
    setGameOver(false);
};

const drop = () => {

  // Increase level when player has cleared 10 rows
  if (rows > level  * 10) {
    setLevel(prev => prev + 1);
    // Also increase speed
    setDropTime(1000 / (level + 1) + 200);
  }
  if (!checkCollision(player, stage, { x: 0, y: 1 })) {
    updatePlayerPos({ x: 0, y: 1, collided: false });
  } else {
    // Game Over
    if (player.pos.y < 1) {
      console.log('GAME OVER!!!');
      stop();
      setGameOver(true);
      setDropTime(null);
    }
    updatePlayerPos({ x: 0, y: 0, collided: true });
  }
};


const KeyUp=({keyCode})=>{
  if(!gameOver){
    if(keyCode ===40){
      setDropTime(1000 / (level + 1) + 200)
    }
  }
}


  const dropPlayer = () => {
    drop();
  };

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) {
        movePlayer(-1); //mueve a la izquierda
      } else if (keyCode === 39) {
        movePlayer(1); //mueve a la derecha
      } else if (keyCode === 40) {
        dropPlayer(); //mueve hacia abajo
      }else if (keyCode === 38) {
        playerRotate(stage, 1);
      }else if(keyCode === 67){
        pauseDropTime()
      }
    }
  };

  useInterval(()=>{
    drop();
  },dropTime)


 
    return (
      
    <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e=> move(e)} onKeyUp={KeyUp}>
        <Contador seg={seg} min={min} horas={horas}/>
        <StyledTetris>
      <Stage stage={stage}  />
      <aside>

      {gameOver?(
        <Display gameOver={gameOver} text1="Game Over"/>
      ): ("")}
        <div>
          <Display text1="Score : " text2={score}/>
          <Display text1="Rows : " text2={rows}/>
          <Display text1="Level : " text2={level}/>
        </div>
        {dropTime === null ? (<Display text1={"Pause"}/>):("")}
 
        <StartButton callback={startGame} />
      </aside>
     
      </StyledTetris>
    

    </StyledTetrisWrapper>
    
  );
};

export default Tetris;
