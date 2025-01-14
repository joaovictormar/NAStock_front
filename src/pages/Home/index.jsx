import styles from "./Home.module.css";
import {Link} from "react-router-dom";
import { useEffect, useState } from "react";
import Search from "../../components/Others/Search";
import CardEquipamento from "../../components/Others/CardEquipamento";

function Home() {
    const [equipamentos, setEquipamentos] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/equipamentos")
        .then((response) => response.json())
        .then((data) => setEquipamentos(data))
        .catch((error) => console.log(`Erro ao buscar equipamentos: ${error}`))
    }, []); 

    return (
            <section className={styles.home}>
                <div className={styles.homeSuperior}>
                    <Search/>
                    <Link to="addequipamento" className={styles.link}>Adicionar Equipamento</Link>
                </div>
                {equipamentos.length > 0 ? (
                    equipamentos.map((equipamento) => (
                        <CardEquipamento 
                        id={equipamento.id}
                        categoria={equipamento.categoria}
                        marca={equipamento.marca}
                        modelo={equipamento.modelo}
                        processador={equipamento.processador}
                        memoria={equipamento.memoria}
                        disco={equipamento.disco}
                        quantidade={equipamento.quantidade}
                        imagemTexto={equipamento.modelo} /> 
                        )
                    )) 
                    :
                    (
                        <h1>Carregando equipamentos...</h1>
                    )
                }
            </section>
    )
}

export default Home;