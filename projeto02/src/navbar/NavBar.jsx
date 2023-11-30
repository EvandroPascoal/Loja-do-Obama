
import PatrickEstrela from '../assets/logo.png'
import './NavBar.css'

function NavBar() {

    return (

        <header className="cabecalho">
            <div className="logoPesquisa">
                <h1 className="logo">
                    <a href="index.html" title="Loja de Informática do Obama">
                        <img
                            src={PatrickEstrela}
                            alt="Uma logo de uma loja que está escrito na cor branca, Loja de Informática do Obama"
                        />
                    </a>
                </h1>
                <form action="" method="post">
                    <input
                        type="text"
                        name="pesquisa"
                        id="pesquisa"
                        placeholder="Faça uma busca"
                    />
                    <button type="button">
                        <i className="fa-solid fa-magnifying-glass" />
                    </button>
                </form>
            </div>
            <nav className="menu">
                <ul className="lista-menu">
                    <a href="#">
                        <li>Home</li>
                    </a>
                    <a href="#">
                        <li>Produtos</li>
                    </a>
                    <a href="#">
                        <li>Serviços</li>
                    </a>
                    <a href="#">
                        <li>Contato</li>
                    </a>
                </ul>
                <div className="social-icons">
                    <ul>
                        <li>
                            <a className="btn-facebook" href="#">
                                <i className="fa-brands fa-facebook-f" />
                            </a>
                        </li>
                        <li>
                            <a className="btn-twitter" href="#">
                                <i className="fa-brands fa-x-twitter" />
                            </a>
                        </li>
                        <li>
                            <a className="btn-google" href="#">
                                <i className="fa-brands fa-google" />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>

    )




}

export default NavBar