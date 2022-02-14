import { Link } from 'react-router-dom'
import './error.css'

export default function Error() {
  return(
    <div>
      <div className='container-error'>
        <img src='notfound.svg' alt='Imagem de erro'/>
        <h1>Página não encontrada!</h1>
        <Link to="/">Voltar para home</Link>
      </div>
    </div>
  )
}