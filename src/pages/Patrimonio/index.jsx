import { Link } from "react-router-dom";
import CardPatrimonio from "../../components/Others/CardPatrimonio";
import Search from "../../components/Others/Search";
import styles from "./Patrimonio.module.css";

function Patrimonio () {

    return (
        <section className={styles.patrimonio}>
            <div className={styles.patrimonioSuperior}>
                <Search/> 
                <div className={styles.links}>
                    <Link className={styles.link}>Patrimônios Locados</Link>
                    <Link className={styles.link}>Patrimônios no Estoque</Link>
                </div>
            </div>
            <CardPatrimonio/>
        </section>
    )

}

export default Patrimonio;