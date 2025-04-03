import { useEffect, useState } from "react";
import CardCliente from "../../components/Others/CardCliente";
import styles from "./Cliente.module.css";

function Cliente () {

    const [clientes, setClientes] = useState([]);

    useEffect(() => {
          fetch("http://localhost:5000/clientes")
            .then((response) => response.json())
            .then((data) => setClientes(data))
            .catch((error) => console.error("Erro ao buscar clientes:", error))
        }, []);

    

    return (
        <section className={styles.cliente}>
            <div className={styles.descricao}>
                <h1 className={styles.textoDescricao}>Cliente</h1>
                <h1 className={styles.textoDescricao}>Patrimônios</h1>
                <h1 className={styles.textoDescricao}>Equipamentos locados</h1>
                <h1 className={styles.textoDescricao}>Total</h1>
            </div>
            {clientes.length > 0 ? (
                clientes.map((cliente) => (
                    <CardCliente
                        cliente={cliente.cliente}
                        patrimonios={cliente.patrimonio}
                        equipamentos={cliente.locado}
                        total={cliente.total}
                    />
                ))
            ) : (
                <h1 className={styles.textoDescricao}>Nenhum cliente encontrado</h1>
            )}
        </section>
    )
};

export default Cliente;