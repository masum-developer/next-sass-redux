import Todos from './components/Todos'
import './page.scss'

export default function Home() {
  return (
    <main className='main'>
      <h2 className='home'>Home</h2>
      <Todos />
    </main>
  )
}