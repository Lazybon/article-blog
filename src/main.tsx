import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Article from './Components/Article/Article'
import ArticleList from './Components/ArticleList/ArticleList'
import Home from './routes/Home'
import ErrorPage from './error-page.jsx'
import { store } from './app/store'
import 'normalize.css'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'articles',
        element: <ArticleList />,
      },
      {
        path: 'articles/:articleId',
        element: <Article />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
