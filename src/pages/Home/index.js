import {FiLink} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Menu from '../../components/Menu'

import './home.css'

export default function Home () {
  return(
    <div className="container-home">
      <div className="logo">
        <img src="/logo.svg" alt="Link logo"/>
        <h1>SimpleLink</h1>
        <span>Cole o link e incurte-o 👇</span>
      </div>

      <div className="area-input">
        <div>
          <FiLink size={24} color='#FFF'/>
          <input placeholder='Cole seu link aqui...'/>
        </div>
        <button>Gerar Link</button>
      </div>
      <Menu />
    </div>
  )
}