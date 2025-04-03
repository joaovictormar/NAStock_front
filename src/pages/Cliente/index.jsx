import { useEffect, useState } from "react";
import CardCliente from "../../components/Others/CardCliente";
import styles from "./Cliente.module.css";

function Cliente() {
    const [clientes, setClientes] = useState([]);
    const [patrimonio, setPatrimonio] = useState([]);
    const [equipamentos, setEquipamentos] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/clientes")
            .then((response) => response.json())
            .then((data) => setClientes(data))
            .catch((error) => console.error("Erro ao buscar clientes:", error));
    }, []);

    useEffect(() => {
        fetch("http://localhost:5000/patrimonios")
            .then((response) => response.json())
            .then((data) => setPatrimonio(data))
            .catch((error) => console.error("Erro ao buscar patrimonios:", error));
    }, []);

    useEffect(() => {
        fetch("http://localhost:5000/equipamentos")
            .then((response) => response.json())
            .then((data) => setEquipamentos(data))
            .catch((error) => console.error("Erro ao buscar equipamentos:", error));
    }, []);

    const obterDadosClientes = () => {
        return clientes.map((cliente) => {
            const patrimoniosFiltrados = patrimonio.filter((p) => p.empresa === cliente.id);

            const categoriasLocadas = patrimoniosFiltrados.map((p) => {
                const equipamento = equipamentos.find((e) => e.id === p.equipamento_id);
                return equipamento ? equipamento.categoria : "Sem equipamentos";
            });

            return {
                id: cliente.id,
                cliente: cliente.cliente,
                patrimonios: patrimoniosFiltrados.map((p) => p.patrimonio),
                equipamentos: [...new Set(categoriasLocadas)], // Usado para remover categorias duplicadas
                total: patrimoniosFiltrados.length,
            };
        });
    };

    const dadosClientes  = obterDadosClientes();

    return (
        <section className={styles.cliente}>
            <div className={styles.descricao}>
                <h1 className={styles.textoDescricao}>Cliente</h1>
                <h1 className={styles.textoDescricao}>Patrimônios</h1>
                <h1 className={styles.textoDescricao}>Equipamentos locados</h1>
                <h1 className={styles.textoDescricao}>Total</h1>
            </div>
            {dadosClientes.length > 0 ? (
                dadosClientes.map((cliente) => (
                    <CardCliente
                        key={cliente.id}
                        cliente={cliente.cliente}
                        patrimonios={cliente.patrimonios.join(", ")}
                        equipamentos={cliente.equipamentos.join(", ")}
                        total={cliente.total}
                    />
                ))
            ) : (
                <h1 className={styles.textoDescricao}>Nenhum cliente encontrado</h1>
            )}
        </section>
    );
}

export default Cliente;
