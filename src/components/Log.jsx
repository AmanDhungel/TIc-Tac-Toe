import React from 'react'

const Log = ({turns}) => {
  return (
    <div id='log'>
    {turns.map(turns => <li key={`${turns.square.row} ${turns.square.col}`}>
        {turns.player} selected {turns.square.row}, {turns.square.col}
    </li>)}
    </div>
  )
}

export default Log