import { useState } from 'react'
import footballArticles from './data/footballArticles'

function App() {

  return (
    <>
      <h1 className='d-flex justify-content-center my-3'>Articles list</h1>

      <div className="container">
        <div className="card">
          <div className="card-body">
            {
              footballArticles.map(article => (
                <h5 key={`article - ${article.id}`} className='display'>{article.title}</h5>
              ))
            }
          </div>
        </div>
      </div >
    </>
  )
}

export default App
