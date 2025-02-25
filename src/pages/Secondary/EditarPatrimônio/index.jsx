import { useEffect, useState } from "react";
import CardModificarPatrimonio from "../../../components/Others/CardModificarPatrimonio";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./EditarPatrimonio.module.css"

function EditarPatrimonio () {

    const [patrimonio, setPatrimonio] = useState("");
    const [local, setLocal] = useState("");
    const [obs, setObs] = useState("");
    const [mensagem, setMensagem] = useState("");

    const location = useLocation();
    const navigate = useNavigate();
    const { id } = location.state || {};

    useEffect(() => {
        const fetchPatrimonio = async () => {
            try {
                const response = await fetch(`http://localhost:5000/patrimonios/${id}`);
                if(response.ok) {
                    const data = await response.json();
                    setPatrimonio(data.patrimonio || "");
                    setLocal(data.local || "");
                    setObs(data.obs || "");
                }
                else {
                    setMensagem("Erro ao carregar dados do patrimonio")
                }
            }
            catch (error) {
                console.error("Erro ao conectar com a API:", error);
                setMensagem("Erro ao conectar com a API.");
            } 
        };
        
        if(id) {
            fetchPatrimonio();
        }

    }, [id]);

    const editarPatrimonio = async (e) => {
        e.preventDefault();

        const patrimonioEditado = {
            ...(patrimonio && { patrimonio }),
            ...(local && { local }),
            ...(obs && { obs })
        };

        try {
            const response = await fetch(`http://localhost:5000/patrimonios/${id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(patrimonioEditado)
            });

            if (response.ok) {
                setMensagem("Patrimonio editado com sucesso!");
                setTimeout(() => {
                    navigate("/");
                }, 2000);
            } else {
                setMensagem("Erro ao editar patrimonio.");
            }
        } catch (error) {
            console.error("Erro ao conectar com a API:", error);
            setMensagem("Erro ao conectar com a API.");
        }
    };


    return (
        <section className={styles.editarPatrimonio}>
             {mensagem && <h1 className={styles.mensagem}>{mensagem}</h1>}
             <CardModificarPatrimonio
             patrimonio={patrimonio}
             setPatrimonio={setPatrimonio}
             local={local}
             setLocal={setLocal}
             obs={obs}
             setObs={setObs}
             enviarFormulario = {editarPatrimonio}
             />
        </section>
    )
}

export default EditarPatrimonio;