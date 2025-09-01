import { Link } from "react-router"

function NotFound() {


  return (
    <>
       <h2>Essa pagina não existe</h2>
       <Link to='/'>Voltar para pagina inicial</Link>
    </>
  )
}

export default NotFound