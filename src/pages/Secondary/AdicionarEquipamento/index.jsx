import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CardModificarEquipamento from "../../../components/Others/CardModificarEquipamento";
import styles from "./AdicionarEquipamento.module.css";

function AdicionarEquipamento() {
    const [categoria, setCategoria] = useState("");
    const [marca, setMarca] = useState("");
    const [modelo, setModelo] = useState("");
    const [processador, setProcessador] = useState("");
    const [memoria, setMemoria] = useState("");
    const [disco, setDisco] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const [mensagem, setMensagem] = useState("");

    const navigate = useNavigate();

    const categoriasValidas = ["Desktop", "Notebook", "Monitor", "Telefone IP", "Servidor", "Firewall"];

    const enviarFormulario = async (e) => {
        e.preventDefault();

        if (!categoriasValidas.includes(categoria)) {
            setMensagem("Categoria inválida. Por favor, escolha uma categoria válida");
            return;
        }

        const novoEquipamento = {
            categoria,
            marca,
            modelo,
            processador,
            memoria,
            disco,
            quantidade
        };

        try {
            const response = await fetch("http://localhost:5000/equipamentos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(novoEquipamento)
            });

            if (response.ok) {
                setMensagem("Equipamento criado com sucesso!");
                setTimeout(() => {
                    navigate("/");
                }, 2000);
                setCategoria("");
                setMarca("");
                setModelo("");
                setProcessador("");
                setMemoria("");
                setDisco("");
                setQuantidade("");
            } else {
                setMensagem("Erro ao adicionar equipamento.");
            }
        } catch (error) {
            console.error("Erro ao conectar com a API:", error);
            setMensagem("Erro ao conectar com a API.");
        }
    };

    return (
        <section className={styles.adicionarEquipamento}>
            {mensagem && <h1 className={styles.mensagem}>{mensagem}</h1>}
            <CardModificarEquipamento
                categoria={categoria}
                setCategoria={setCategoria}
                marca={marca}
                setMarca={setMarca}
                modelo={modelo}
                setModelo={setModelo}
                processador={processador}
                setProcessador={setProcessador}
                memoria={memoria}
                setMemoria={setMemoria}
                disco={disco}
                setDisco={setDisco}
                quantidade={quantidade}
                setQuantidade={setQuantidade}
                enviarFormulario={enviarFormulario}
            />
        </section>
    );
}

export default AdicionarEquipamento;