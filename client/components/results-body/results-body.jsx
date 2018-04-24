import React from 'react';
import ReactDOM from 'react-dom';
import { ResultsBar } from '../results-bar/results-bar';
import { FilmItem } from '../film-item/film-item';

import './results-body.scss';


export class ResultsBody extends React.Component {
    render() {
        return (
            <div className="results-body">
                <FilmItem title="FOUR ROOMS" genre="Drama" year={1992}/>
                <FilmItem title="FOUR ROOMS" genre="Drama" year={1992}/>
                <FilmItem title="FOUR ROOMS" genre="Drama" year={1992}/>
                <FilmItem title="FOUR ROOMS" genre="Drama" year={1992}/>
                <FilmItem title="FOUR ROOMS" genre="Drama" year={1992}/>
                <FilmItem title="FOUR ROOMS" genre="Drama" year={1992}/>
                <FilmItem title="FOUR ROOMS" genre="Drama" year={1992}/>
                <FilmItem title="FOUR ROOMS" genre="Drama" year={1992}/>
                <FilmItem title="FOUR ROOMS" genre="Drama" year={1992}/>
                <FilmItem title="FOUR ROOMS" genre="Drama" year={1992}/>
                <FilmItem title="FOUR ROOMS" genre="Drama" year={1992}/>
                <FilmItem title="FOUR ROOMS" genre="Drama" year={1992}/>
                <FilmItem title="FOUR ROOMS" genre="Drama" year={1992}/>
            </div>
        );
    }
};