import './index.css'
import { useRoutes } from 'react-router-dom'
import { router } from './Utils/routes'

function App() {
  const content = useRoutes(router)
  return <div className="App">{content}</div>
}

export default App
