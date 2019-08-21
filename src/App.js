import React, { useState, useEffect } from 'react';
import SearchComponent from './components/SearchComponent';
import ImagesListComponent from './components/ImagesListComponent';
import axios from 'axios';

function App() {
  const initialState = {
    actualPage: 1,
    totalPages: 1
  }

  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);
  const [paginatorItems, setPaginatorItems] = useState(initialState);

  useEffect(() => {
    const getData = async () => {
      if (search === '') return null;

      const imgNumberPage = 30;
      const pageActual = paginatorItems.actualPage;
      const key = '13374800-d1239467dfd09e977bbe03c47';
      const url = `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${imgNumberPage}&page=${pageActual}`;

      const result = await axios.get(url);
      setImages(result.data.hits);

      const pagesTotal = Math.ceil(result.data.totalHits / imgNumberPage);
      
      setPaginatorItems ({
        ...paginatorItems,
        totalPages: pagesTotal
      });

      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({behavior:'smooth', block: 'start'});
    }
    getData();
  }, [search, paginatorItems.actualPage]);

  const beforePage = () => {
    let newActualPage = (paginatorItems.actualPage) - 1;

    setPaginatorItems ({
      ...paginatorItems,
      actualPage: newActualPage
    });
  }

  const nextPage = () => {
    let newActualPage = (paginatorItems.actualPage) + 1;

    setPaginatorItems ({
      ...paginatorItems,
      actualPage: newActualPage
    });
  }

  return (
    <div className="app container-fluid">
      <div className="jumbotron">
        <h2 className="lead text-center">Buscador de Imágenes</h2>
        <SearchComponent setSearch={setSearch}/>
      </div>
      <div className="row justify-content-center">
        <ImagesListComponent images={images}/>
        {(paginatorItems.actualPage <= 1) ? null : (
          <button onClick={beforePage} type="button" className="btn btn-info mr-1">&laquo; Anterior</button>
        )}
        {(paginatorItems.actualPage === paginatorItems.totalPages) ? null : (
          <button onClick={nextPage} type="button" className="btn btn-info mr-1">Siguiente &raquo;</button>
        )}
      </div>
    </div>
  );
}

export default App;
