
import './App.css'
import Search from './Component/Search'

function App() {

  return (
    <>
      <div className="container">
        <header>
          <h1>Searchify</h1>
          <p>Search your favourite Movies, TV series and Games...</p>
        </header>
        <Search />

        <footer>
          <p><small>Developed by <a href="https://pradeep743.github.io/Portfolio/" target='_blank' rel="noreferrer">Pradeep Sahu</a></small></p>
        </footer>
      </div>
    </>
  )
}

export default App
