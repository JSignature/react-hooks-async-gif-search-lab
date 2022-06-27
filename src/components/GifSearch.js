import { ReactComponentElement, useState } from 'react'

const GifSearch = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState('')

  function submitClicked(e) {
    e.preventDefault()
    handleSearch(searchText)
  }

  return (
    <div>
      <h3>Enter a Search Term:</h3>
      <form onSubmit={submitClicked}>
        <input
          type="text"
          name=""
          id=""
          onChange={e => setSearchText(e.target.value)}
        />{' '}
        <br />
        <button
          type="submit"
          style={{ background: 'Green', color: 'white', padding: 8, margin: 5 }}
        >
          Find Gifs
        </button>
      </form>
    </div>
  )
}
export default GifSearch
