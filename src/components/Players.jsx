import React, {useState} from 'react'

const Players = ({initialName, symbol, isActive}) => {
   const [playerName, setPlayerName] = useState(initialName);
   const [player, setPlayer] = useState(false);
   let editablePlayer = <span className='player-name'>{playerName}</span>

   function handleOnClick(){
       setPlayer((player)=>!player);
       
    }

    function handleChange(e){
    console.log(e.target.value)
    setPlayerName(e.target.value);
    }
    
    
   if(player){
    editablePlayer = <input type='text' id='pName' required defaultValue={playerName} onChange={handleChange}/>
     document.getElementById("pName");
   }
  return (
    <li className={isActive ? 'active' : undefined}>
    <span className='player'>
    {editablePlayer}
    <span className='player-symbol'>{symbol}</span>
    </span>
    <button onClick={handleOnClick}>{player ? "Save": "Edit" }</button>
     </li>
  )
}

export default Players
