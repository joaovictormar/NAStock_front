import styles from "./Footer.module.css";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";

function Footer () {

    return (
        <section className={styles.footer}>
            <div>
                <h1 className={styles.textoEndereco}>
                Nova América Offices<br/>
                Av. Pastor Martin Luther King JR. 126 - Sala 1421
                Torre 3000<br/> Del Castilho, Rio de Janeiro - RJ
                </h1>
                <div className={styles.telefone}>
                    <FaPhoneSquareAlt className={styles.iconeTelefone}/>
                    <h1 className={styles.textoTelefone}>(021)3828033 </h1>
                </div>
            </div>
            <h1 className={styles.textoCopyright}>
                Todos os direitos reservados© 
            </h1>
            <div className={styles.desenvolvedor}>
                <FaLinkedin/>
                <a className={styles.desenvolvedorAncora} href="https://www.linkedin.com/in/joaovictormar">
                    Desenvolvido por João
                </a>
            </div>
        </section>
    )

};

export default Footer;