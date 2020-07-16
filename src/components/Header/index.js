import React, {Component, useState} from 'react';
import './styles.css';
import {Link} from 'react-router-dom';

import { FiMenu, FiPlusSquare, FiBell, FiUser, FiHome } from 'react-icons/fi';
import { IconContext } from 'react-icons';

// import logoImg from '../../assets/logo.jpeg';

export default class Header extends Component{

    constructor() {
        super();
        this.state = {
            search: ''
        };
    }

    handleClickUser(){
        console.log('teste');
    }
    
    handleSearch(e){
        this.setState({ 
            search: e.target.value
        })

        console.log(this.state.search);
        // console.log('chegou aqui');
    }


    render() {
        return(
            <header>
                <IconContext.Provider value={{className:"icones-header"}} >
                    <div className="content">
                        <ul>
                            <li><FiMenu/></li>
                            <li><Link to="/"><FiHome/></Link></li>
                            <li>{this.state.search}</li>
                        </ul>

                        <div className="search-bar">
                            <input onChange={this.handleSearch.bind(this)} type="text" placeholder="Pesquise um cover, música ou artista"/>
                        </div>

                        <ul>
                            <li><FiPlusSquare/></li>
                            <li><FiBell /></li>
                            <li><FiUser onClick={this.handleClickUser}/></li>
                        </ul>
                    </div>
                </IconContext.Provider>
            </header>
        )
    }
}