import React from 'react';
import { Footer } from '../../components/footer/footer';
import { SearchContainer } from '../../components/search-container/search-container';
import { FullFilmItem } from '../../components/full-film-item/full-film-item';

import './core.scss';
import '../../mixins.scss';

export class Core extends React.Component {
    render() {
        return (
            <div className="core-page">
                <SearchContainer/>
                <FullFilmItem/>
                <Footer/>
            </div>
        );
    }
}
