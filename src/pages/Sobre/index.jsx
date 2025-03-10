import styles from "./Sobre.module.css"
import CardCategorias from "../../components/Others/CardCategorias";
import desktop from "../../assets/desktop.png"
import notebook from "../../assets/notebook.png"
import monitor from "../../assets/monitor.png"
import telefone from "../../assets/telefone.png"
import servidor from "../../assets/servidor.png"
import firewall from "../../assets/firewall.png"

function Sobre() {

    return (
        <section>
            <div className={styles.textos}>
                <h1 className={styles.textoImportante}>O que é o NASITstock?</h1>
                <h2 className={styles.textoComum}>NASITstock é um sistema básico de controle de estoque de equipamentos eletrônicos, desenvolvido para atender demandas da empresa relacionadas a entrada e saída de equipamentos e patrimônios, sejam eles locados ou no estoque da empresa.</h2>
            </div>
            <div className={styles.textos}>
                <h1 className={styles.textoImportante}>Como funciona?</h1>
                <h2 className={styles.textoComum}>O sistema trabalha com equipamentos e patrimônios. Ele diferencia os dois para que seja possível maior controle. O NASITstock, utiliza apenas dos equipamentos que podemos ver abaixo, que são os utilizados na empresa.</h2>
            </div>
            <div className={styles.categorias}>
                <CardCategorias imagem={desktop} descricao="DESKTOP"/>
                <CardCategorias imagem={notebook} descricao="NOTEBOOK"/>
                <CardCategorias imagem={monitor} descricao="MONITOR"/>
                <CardCategorias imagem={telefone} descricao="TELEFONE IP"/>
                <CardCategorias imagem={servidor} descricao="SERVIDOR"/>
                <CardCategorias imagem={firewall} descricao="FIREWALL"/>
            </div>
            <div className={styles.textos}>
                <h1 className={styles.textoImportante}>Equipamentos</h1>
                <h2 className={styles.textoComum}>Um equipamento refere-se a um equipamento que a empresa adquiriu e que não necessariamente tem um patrimônio.</h2>
                <h2 className={styles.textoComum}>É possível adicionar um novo equipamento através da seção <strong className={styles.textoMarcado}>Equipamentos</strong> e <strong className={styles.textoMarcado}>Adicionar equipamento</strong>.</h2>
                <h2 className={styles.textoComum}>É importante lembrar que apenas os equipamentos das fotos acima podem ser utilizados no campo adicionar equipamento, segue abaixo a lista deles:</h2>
                <ul className={styles.lista}>
                    <li>
                        <h3 className={styles.textoLista}>Desktop</h3>
                    </li>
                    <li>
                        <h3 className={styles.textoLista}>Notebook</h3>
                    </li>
                    <li>
                        <h3 className={styles.textoLista}>Monitor</h3>
                    </li>
                    <li>
                        <h3 className={styles.textoLista}>Telefone IP</h3>
                    </li>
                    <li>
                        <h3 className={styles.textoLista}>Firewall</h3>
                    </li>
                    <li>
                        <h3 className={styles.textoLista}>Servidor</h3>
                    </li>
                </ul>
                <h2 className={styles.textoComum}>Um equipamento pode também ser vinculado a um patrimônio na seção <strong className={styles.textoMarcado}>Equipamentos</strong> e <strong className={styles.textoMarcado}>Vincular patrimônio</strong>.</h2>
                <h2 className={styles.textoComum}>Ao vincular um patrimônio é necessário ressaltar que apenas um equipamento pode ter vários patrimônios, desde que sejam diferentes, porém um patrimônio pode conter apenas um equipamento. Resumindo, para qualquer equipamento só pode haver um patrimônio de mesmo número vinculado a ele.</h2>
                <h2 className={styles.textoComum}>É possível também <strong className={styles.textoMarcado}>Editar</strong> equipamentos através dos botões presentes nos cards de cada um deles, caso seja necessário.</h2>
            </div>
            <div className={styles.textos}>
                <h1 className={styles.textoImportante}>Patrimônios</h1>
                <h2 className={styles.textoComum}>Um patrimônio refere-se a um equipamento que a empresa já possui e está marcado com um número <strong className={styles.textoMarcado}>único</strong>.</h2>
                <h2 className={styles.textoComum}>Na seção <strong className={styles.textoMarcado}>Patrimônios</strong> podemos ver todos os patrimônios cadastrados.</h2>
                <h2 className={styles.textoComum}>É possível filtrar os patrimônios por <strong className={styles.textoMarcado}>Locados</strong> e no <strong className={styles.textoMarcado}>Estoque</strong> através dos botões disponíveis na seção <strong className={styles.textoMarcado}>Patrimônios</strong>.</h2>
                <h2 className={styles.textoComum}>Além disso também é possível <strong className={styles.textoMarcado}>Excluir</strong> ou <strong className={styles.textoMarcado}>Editar</strong> um patrimônio no card do próprio.</h2>
                <h2 className={styles.textoComum}>Um patrimônio excluído <strong className={styles.textoMarcado}>libera sua numeração para ser usada novamente</strong> por outro patrimônio.</h2>
                <h2 className={styles.textoComum}>Não é possível adicionar mais patrimônios do que o valor do campo quantidade no equipamento referente. Por exemplo, se um equipamento possui 4 quantidades só será possível adicionar até 4 patrimônios refentes a esse equipamento.</h2>
                <h2 className={styles.textoComum}>Como ja dito acima, não é permitido ter dois patrimônios com a mesma numeração.</h2>
            </div>
            <div className={styles.textos}>
                <h1 className={styles.textoImportante}>Histórico</h1>
                <h2 className={styles.textoComum}>Em desenvolvimento...</h2>
            </div>
        </section>
    )

};

export default Sobre;