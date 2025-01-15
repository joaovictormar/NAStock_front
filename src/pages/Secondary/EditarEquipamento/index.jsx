import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CardModificarEquipamento from "../../../components/Others/CardModificarEquipamento";
import styles from "./EditarEquipamento.module.css";

function EditarEquipamento() {
    const [categoria, setCategoria] = useState("");
    const [marca, setMarca] = useState("");
    const [modelo, setModelo] = useState("");
    const [processador, setProcessador] = useState("");
    const [memoria, setMemoria] = useState("");
    const [disco, setDisco] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const [mensagem, setMensagem] = useState("");

    const location = useLocation();
    const navigate = useNavigate();
    const { id } = location.state || {};

    const categoriasValidas = ["Desktop", "Notebook", "Monitor", "Telefone IP", "Servidor", "Firewall"];

    useEffect(() => {
        const fetchEquipamento = async () => {
            try {
                const response = await fetch(`http://localhost:5000/equipamentos/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setCategoria(data.categoria || "");
                    setMarca(data.marca || "");
                    setModelo(data.modelo || "");
                    setProcessador(data.processador || "");
                    setMemoria(data.memoria || "");
                    setDisco(data.disco || "");
                    setQuantidade(data.quantidade || "");
                } else {
                    setMensagem("Erro ao carregar dados do equipamento.");
                }
            } catch (error) {
                console.error("Erro ao conectar com a API:", error);
                setMensagem("Erro ao conectar com a API.");
            }
        };

        if (id) {
            fetchEquipamento();
        }
    }, [id]);

    const editarEquipamento = async (e) => {
        e.preventDefault();

        if (!categoriasValidas.includes(categoria)) {
            setMensagem("Categoria inválida. Por favor, escolha uma categoria válida");
            return;
        }

        const equipamentoEditado = {
            ...(categoria && { categoria }),
            ...(marca && { marca }),
            ...(modelo && { modelo }),
            ...(processador && { processador }),
            ...(memoria && { memoria }),
            ...(disco && { disco }),
            ...(quantidade && { quantidade }),
        };

        try {
            const response = await fetch(`http://localhost:5000/equipamentos/${id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(equipamentoEditado)
            });

            if (response.ok) {
                setMensagem("Equipamento editado com sucesso!");
                setTimeout(() => {
                    navigate("/");
                }, 2000);
            } else {
                setMensagem("Erro ao editar equipamento.");
            }
        } catch (error) {
            console.error("Erro ao conectar com a API:", error);
            setMensagem("Erro ao conectar com a API.");
        }
    };

    return (
        <section className={styles.editarEquipamento}>
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
                enviarFormulario={editarEquipamento}
            />
        </section>
    );
}

export default EditarEquipamento;