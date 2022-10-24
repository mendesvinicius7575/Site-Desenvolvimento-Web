import Logo from "../img/acordelunar.png"
import styles from './Body.module.css'

function Body(){



    return(
      
        <div className={styles.inicio}>
            <picture>
                <img className={styles.center_img} src={Logo}/>
            </picture>
            <section className={styles.menu}>
              <div id={styles.divum}>
                <p><a href="produtos.html">Home</a></p>
                <p><a href="">Produtos</a></p>
                <p><a href="">Cadastro</a></p>
                <p><a href="">Endereço</a></p>
              </div>
            </section>
        </div>
    )

}

export default Body;