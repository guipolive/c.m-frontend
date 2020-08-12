import React from 'react';

import {Link} from 'react-router-dom';

import './styles.css';

function Artists() {
    return(
        <div className="content">
                <div className="artist-list">

                    <article>
                        <strong>O Terno</strong>
                        {/* <p>Música • Artista • Álbum • 4:58</p> */}
                        {/* <p>{music.artist.name} • Música</p> */}
                        <p>Artista • 13 Covers • #20 Em artistas</p>
                        <a target="_blank" href="https://www.youtube.com/channel/UCtnJIUHQ9jucYJRaVL3qz2g" >Acessar</a>
                    </article>

                </div>
            </div>
    )
}

export default Artists;