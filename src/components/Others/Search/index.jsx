import styles from "./Search.module.css";

function Search () {

    return (
            <div>
                <input className={styles.pesquisa} type="search" placeholder="Busque aqui"/>
            </div>
    )

}

export default Search;


