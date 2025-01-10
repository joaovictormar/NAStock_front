import styles from "./Categorias.module.css"
import CardCategorias from "../../components/Others/CardCategorias";
import desktop from "../../assets/desktop.png"
import notebook from "../../assets/notebook.png"
import monitor from "../../assets/monitor.png"
import telefone from "../../assets/telefone.png"
import servidor from "../../assets/servidor.png"
import firewall from "../../assets/firewall.png"

function Categorias() {

    return (
        <section className={styles.categorias}>
            <CardCategorias imagem={desktop} descricao="DESKTOP"/>
            <CardCategorias imagem={notebook} descricao="NOTEBOOK"/>
            <CardCategorias imagem={monitor} descricao="MONITOR"/>
            <CardCategorias imagem={telefone} descricao="TELEFONE IP"/>
            <CardCategorias imagem={servidor} descricao="SERVIDOR"/>
            <CardCategorias imagem={firewall} descricao="FIREWALL"/>
        </section>
    )

};

export default Categorias;