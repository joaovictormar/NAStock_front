import { useEffect, useState } from "react";
import CardCliente from "../../components/Others/CardCliente";
import styles from "./Cliente.module.css";
import Search from "../../components/Others/Search";

function Cliente() {
    const [clientes, setClientes] = useState([]);
    const [patrimonios, setPatrimonios] = useState([]);
    const [equipamentos, setEquipamentos] = useState([]);
    const [dadosFiltrados, setDadosFiltrados] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/clientes")
            .then((response) => response.json())
            .then((data) => setClientes(data))
            .catch((error) => console.error("Erro ao buscar clientes:", error));
    }, []);

    useEffect(() => {
        fetch("http://localhost:5000/patrimonios")
            .then((response) => response.json())
            .then((data) => setPatrimonios(data))
            .catch((error) => console.error("Erro ao buscar patrimônios:", error));
    }, []);

    useEffect(() => {
        fetch("http://localhost:5000/equipamentos")
            .then((response) => response.json())
            .then((data) => setEquipamentos(data))
            .catch((error) => console.error("Erro ao buscar equipamentos:", error));
    }, []);

    const obterDadosClientes = () => {
        return clientes.map((cliente) => {
            const patrimoniosDoCliente = patrimonios.filter((p) => p.empresa === cliente.id);

            const categoriasLocadas = patrimoniosDoCliente.map((p) => {
                const equipamento = equipamentos.find((e) => e.id === p.equipamento_id);
                return equipamento ? equipamento.categoria : "Sem equipamentos";
            });

            return {
                id: cliente.id,
                cliente: cliente.cliente,
                patrimonios: patrimoniosDoCliente.map((p) => p.patrimonio),
                equipamentos: [...new Set(categoriasLocadas)], // Remove categorias duplicadas
                total: patrimoniosDoCliente.length,
            };
        });
    };

    useEffect(() => {
        setDadosFiltrados(obterDadosClientes()); // Inicializa com todos os dados
    }, [clientes, patrimonios, equipamentos]);

    const buscaDinamica = (query) => {
        if (!query) {
            setDadosFiltrados(obterDadosClientes());
        } else {
            const filtrados = obterDadosClientes().filter((cliente) => {
                return (
                    cliente.cliente.toLowerCase().includes(query.toLowerCase()) || // Busca por nome do cliente
                    cliente.patrimonios.some((p) => p.toLowerCase().includes(query.toLowerCase())) || // Busca por patrimônio
                    cliente.equipamentos.some((e) => e.toLowerCase().includes(query.toLowerCase())) // Busca por categoria de equipamento
                );
            });
            setDadosFiltrados(filtrados);
        }
    };

    return (
        <section className={styles.cliente}>
            <Search onSearch={buscaDinamica}/>
            <div className={styles.descricaoInferior}>
                <div className={styles.descricao}>
                    <h1 className={styles.textoDescricao}>Cliente</h1>
                    <h1 className={styles.textoDescricao}>Patrimônios</h1>
                    <h1 className={styles.textoDescricao}>Equipamentos locados</h1>
                    <h1 className={styles.textoDescricao}>Total</h1>
                </div>
                {dadosFiltrados.length > 0 ? (
                    dadosFiltrados.map((cliente) => (
                        <CardCliente
                            key={cliente.id}
                            cliente={cliente.cliente}
                            patrimonios={cliente.patrimonios.join(", ")}
                            equipamentos={cliente.equipamentos.join(", ")}
                            total={cliente.total}
                        />
                    ))
                ) : (
                    <h1 className={styles.textoDescricao}>Nenhum resultado encontrado</h1>
                )}
            </div>
        </section>
    );
}

export default Cliente;
