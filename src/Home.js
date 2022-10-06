import Feed from "./Feed"
import { useContext } from 'react'
import DataContext from './context/DataContext'

const Home = () => {

  const { searchResults, fetchError, isLoading } = useContext(DataContext)

  return (
    <main className="Home">
      {/* 1. Check if it's loading */}
      {isLoading && <p className="statusMsg">Loading posts...</p>}

      {/* 2. Check if it has fetch error */}
      {!isLoading && fetchError && <p className="statusMsg" style={{color:"red"}}>{fetchError}</p>}
      
      {/* 3. Check if there are any posts to display */}
      {!isLoading  && !fetchError && (searchResults.length 
      ? (<Feed posts={searchResults}/>)
      : (<p style={{marginTop: "2rem"}}>No posts to display.</p>)
      )}
    </main>
  )
}

export default Home