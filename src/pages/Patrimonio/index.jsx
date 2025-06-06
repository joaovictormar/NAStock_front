import CardPatrimonio from "../../components/Others/CardPatrimonio";
import Search from "../../components/Others/Search";
import styles from "./Patrimonio.module.css";
import { useState, useEffect } from "react";

function Patrimonio() {
    const [mensagem, setMensagem] = useState("");
    const [patrimonios, setPatrimonios] = useState([]);
    const [equipamentosQueTemPatrimonio, setEquipamentosQueTemPatrimonio] = useState([]);
    const [dadosCombinados, setDadosCombinados] = useState([]);
    const [dadosFiltrados, setDadosFiltrados] = useState([]);
    const [clientes, setClientes] = useState([]);

    const [filtroLocal, setFiltroLocal] = useState("");
    const [filtroCategoria, setFiltroCategoria] = useState("");
    const [filtroMarca, setFiltroMarca] = useState("");
    const [filtroProcessador, setFiltroProcessador] = useState("");
    const [filtroMemoria, setFiltroMemoria] = useState("");
    const [filtroDisco, setFiltroDisco] = useState("");

    const [editandoId, setEditandoId] = useState(null);
    const [memoriaEditada, setMemoriaEditada] = useState("");
    const [discoEditado, setDiscoEditado] = useState("");
    const [mostrarInfosExtras, setMostrarInfosExtras] = useState({});

    useEffect(() => {
        fetch("http://localhost:5000/patrimonios")
            .then((response) => response.json())
            .then((data) => setPatrimonios(data))
            .catch((error) => console.log(`Erro ao buscar patrimônios: ${error}`));
    }, []);

    useEffect(() => {
        fetch("http://localhost:5000/clientes")  
            .then((response) => response.json())
            .then((data) => setClientes(data))
            .catch((error) => console.log(`Erro ao buscar clientes: ${error}`));
    }, []);

    useEffect(() => {
        const buscaEquipamentos = async () => {
            try {
                const equipamentos = await Promise.all(
                    patrimonios.map((patrimonio) =>
                        fetch(`http://localhost:5000/equipamentos/${patrimonio.equipamento_id}`)
                            .then((res) => res.json())
                    )
                );
                setEquipamentosQueTemPatrimonio(equipamentos);
            } catch (error) {
                console.log(`Erro ao buscar equipamentos: ${error}`);
            }
        };

        if (patrimonios.length > 0) {
            buscaEquipamentos();
        }
    }, [patrimonios]);

    useEffect(() => {
        const combinados = patrimonios.map((patrimonio) => {
            const equipamento = equipamentosQueTemPatrimonio.find(
                (equip) => equip.id === patrimonio.equipamento_id
            );

            const cliente = clientes.find((c) => c.id === patrimonio.empresa); 
            
            return { 
                ...equipamento, 
                ...patrimonio,
                clienteNome: cliente ? cliente.cliente : "Não encontrado", 

            } 
        });

        setDadosCombinados(combinados);
        setDadosFiltrados(combinados);
    }, [patrimonios, equipamentosQueTemPatrimonio]);

    useEffect(() => {
        let filtrados = dadosCombinados.filter((item) => item && typeof item === "object");
    
        if (filtroCategoria) {
            filtrados = filtrados.filter((item) => item.categoria?.toLowerCase().includes(filtroCategoria.toLowerCase()));
        }
        if (filtroMarca) {
            filtrados = filtrados.filter((item) => item.marca?.toLowerCase().includes(filtroMarca.toLowerCase()));
        }
        if (filtroProcessador) {
            filtrados = filtrados.filter((item) => item.processador?.toLowerCase().includes(filtroProcessador.toLowerCase()));
        }
        if (filtroMemoria) {
            filtrados = filtrados.filter((item) => item.memoria?.toLowerCase().includes(filtroMemoria.toLowerCase()));
        }
        if (filtroDisco) {
            filtrados = filtrados.filter((item) => item.disco?.toLowerCase().includes(filtroDisco.toLowerCase()));
        }
        if (filtroLocal) {
            filtrados = filtrados.filter((item) => item.local?.toLowerCase().includes(filtroLocal.toLowerCase()));
        }
    
        setDadosFiltrados(filtrados);
    }, [filtroCategoria, filtroMarca, filtroLocal, filtroProcessador, filtroMemoria, filtroDisco, dadosCombinados]);

    //Removido a pedido do cliente 
    /*
    const excluiPatrimonio = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/patrimonios/${id}`, {
                method: "DELETE",
            });
            if (response.ok) {
                setMensagem("Patrimônio excluído com sucesso");
                console.log("Exclusão concluída para o item com ID:", id);

                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            } else {
                setMensagem("Erro ao excluir patrimônio");
                console.error("Erro na exclusão:", response.statusText);
            }
        } catch (error) {
            console.error("Erro ao conectar com a API:", error);
        }
    };
    */

    const buscaDinamica = (query) => {
        if (!query) {
            setDadosFiltrados(dadosCombinados);
        } else {
            const filtrados = dadosCombinados.filter((dados) =>
                Object.values(dados).some((value) =>
                    value?.toString().toLowerCase().includes(query.toLowerCase())
                )
            );
            setDadosFiltrados(filtrados);
        }
    };

    const onEditar = (id, memoria, disco) => {
        setEditandoId(id);
        setMemoriaEditada(memoria);
        setDiscoEditado(disco);
    };

    const onSalvar = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/patrimonios/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ memoria: memoriaEditada, disco: discoEditado }),
            });
    
            if (response.ok) {
                setMensagem("Atualização realizada com sucesso!");
                setEditandoId(null);
    
                // Atualiza os dados localmente sem recarregar a página
                setDadosCombinados((prevDados) =>
                    prevDados.map((item) =>
                        item.id === id ? { ...item, memoria: memoriaEditada, disco: discoEditado } : item
                    )
                );
                criarHistorico(id);
            } else {
                setMensagem("Erro ao atualizar os dados.");
            }
        } catch (error) {
            console.log(`Erro ao atualizar o equipamento: ${error}`);
        }
    };
    
    const criarHistorico = async (patrimonio_id) => {  
        const dataAtual = new Date().toISOString();

        const novoHistorico = {
            patrimonio_id,
            entrada: "---",
            saida: "---",
            data: dataAtual,
            motivo: "---",
            alteracao: "Edição de patrimônio"    
        }
            try {
                const response = await fetch("http://localhost:5000/historico", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(novoHistorico)
                });
    
                if (!response.ok) {
                    console.error("Erro ao criar histórico");
                }
            } catch (error) {
                console.error("Erro ao conectar com a API:", error);
            }
        };

        const toggleInfosExtras = (id) => {
            setMostrarInfosExtras((prev) => ({
                ...prev,
                [id]: !prev[id],
            }));
        };        

    return (
        <section className={styles.patrimonio}>
            <div className={styles.patrimonioSuperior}>
                <Search onSearch={buscaDinamica} />
                <div className={styles.filtros}>
                    <select
                        className={styles.selecao}
                        onChange={(e) => setFiltroLocal(e.target.value)}
                    >
                        <option className={styles.opcao} value="">Todos os Locais</option>
                        <option className={styles.opcao} value="Locação">Locação</option>
                        <option className={styles.opcao} value="Estoque">Estoque</option>
                    </select>
                    <select
                        className={styles.selecao}
                        onChange={(e) => setFiltroCategoria(e.target.value)}
                    >
                        <option className={styles.opcao} value="">Todas as Categorias</option>
                        <option className={styles.opcao} value="Desktop">Desktop</option>
                        <option className={styles.opcao} value="Notebook">Notebook</option>
                        <option className={styles.opcao} value="Monitor">Monitor</option>
                        <option className={styles.opcao} value="Telefone IP">Telefone IP</option>
                        <option className={styles.opcao} value="Servidor">Servidor</option>
                        <option className={styles.opcao} value="Firewall">Firewall</option>
                    </select>
                    <select
                        className={styles.selecao}
                        onChange={(e) => setFiltroMarca(e.target.value)}
                    >
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
                        <option className={styles.opcao} value="2TB">2TB</option>
                    </select>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.descricao}>
                    <h1 className={styles.textoDescricao}>Patrimônio</h1>
                    <h1 className={styles.textoDescricao}>Local</h1>
                    <h1 className={styles.textoDescricao}>Empresa</h1>
                    <h1 className={styles.textoDescricao}>OBS</h1>
                    <h1 className={styles.textoDescricao}>Categoria</h1>
                    <h1 className={styles.textoDescricao}>Marca</h1>
                    <h1 className={styles.textoDescricao}>Modelo</h1>
                    <h1 className={styles.textoDescricao}>Processador</h1>
                    <h1 className={styles.textoDescricao}>Memória</h1>
                    <h1 className={styles.textoDescricao}>Disco</h1>
                </div>
                {mensagem && <h1 className={styles.mensagem}>{mensagem}</h1>}
                {dadosFiltrados.length > 0 ? (
                    dadosFiltrados.map((dados) => (
                        <CardPatrimonio
                            key={dados.id}
                            categoria={dados.categoria}
                            marca={dados.marca}
                            modelo={dados.modelo}
                            processador={dados.processador}
                            memoria={dados.memoria}
                            disco={dados.disco}
                            quantidade={dados.quantidade}
                            patrimonio={dados.patrimonio}
                            local={dados.local}
                            empresa={dados.clienteNome}
                            obs={dados.obs}
                            state={{ id: dados.id }}
                            rotaPatrimonio={`/patrimonios/alugaroudevolver`}
                            rotaHistorico={`/historico/patrimonio/${dados.id}`}
                            editando={editandoId === dados.id}
                            memoriaEditada={memoriaEditada}
                            discoEditado={discoEditado}
                            onEditar={() => onEditar(dados.id, dados.memoria, dados.disco)}
                            onSalvar={() => onSalvar(dados.id)}
                            setMemoriaEditada={setMemoriaEditada}
                            setDiscoEditado={setDiscoEditado}
                            garantia={dados.garantia}
                            serial={dados.serial}
                            mostrarMaisInfo={mostrarInfosExtras[dados.id] || false}
                            onToggleMaisInfo={() => toggleInfosExtras(dados.id)}
                        />
                    ))
                ) : (
                    <h1 className={styles.textoErro}>Sem patrimônios cadastrados</h1>
                )}
            </div>
        </section>
    );
}

export default Patrimonio;