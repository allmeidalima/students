import { useNavigate } from "react-router-dom"

function Header() {
  const navigate = useNavigate();

  return (
    <header className="myheader" style={{display: "flex", marginRight: '15px', float: "right"}}>
      <nav>
          <button onClick={() => navigate('/studentlist')}>
            Listar Alunos
          </button>
      </nav>
    </header>
  );
}

export default Header;