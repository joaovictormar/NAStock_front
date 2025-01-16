import styles from "./Search.module.css";

function Search({ onSearch }) {
    const valorDoInput = (event) => {
        const query = event.target.value; 
        onSearch(query); 
    };

    return (
        <div>
            <input
                className={styles.pesquisa}
                type="search"
                placeholder="Busque aqui"
                onChange={valorDoInput} 
            />
        </div>
    );
}

export default Search;
