import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Table from './content/Table'
import FormControl from './forms/FormControl'

function App() {
  const [query, setQuery] = useState<string>('')                // current input value
  const [data, setData] = useState<any[] | null>(null)

  async function handleSearch() {
    try {
      const res = await fetch(`http://127.0.0.1:5000/teams/?name=${encodeURIComponent(query)}`)
      if (!res.ok) throw new Error(res.statusText)
      const json = await res.json()
      console.log('search result', json)
      setData(json)
    } catch (err) {
      console.error('search error', err)
    }
  }

  return (
    <>
      <header className="app-header">
        <div className="app-header-inner">
          <h1 className="app-title">Sports Data</h1>
          <p className="app-sub">Search teams and view results</p>
        </div>
      </header>

      <main className="app-main">
        <div className="app-main-inner">
          <div><FormControl value={query} onChange={setQuery} /></div>
          <div><Button onClick={handleSearch} /></div>
          <div><Table data={data} /></div>
        </div>
      </main>
    </>
  )
}

export default App
