import React, { useState } from 'react';
import ErrorComponent from './ErrorComponent';

const SearchComponent = ({setSearch}) => {
    const [searchWord, setSearchWord] = useState('');
    const [error, setError] = useState(false);

    const onSubmit = e => {
        e.preventDefault();

        if (searchWord === '') {
            setError(true);
            return;
        }
        setError(false);
        setSearch(searchWord);
    }

    return ( 
        <form onSubmit={onSubmit}>
            <div className="row text-center mt-4">
                <div className="form-group col-md-10">
                    <input 
                    type="text" 
                    className="form-control"
                    placeholder="Busca una imagen, Ej: Fútbol"
                    onChange={e => setSearchWord(e.target.value)}/>
                </div>
                <div className="form-group col-md-2">
                    <input 
                    type="submit" 
                    className="btn btn-danger"
                    value="Buscar"/>
                </div>
            </div>
            {(error) ? <ErrorComponent message="Agrega un término de búsqueda"/> : null}
        </form>
     );
}
 
export default SearchComponent;
