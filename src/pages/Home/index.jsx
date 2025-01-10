import styles from "./Home.module.css";
import Search from "../../components/Others/Search";
import CardEquipamentos from "../../components/Others/CardEquipamentos";

function Home() {
    return (
        <>
            <section className={styles.home}>
                <div className={styles.homeSuperior}>
                    <Search/>
                    <button className={styles.botao}>Adicionar Equipamento</button>
                </div>
                <CardEquipamentos 
                    className={styles.card}
                    categoria="Notebook" 
                    marca="Dell" 
                    modelo="XPS 13" 
                    processador="Intel Core i7" 
                    memoria="16GB RAM" 
                    disco="512GB SSD" 
                    quantidade="10 unidades" 
                    imagemTexto="Imagem do Dell XPS 13"
                />
                <CardEquipamentos 
                    className={styles.card}
                    categoria="Desktop" 
                    marca="HP" 
                    modelo="Pavilion" 
                    processador="AMD Ryzen 5" 
                    memoria="8GB RAM" 
                    disco="1TB HDD" 
                    quantidade="5 unidades" 
                    imagemTexto="Imagem do HP Pavilion"
                />
                <CardEquipamentos 
                    className={styles.card}
                    categoria="Monitor" 
                    marca="Samsung" 
                    modelo="Curved 24"
                    quantidade="15 unidades" 
                    imagemTexto="Imagem do Monitor Samsung Curvo"
                />
                <CardEquipamentos 
                    className={styles.card}
                    categoria="Impressora" 
                    marca="Epson" 
                    modelo="L3150" 
                    quantidade="8 unidades" 
                    imagemTexto="Imagem da Impressora Epson"
                />
                <CardEquipamentos 
                    className={styles.card}
                    categoria="Tablet" 
                    marca="Apple" 
                    modelo="iPad Pro" 
                    processador="Apple M1" 
                    memoria="8GB RAM" 
                    disco="128GB SSD" 
                    quantidade="12 unidades" 
                    imagemTexto="Imagem do iPad Pro"
                />
            </section>
        </>
    )
}

export default Home;
