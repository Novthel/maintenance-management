import './search.scss'

const SearchFile = ({ setQuery }) => {
    return (
        <div className="container-search">
            <input  
                className="input-search" 
                placeholder='Search...'
                onChange={ (e)=> setQuery(e.target.value.toLowerCase())}
            />
        </div>
    ); 
}

export default SearchFile;
