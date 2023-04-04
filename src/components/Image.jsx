import React, {useContext, useState} from 'react'
import { Context } from '../AppContext'
import propTypes from 'prop-types'
import useHover from '../hooks/useHover'

function Image({className, img}) {
  const [isHovered, ref] = useHover()
  const { toggleFavorite, addToCart, cartItems, removeFromCart } = useContext(Context)

  const favoriteIcon = isHovered && img.isFavorite
  ?
  <i className="ri-heart-fill favorite" onClick={()=> toggleFavorite(img.id)}></i>
  :
  isHovered && !img.isFavorite ? <i className="ri-heart-line favorite" onClick={()=> toggleFavorite(img.id)}></i> :
  ''

  function addIcon(id) {
    const wasAdded = cartItems.some(image => image.id === id)
    if(wasAdded && isHovered) {
      return <i onClick={()=> removeFromCart(img.id)} className="ri-shopping-cart-fill cart"></i>
    }
      else if(isHovered) {
    return <i onClick={()=> addToCart(img)} className="ri-add-circle-line cart"></i>
  }
  }

  return (
    <div ref={ref} className={`${className} image-container`}>
      
        {favoriteIcon}
        {addIcon(img.id)}
      
        <img src={img.url} className="image-grid"/>

    </div>
    )
}

Image.propTypes = {
  className: propTypes.string,
  img: propTypes.shape({
    id: propTypes.string.isRequired,
    url: propTypes.string.isRequired,
    isFavorite: propTypes.bool
  })
}

export default Image