import { useState } from "react";
import styles from "./CardAddEquipamentos.module.css"
import { useNavigate } from "react-router-dom";

function CardAddEquipamentos () {

    const [categoria, setCategoria] = useState("");
    const [marca, setMarca] = useState("");
    const [modelo, setModelo] = useState("");
    const [processador, setProcessador] = useState("");
    const [memoria, setMemoria] = useState("");
    const [disco, setDisco] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const [mensagem, setMensagem] = useState("")

    const navigate = useNavigate();     

    const categoriasValidas = ["Desktop", "Notebook", "Monitor", "Telefone IP", "Servidor", "Firewall"];

    const enviarFormulario = async (e) => {
        e.preventDefault();

        if(!categoriasValidas.includes(categoria)) {
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
        <>
        <form className={styles.cardAddEquipamentos} onSubmit={enviarFormulario}>  
            {mensagem && <h1 className={styles.mensagem}>{mensagem}</h1>}
            <div className={styles.formulario}>
                <label className={styles.texto}>Categoria:</label>
                <input onChange={(e) => setCategoria(e.target.value)} value={categoria} className={styles.input} type="text" required />
            </div>
            <div className={styles.formulario}>
                <label className={styles.texto}>Marca:</label>
                <input onChange={(e) => setMarca(e.target.value)} value={marca} className={styles.input} type="text" required />
            </div>
            <div className={styles.formulario}>
                <label className={styles.texto}>Modelo:</label>
                <input onChange={(e) => setModelo(e.target.value)} value={modelo} className={styles.input} type="text" required />
            </div>
            <div className={styles.formulario}>
                <label className={styles.texto}>Processador:</label>
                <input onChange={(e) => setProcessador(e.target.value)} value={processador} className={styles.input} type="text" />
            </div>
            <div className={styles.formulario}>
                <label className={styles.texto}>Memória:</label>
                <input onChange={(e) => setMemoria(e.target.value)} value={memoria} className={styles.input} type="text" />
            </div>
            <div className={styles.formulario}>
                <label className={styles.texto}>Disco:</label>
                <input onChange={(e) => setDisco(e.target.value)} value={disco} className={styles.input} type="text" />
            </div>
            <div className={styles.formulario}>
                <label className={styles.texto}>Quantidade:</label>
                <input onChange={(e) => setQuantidade(e.target.value)} value={quantidade} className={styles.input} type="number" required />
            </div>
            <div className={styles.formulario}>
                <label className={styles.texto}>Imagem:</label>
                <input className={styles.inputImagem} type="file" />
            </div>
            <button className={styles.botao} type="submit">Enviar</button>
        </form>
        </>
    );
}

export default CardAddEquipamentos;