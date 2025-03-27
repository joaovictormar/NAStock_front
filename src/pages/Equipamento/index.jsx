import styles from "./Equipamento.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Search from "../../components/Others/Search";
import CardEquipamento from "../../components/Others/CardEquipamento";

function Equipamento() {
    const [equipamentos, setEquipamentos] = useState([]);
    const [equipamentosFiltrados, setEquipamentosFiltrados] = useState([]);
    const [mensagem, setMensagem] = useState("");
    const [filtroCategoria, setFiltroCategoria] = useState("");
    const [filtroMarca, setFiltroMarca] = useState("");
    const [filtroProcessador, setFiltroProcessador] = useState("");
    const [filtroMemoria, setFiltroMemoria] = useState("");
    const [filtroDisco, setFiltroDisco] = useState("");
    const [editandoEquipamentoId, setEditandoEquipamentoId] = useState(null);
    const [quantidadeEditada, setQuantidadeEditada] = useState("");

    useEffect(() => {
        fetch("http://localhost:5000/equipamentos")
            .then((response) => response.json())
            .then((data) => {
                setEquipamentos(data);
                setEquipamentosFiltrados(data);
            })
            .catch((error) => console.log(`Erro ao buscar equipamentos: ${error}`));
    }, []);

    useEffect(() => {
        let filtrados = equipamentos.filter((item) => item && typeof item === "object");
        if (filtroCategoria) {
            filtrados = filtrados.filter((item) => (item?.categoria?.toLowerCase() || "").includes(filtroCategoria.toLowerCase()));
        }
        if (filtroMarca) {
            filtrados = filtrados.filter((item) => (item?.marca?.toLowerCase() || "").includes(filtroMarca.toLowerCase()));
        }
        if (filtroProcessador) {
            filtrados = filtrados.filter((item) => (item?.processador?.toLowerCase() || "").includes(filtroProcessador.toLowerCase()));
        }
        if (filtroMemoria) {
            filtrados = filtrados.filter((item) => (item?.memoria?.toLowerCase() || "").includes(filtroMemoria.toLowerCase()));
        }
        if (filtroDisco) {
            filtrados = filtrados.filter((item) => (item?.disco?.toLowerCase() || "").includes(filtroDisco.toLowerCase()));
        }

        setEquipamentosFiltrados(filtrados);
    }, [filtroCategoria, filtroMarca, filtroProcessador, filtroMemoria, filtroDisco, equipamentos]);


    //Removido a pedido do cliente
    /*const excluiEquipamento = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/equipamentos/${id}`, {
                method: "DELETE",
            });

            if (response.ok) {
                setMensagem("Equipamento excluído com sucesso");
                console.log("Exclusão concluída para o item com ID:", id);

                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            } else {
                setMensagem("É necessário excluir todos os patrimônios desse equipamento antes de excluí-lo");
                console.error("Erro na exclusão:", response.statusText);
            }
        } catch (error) {
            setMensagem("Erro ao conectar com a API");
            console.error("Erro ao conectar com a API:", error);
        }
    };*/

    const buscaDinamica = (query) => {
        if (!query) {
            setEquipamentosFiltrados(equipamentos);
        } else {
            const filtrados = equipamentos.filter((equipamento) =>
                Object.values(equipamento).some((value) =>
                    value.toString().toLowerCase().includes(query.toLowerCase())
                )
            );
            setEquipamentosFiltrados(filtrados);
        }
    };

    const onEditar = (id, quantidade) => {
        setEditandoEquipamentoId(id);
        setQuantidadeEditada(quantidade);
    };

    const onSalvar = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/equipamentos/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ quantidade: quantidadeEditada }),
            });

            if (response.ok) {
                setMensagem("Equipamento atualizado com sucesso!");
                //Atualização da lista de equipamentos mesmo sem precisar reccarregar a page
                setEquipamentos((prevEquipamentos) =>
                    prevEquipamentos.map((equipamento) =>
                        equipamento.id === id
                            ? { ...equipamento, quantidade: quantidadeEditada }
                            : equipamento
                    )
                );
                setEditandoEquipamentoId(null);
                setTimeout (() => {
                    setMensagem("");
                }, 3000);
            } else {
                setMensagem("Erro ao salvar equipamento");
                console.error("Erro na atualização:", response.statusText);
            }
        } catch (error) {
            setMensagem("Erro ao conectar com a API");
            console.error("Erro ao conectar com a API:", error);
        }
    };

    return (
        <section className={styles.equipamento}>
            <div className={styles.equipamentoSuperior}>
                <div className={styles.equipamentoSuperiorCabecalho}>
                    <Search onSearch={buscaDinamica} />
                    <div className={styles.links}>
                        <Link to="/equipamentos/adicionar" className={styles.link}>
                            Adicionar Equipamento
                        </Link>
                        <Link to="/equipamentos/vincular" className={styles.link}>
                            Vincular Patrimônio
                        </Link>
                    </div>
                </div>
                <div className={styles.filtros}>
                    <select className={styles.selecao} onChange={(e) => setFiltroCategoria(e.target.value)}>
                        <option className={styles.opcao} value="">Todas as Categorias</option>
                        <option className={styles.opcao} value="Desktop">Desktop</option>
                        <option className={styles.opcao} value="Notebook">Notebook</option>
                        <option className={styles.opcao} value="Monitor">Monitor</option>
                        <option className={styles.opcao} value="Telefone IP">Telefone IP</option>
                        <option className={styles.opcao} value="Servidor">Servidor</option>
                        <option className={styles.opcao} value="Firewall">Firewall</option>
                    </select>
                    <select className={styles.selecao} onChange={(e) => setFiltroMarca(e.target.value)}>
                        <option className={styles.opcao} value="">Todas as Marcas</option>
                        <option className={styles.opcao} value="Dell">Dell</option>
                        <option className={styles.opcao} value="HP">HP</option>
                        <option className={styles.opcao} value="Lenovo">Lenovo</option>
                    </select>
                    <select className={styles.selecao} onChange={(e) => setFiltroProcessador(e.target.value)}>
                        <option className={styles.opcao} value="">Todos os Processadores</option>
                        <option className={styles.opcao} value="I3">I3</option>
                        <option className={styles.opcao} value="I5">I5</option>
                        <option className={styles.opcao} value="I7">I7</option>
                        <option className={styles.opcao} value="Xeon">Xeon</option>
                    </select>
                    <select className={styles.selecao} onChange={(e) => setFiltroMemoria(e.target.value)}>
                        <option className={styles.opcao} value="">Todas as Memorias</option>
                        <option className={styles.opcao} value="DDR3">DDR3</option>
                        <option className={styles.opcao} value="DDR4">DDR4</option>
                        <option className={styles.opcao} value="4GB">4GB</option>
                        <option className={styles.opcao} value="8GB">8GB</option>
                        <option className={styles.opcao} value="16GB">16GB</option>
                        <option className={styles.opcao} value="32GB">32GB</option>
                        <option className={styles.opcao} value="64GB">64GB</option>
                    </select>
                    <select className={styles.selecao} onChange={(e) => setFiltroDisco(e.target.value)}>
                        <option className={styles.opcao} value="">Todos os Discos</option>
                        <option className={styles.opcao} value="SSD">SSD</option>
                        <option className={styles.opcao} value="HD">HD</option>
                        <option className={styles.opcao} value="120GB">120GB</option>
                        <option className={styles.opcao} value="240GB">240GB</option>
                        <option className={styles.opcao} value="480GB">480GB</option>
                        <option className={styles.opcao} value="500GB">500GB</option>
                        <option className={styles.opcao} value="1TB">1TB</option>
                    </select>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.descricao}>
                    <h1 className={styles.textoDescricao}>Categoria</h1>
                    <h1 className={styles.textoDescricao}>Marca</h1>
                    <h1 className={styles.textoDescricao}>Modelo</h1>
                    <h1 className={styles.textoDescricao}>Processador</h1>
                    <h1 className={styles.textoDescricao}>Memória</h1>
                    <h1 className={styles.textoDescricao}>Disco</h1>
                    <h1 className={styles.textoDescricao}>Quantidade</h1>
                </div>
                {mensagem && <h1 className={styles.mensagem}>{mensagem}</h1>}
                {equipamentosFiltrados.length > 0 ? (
                    equipamentosFiltrados.map((equipamento) => (
                        <CardEquipamento
                            key={equipamento.id}
                            categoria={equipamento.categoria}
                            marca={equipamento.marca}
                            modelo={equipamento.modelo}
                            processador={equipamento.processador}
                            memoria={equipamento.memoria}
                            disco={equipamento.disco}
                            quantidade={equipamento.quantidade}
                            editando={equipamento.id === editandoEquipamentoId}
                            quantidadeEditada={quantidadeEditada}
                            setQuantidadeEditada={setQuantidadeEditada}
                            onEditar={() => onEditar(equipamento.id, equipamento.quantidade)}
                            onSalvar={() => onSalvar(equipamento.id)}
                        />
                    ))
                ) : (
                    <h1 className={styles.textoErro}>Sem equipamentos encontrados</h1>
                )}
            </div>
        </section>
    );
}

export default Equipamento;
