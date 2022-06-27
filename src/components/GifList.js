import { React } from 'react'

const GifList = ({ gifs }) => {
  return (
    <div>
      <ul>
        {gifs.map(gif => (
          <li key={gif.id}>
            <img src={gif.images.original.url} alt="some gifs" />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GifList
