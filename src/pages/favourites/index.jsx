import React from 'react'
import { useSelector } from 'react-redux'

function Favourites() {
  const { items } = useSelector(state => state.favourite)

  return (
    <div>

    </div>
  )
}

export default Favourites