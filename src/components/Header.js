import Logo from "../img/acordelunar.png"
import styles from './Header.module.css'

function Header(){

    return(
        <div className={styles.inicio}>
            <picture>
                <img src={Logo}/>
            </picture>
            <section>
              <ul>
                <li>Home</li>
                <li>Produtos</li>
                <li>Cadastro</li>
                <li>Endereço</li>
              </ul>
            </section>
        </div>
    )

}

export default Header;