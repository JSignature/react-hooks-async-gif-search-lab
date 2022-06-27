import { React, useState, useEffect } from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'

const GifListContainer = () => {
  const [gifs, setGifs] = useState([])
  const [gifToSearch, setGifToSearch] = useState('Gordan Ramsey')

  function handleSearch(searchParam) {
    setGifToSearch(searchParam)
  }

  useEffect(async () => {
    await fetch(
      `https://api.giphy.com/v1/gifs/search?q=${gifToSearch}&api_key=S5TXtME5Gxsd4LenRodipRYzzp5xp5Qy&rating=g`
    )
      .then(resp => resp.json())
      .then(obj => {
        const filteredArray = [obj.data[0], obj.data[1], obj.data[2]]
        setGifs(filteredArray)
      })
  }, [gifToSearch])

  return (
    <div>
      <GifSearch handleSearch={handleSearch} />
      <GifList gifs={gifs} />
      {/* Trying to use a terinary to show a black page, having trouble with state */}
      {/* <>{gifToSearch === ' ' ? null : <GifList gifs={gifs} />}</> */}
    </div>
  )
}

export default GifListContainer
