import React, { Component } from 'react';
import api from '../../services/api'; // importando nossa api
// import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';

import './styles.css';

export default class Index extends Component {

    state = {
        musics: [],
        musicsInfo: {}, // vai guardar as informações do objeto (total de páginas, total de itens, etc)
        page: 1
    }

    // é executada assim que o componente é montado na tela
    componentDidMount(){
        this.loadInfo();
    }

    // precisamos fazer uso de arrow-function aqui para termos acesso aos outros métodos da classe com o 'this'
    loadInfo = async (page = 1) => {
        const musicsResponse = await api.get(`/musics?page=${page}`);

        const {docs, ...musicsInfo}  = musicsResponse.data;

        this.setState({musics: docs, musicsInfo, page})
        
        console.log(docs);
    }


    render(){

        const {musics, musicsInfo, page} = this.state; // deixando a sintaxe mais curta para usar o estado na página


        return(

            <div className="content">
                <div className="artist-list">
                    
                    <h2>Principal resultado</h2>

                    <p className="em_dev">Em desenvolvimento</p>
                    
                    <h2>Músicas</h2>


                    {/* vai executar o que estiver dentro da função para cada música encontrada */}
                    {musics.map(music => ( 
                        <article key={music._id}>
                            <strong>{music.name}</strong>
                            {/* <p>Música • {music.artist.name} • Álbum • 4:58</p> */}
                            <p>Música • {music.artist.name}</p>

                            <Link to={`/musics/${music.videoId}`} >Acessar</Link>
                        </article>
                    ))}

                    <h2>Artistas</h2>

                    <p className="em_dev">Em desenvolvimento</p>

                    <h2>Álbuns</h2>

                    <p className="em_dev">Em desenvolvimento</p>

                </div>
            </div>
            
        )
    }
}