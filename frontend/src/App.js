import { Header } from './components/Header'
import { HomePage } from './pages/HomePage'
import './app.scss'

export const App = () => {
  return (
    <div className='app'>
      <Header />
      <HomePage />
    </div>
  )
}
