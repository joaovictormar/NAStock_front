import CardHome from "../../components/Others/CardHome";
import styles from "./Categorias.module.css"
import desktop from "../../assets/desktop.png"
import notebook from "../../assets/notebook.png"
import monitor from "../../assets/monitor.png"
import telefone from "../../assets/telefone.png"
import servidor from "../../assets/servidor.png"
import firewall from "../../assets/firewall.png"

function Categorias() {

    return (
        <section className={styles.categorias}>
            <CardHome imagem={desktop} descricao="DESKTOP"/>
            <CardHome imagem={notebook} descricao="NOTEBOOK"/>
            <CardHome imagem={monitor} descricao="MONITOR"/>
            <CardHome imagem={telefone} descricao="TELEFONE IP"/>
            <CardHome imagem={servidor} descricao="SERVIDOR"/>
            <CardHome imagem={firewall} descricao="FIREWALL"/>
        </section>
    )

};

export default Categorias;