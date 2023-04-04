import React, { useContext, useState } from "react"
import {Context} from "../AppContext"
import propTypes from "prop-types"
import useHover from "../hooks/useHover"

function CartItem({item}) {
  const { removeFromCart } = useContext(Context)
  const [isHovered, ref] = useHover()

  const deleteIcon = isHovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"

    return (
        <div className="cart-item">
            <i 
             ref={ref}
              onClick={()=> removeFromCart(item.id) } 
              className={ deleteIcon }>
            </i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

CartItem.propTypes = {
  item: propTypes.shape({
    url: propTypes.string.isRequired,
  })
}

export default CartItem