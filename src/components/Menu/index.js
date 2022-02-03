import './menu.css'
import {BsGithub,BsInstagram, BsLinkedin} from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function Menu() {
  return(
    <div className='menu'>
      <a className='social' href='https://github.com/YvensVF'>
        <BsGithub color='#fff' size={24}/>
      </a>

      <a className='social' href='https://www.instagram.com/yvensz/'>
        <BsInstagram color='#fff' size={24}/>
      </a>

      <a className='social' href='https://www.linkedin.com/in/yvens-vasconcelos-82163820a/'>
        <BsLinkedin color='#fff' size={24}/>
      </a>
      <Link to="/links" className='menu-item'>
        Meus Links 
      </Link>
    </div>
  )
}