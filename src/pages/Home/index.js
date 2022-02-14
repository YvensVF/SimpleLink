import React, { useState } from 'react'

import {FiLink} from 'react-icons/fi'
import Menu from '../../components/Menu'
import LinkItem from '../../components/LinkItem'
import api from '../../services/api'

import './home.css'

export default function Home () {
  const [link, setLink] = React.useState('');
  const [data, setData] = React.useState({})
  const [showModal, setShowModal] = React.useState(false)

  async function handleClick() {
    try{
      const response = await api.post('/shorten', {
        long_url: link
      })

      setData(response.data)
      setShowModal(true)

      setLink('')

    }catch{
      alert("Algo deu errado")
      setLink('');
    }
  }
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
          <input
           placeholder='Cole seu link aqui...'
           value={link}
           onChange={ (e) => setLink(e.target.value)}
           />
        </div>
        <button onClick={handleClick}>Gerar Link</button>
      </div>
      <Menu />
      
      {showModal && (
        <LinkItem 
          closeModal={() => setShowModal(false)}
          content={data}
        />
      )}

    </div>
  )

}