import { useState } from 'react'
import footballArticles from './data/footballArticles'
import 'font-awesome/css/font-awesome.min.css';

function App() {
  const [newArticle, setNewArticle] = useState('')
  const [articles, setArticles] = useState(footballArticles)

  function handleFormSubmit(e) {
    e.preventDefault()

    const newArticleObj = {
      id: articles.length + 1,
      title: newArticle
    }

    setArticles([...articles, newArticleObj])
    console.log(articles, newArticle);

    setNewArticle('')
  }

  function handleDeleteArticle(id) {
    setArticles(articles.filter(article => article.id !== id))
  }

  return (
    <>
      <h1 className='d-flex justify-content-center my-3'>Articles list</h1>

      <div className="container">
        <div className="card my-5">
          <div className="card-body">
            {
              articles.map(article => (
                <div className='d-flex align-items-center justify-content-between'>
                  <h5 key={`article - ${article.id}`} className='display'>{article.title}</h5>
                  <i
                    className="fa fa-trash"
                    onClick={() => handleDeleteArticle(article.id)}
                  />
                </div>
              ))
            }
          </div>
        </div>

        <form onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label htmlFor="new_article" className="form-label">Article</label>
            <input
              type="text"
              className="form-control"
              name="new_article"
              id="new_article"
              aria-describedby="new_article"
              placeholder="Type your article"
              value={newArticle}
              onChange={e => setNewArticle(e.target.value)}
            />
          </div>

          <button className='btn btn-primary' type="submit">Add</button>
        </form>
      </div >
    </>
  )
}

export default App
