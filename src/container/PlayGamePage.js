import React from 'react'
import Introduce from '../component/Introduce/Introduce'
import Game from '../component/Game/Game'
import D from '../constants/dictionary'
const PlayGame = props => {
  return (
    <>
      <Introduce name="Play" />
      <div className="game row">
        <Game gameLink={D.TynkerEducation.Game9.gameLink} name = {D.TynkerEducation.Game9.name}/>
        <Game gameLink={D.TynkerEducation.Game6.gameLink} name = {D.TynkerEducation.Game6.name}/>
        <Game gameLink={D.TynkerEducation.Game7.gameLink} name = {D.TynkerEducation.Game7.name}/>
        <Game gameLink={D.TynkerEducation.Game8.gameLink} name = {D.TynkerEducation.Game8.name}/>
      </div>
    </>
  )
}

export default PlayGame
