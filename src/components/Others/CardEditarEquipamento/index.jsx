import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./CardEditarEquipamento.module.css";

function CardEditarEquipamento() {
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

        if(!categoriasValidas.includes(categoria)) {
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
        <section className={styles.card}>
            {mensagem && <h1 className={styles.mensagem}>{mensagem}</h1>}
            <form className={styles.cardEditarEquipamento} onSubmit={editarEquipamento}>
                <div className={styles.formulario}>
                    <label className={styles.texto}>Categoria:</label>
                    <input 
                        onChange={(e) => setCategoria(e.target.value)} 
                        className={styles.input} 
                        type="text" 
                        value={categoria}
                        placeholder={categoria}
                        required  
                    />
                </div>
                <div className={styles.formulario}>
                    <label className={styles.texto}>Marca:</label>
                    <input 
                        onChange={(e) => setMarca(e.target.value)} 
                        className={styles.input} 
                        type="text" 
                        value={marca}
                        placeholder={marca}  
                        required
                    />
                </div>
                <div className={styles.formulario}>
                    <label className={styles.texto}>Modelo:</label>
                    <input 
                        onChange={(e) => setModelo(e.target.value)} 
                        className={styles.input} 
                        type="text" 
                        value={modelo}
                        placeholder={modelo}  
                        required
                    />
                </div>
                <div className={styles.formulario}>
                    <label className={styles.texto}>Processador:</label>
                    <input 
                        onChange={(e) => setProcessador(e.target.value)} 
                        className={styles.input} 
                        type="text" 
                        value={processador}
                        placeholder={processador}  
                    />
                </div>
                <div className={styles.formulario}>
                    <label className={styles.texto}>Memória:</label>
                    <input 
                        onChange={(e) => setMemoria(e.target.value)} 
                        className={styles.input} 
                        type="text" 
                        value={memoria}
                        placeholder={memoria}  
                    />
                </div>
                <div className={styles.formulario}>
                    <label className={styles.texto}>Disco:</label>
                    <input 
                        onChange={(e) => setDisco(e.target.value)} 
                        className={styles.input} 
                        type="text" 
                        value={disco}
                        placeholder={disco}  
                    />
                </div>
                <div className={styles.formulario}>
                    <label className={styles.texto}>Quantidade:</label>
                    <input 
                        onChange={(e) => setQuantidade(e.target.value)} 
                        className={styles.input} 
                        type="number" 
                        value={quantidade}
                        placeholder={quantidade}
                        required
                    />
                </div>
                <div className={styles.formulario}>
                    <label className={styles.texto}>Imagem:</label>
                    <input className={styles.inputImagem} type="file" />
                </div>
                <button className={styles.botao} type="submit">Enviar</button>
            </form>
        </section>
    );
}

export default CardEditarEquipamento;