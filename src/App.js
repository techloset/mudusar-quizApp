import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../src/pages/Home'
import QuizPage from './pages/QuizPage'
import { Provider } from 'react-redux'
import store from './store/Store'
import Result from './pages/Result'
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/quiz' element={<QuizPage />} />
          <Route path='/result' element={<Result />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App