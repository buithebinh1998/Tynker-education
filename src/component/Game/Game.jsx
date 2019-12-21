import React from 'react'
import PropTypes from 'prop-types'
import { C } from '../../constants/index'
import ContentLoader from 'react-content-loader'
import "./Game.scss";
const propsTypes = {
  gameLink: PropTypes.string,
  name: PropTypes.string
}
const defaultProps = {
  gameLink: C.EMPTY_STRING,
  name: C.EMPTY_STRING
}
const MyLoader = () => (
  <ContentLoader
    height={160}
    speed={1}
    primaryColor="rgba(0,0,0,0.06)"
    secondaryColor="#ecebeb"
    animate={true}
  >
    <rect x="80" y="2" rx="5" ry="5" width="50%" height="10%" />
    <rect x="20" y="20" rx="5" ry="5" width="80%" height="90%" />
  </ContentLoader>
)

const Game = props => {
  const { gameLink, name } = props
  const [loadGame, setLoad] = React.useState(true)
  const handleLoadGame = () => {
    setLoad(false)
  }
  return (
    <>

      <div className="col-12 col-md-6">
      
        {loadGame ? <MyLoader /> :  <h2 className = "title-game">{name}</h2>}
        <iframe
          width={loadGame ? '0' : '100%'}
          height="400"
          src={`//www.tynker.com/ide/embedded?p=${gameLink}`}
          frameborder="0"
          allowfullscreen
          onLoad={handleLoadGame}
          title={gameLink}
        ></iframe>
        
      </div>
    </>
  )
}

Game.propTypes = propsTypes
Game.defaultProps = defaultProps

export default Game
