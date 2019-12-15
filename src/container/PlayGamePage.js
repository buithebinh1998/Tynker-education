import React from 'react'
import Introduce from '../component/Introduce/Introduce';
const PlayGame = props => {
    return (
      <>
        <Introduce name ="Play"/>
        <div className = "tynker-game">
        <iframe width="50%" height="408"  src="//www.tynker.com/ide/embedded?p=5dd7d80a7b598618b6430bff&controls=false&autostart=false" frameborder="0" allowfullscreen title = "maybay"></iframe>
        <iframe width="50%" height="408"  src="//www.tynker.com/ide/embedded?p=5dd7d80a7b598618b6430bff&controls=false&autostart=false" frameborder="0" allowfullscreen title = "phithuyen"></iframe>
        </div>
      </>  
    )
}

export default PlayGame