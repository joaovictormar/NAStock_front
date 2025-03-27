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
                <h2 className={styles.textoComum}>NASITstock é um sistema de controle de estoque de equipamentos eletrônicos, desenvolvido para atender demandas da empresa relacionadas a entrada e saída de equipamentos e patrimônios.</h2>
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
                <h2 className={styles.textoComum}>Um equipamento é composto dos seguintes campos abaixo:</h2>
                <ul className={styles.lista}>
                    <li className={styles.textoLista}>Categoria</li>
                    <li className={styles.textoLista}>Marca</li>
                    <li className={styles.textoLista}>Modelo</li>
                    <li className={styles.textoLista}>Processador</li>
                    <li className={styles.textoLista}>Memória</li>
                    <li className={styles.textoLista}>Disco</li>
                    <li className={styles.textoLista}>Quantidade</li>
                </ul>
                <h2 className={styles.textoComum}>Apenas alguns campos da seção de equipamentos são obrigatórios, sendo eles: <strong className={styles.textoMarcado}>Categoria, Marca, Modelo, Quantidade.</strong></h2>
                <h2 className={styles.textoComum}>É importante lembrar que apenas os equipamentos das fotos acima podem ser utilizados no campo equipamento.</h2>
                <h2 className={styles.textoComum}>Um equipamento pode também ser vinculado a um patrimônio na seção <strong className={styles.textoMarcado}>Equipamentos</strong> e <strong className={styles.textoMarcado}>Vincular patrimônio</strong>.</h2>
                <h2 className={styles.textoComum}>Ao vincular um patrimônio é necessário ressaltar que apenas um equipamento pode ter vários patrimônios, desde que sejam diferentes, porém um patrimônio pode conter apenas um equipamento. Resumindo, para qualquer equipamento só pode haver um patrimônio de mesmo número vinculado a ele.</h2>
                <h2 className={styles.textoComum}>É possível também <strong className={styles.textoMarcado}>Editar</strong> equipamentos através dos botões presentes nos cards de cada um deles, caso seja necessário. A edição de equipamentos permite que o usuário altere apenas o campo <strong className={styles.textoMarcado}>quantidade</strong>, que se refere a quantidade de equipamentos iguais disponível na empresa.</h2>
                <h2 className={styles.textoComum}>Uma outra regra para os equipamentos é que <strong className={styles.textoMarcado}>só é possível vincular uma quantidade de patrimônios á quantidade de equipamentos disponíveis.</strong>Por exemplo, se no campo quantidade de equipamentos existem 6 unidades só será possível vincular 6 patrimônios. Essa regra só muda, se a quantidade de equipamentos for editada para um número maior.</h2>
            </div>
            <div className={styles.textos}>
                <h1 className={styles.textoImportante}>Patrimônios</h1>
                <h2 className={styles.textoComum}>Um patrimônio refere-se a um equipamento que a empresa já cadastrou e está marcado com um número <strong className={styles.textoMarcado}>único</strong>.</h2>
                <h2 className={styles.textoComum}>Na seção <strong className={styles.textoMarcado}>Patrimônios</strong> podemos ver todos os patrimônios cadastrados.</h2>
                <h2 className={styles.textoComum}>Um patrimônio conta com os todos os campos de seu equipamento correspondente <strong className={styles.textoMarcado}>exceto o campo quantidade</strong> somado dos campos abaixo:</h2>
                <ul className={styles.lista}>
                    <li className={styles.textoLista}>Patrimônio</li>
                    <li className={styles.textoLista}>Local</li>
                    <li className={styles.textoLista}>Empresa</li>
                    <li className={styles.textoLista}>OBS</li>
                </ul>
                <h2 className={styles.textoComum}>Sendo os campos obrigatórios <strong className={styles.textoMarcado}>Patrimônio, Local, Empresa.</strong></h2>
                <h2 className={styles.textoComum}>Ao vincular um patrimônio, ao preencher o campo local com as opção Estoque, o campo empresa já é cadastrado automaticamente com o nome da empresa NASIT. Além disso o patrimônio é preenchido automaticamente também, contando a partir do últimmo criado e gerando um número após o último.</h2>
                <h2 className={styles.textoComum}>É possível filtrar os patrimônios por <strong className={styles.textoMarcado}>Local, Categoria, Marca, Processador, Memória e Disco</strong>.</h2>
                <h2 className={styles.textoComum}>Além disso também é possível <strong className={styles.textoMarcado}>Editar</strong> um patrimônio no card do próprio.</h2>
                <h2 className={styles.textoComum}>Ao editar um patrimônio, só é possível mudar os campos <strong className={styles.textoMarcado}>Local, Empresa e OBS</strong>. Ao editar um campo também é disponivel o campo <strong className={styles.textoMarcado}>Motivo da edição</strong> que é referente ao histórico.</h2>
            </div>
            <div className={styles.textos}>
                <h1 className={styles.textoImportante}>Histórico</h1>
                <h2 className={styles.textoComum}>Em desenvolvimento...</h2>
            </div>
        </section>
    )

};

export default Sobre;