import React from 'react'

const EmulationTynker = (props) => {
    const {lessonLink} = props
    return (
        <div className = "height-tynker">
        <iframe width="100%" height="100%" className = "iframe" src={`https://www.tynker.com/ide/v3?type=diy&p=${lessonLink}`} frameborder="0" allowfullscreen title = "abc"></iframe>
        </div>
    )
}

export default EmulationTynker
