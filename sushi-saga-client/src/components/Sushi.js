import React, { Fragment } from 'react'

const Sushi = (props) => {

  const handleClick = () => {
    console.log()
  }
  return (
    <div className="sushi">
      <div className="plate"
           onClick={handleClick}>
        {
         props.eaten !== false ?
            null
          :
            <img src={props.sushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi
