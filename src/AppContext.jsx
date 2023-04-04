import React, { createContext, useState,useEffect } from 'react'
const Context = createContext()



function AppContextProvider(props) {
  const localCartArr = JSON.parse(localStorage.getItem('shoppingCart'))
  const localFavoritedArr = JSON.parse(localStorage.getItem('favorites'))
  const [ photosArr, setPhotosArr ] = useState([])
  const [ cartItems, setCartItems ] = useState(localCartArr === null ? [] : localCartArr)
 
  useEffect(()=> {
    fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
      .then(res => res.json())
      .then(data => {
        localFavoritedArr === null ? setPhotosArr(data) : setPhotosArr(localFavoritedArr)
      })
  },[])

  const toggleFavorite = (id)=> {
    const withFavoriteArr = photosArr.map(photo => {
      return photo.id === id ? {...photo, isFavorite: !photo.isFavorite} : photo
    })
    setPhotosArr(withFavoriteArr)
    localStorage.setItem('favorites', JSON.stringify(withFavoriteArr))
  }

  const addToCart = (obj)=> { 
    setCartItems(prevObj => [...prevObj, obj])
  }

  const removeFromCart = (id)=> {
    setCartItems(prevObjects => prevObjects.filter(object => object.id !== id))
  }

  const emptyCart = ()=> setCartItems([])

  localStorage.setItem('shoppingCart', JSON.stringify(cartItems))

  return (
    <Context.Provider value={{photosArr, toggleFavorite, cartItems, addToCart, removeFromCart, emptyCart}}>
      {props.children}
    </Context.Provider>
  )
}

export {AppContextProvider, Context}