import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Map } from 'immutable';

import { Button, Welcome } from '@storybook/react/demo';

import { EmptyResults } from './empty-page/empty-results';
import { Footer } from './footer/footer';
import { Netflixroulette } from './netflixroulette/netflixroulette';
import { ResultsBar } from './results-bar/results-bar';
import { FilmItem } from './film-item/film-item';
import { FullFilmItem } from './full-film-item/full-film-item';
import { NotFoundPage } from './not-found-page/not-found-page';
import { Header } from './header/header';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
    .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
    .add('with some emoji', () => (
        <Button onClick={action('clicked')}>
            <span role="img" aria-label="so cool">
                😀 😎 👍 💯
            </span>
        </Button>
    ));

storiesOf('Empty results', module).add('default', () => <EmptyResults />);
storiesOf('Footer', module).add('default', () => <Footer />);
storiesOf('Netflixroulette', module).add('default', () => <Netflixroulette />);
storiesOf('Not found page', module).add('default', () => <NotFoundPage />);

const resultsBarProps = Map({
    inputValue: 'iron man',
    sort: 'rating',
    search: 'title',
    resultsCount: 20,
    fullItem: {
        isActive: false,
        filmData: {
            genres: [],
        },
    },
});

const resultsBarPropsWithRatingSort = { ...resultsBarProps };
const resultsBarPropsWithReleaseDateSort = resultsBarProps.set('sort', 'releaseDate');
const resultsBarPropsWithoutResults = resultsBarProps.set('resultsCount', 0);
const resultsBarPropsWithFullItem = resultsBarProps.set('fullItem', {
    isActive: true,
    filmData: {
        genres: ['Drama'],
    },
});

const filmItemProps = Map({
    id: 123456,
    title: 'Iron man',
    posterUrl: '',
    genres: ['Drama', 'Comedy'],
    year: 1999,
});

const filmItemPropsWithImage = filmItemProps.set('posterUrl', './iron.jpg');

const FullFilmItemProps = Map({
    fullItem: {
        filmData: {
            vote_average: 9.4,
            inputValue: 'Iron Man',
            release_date: '2012-12-12',
            runtime: 125,
            overview: 'Owerview film',
            poster_path: '',
            title: 'Iron Man',
            tagline: 'Tagline',
        },
    },
    inputValue: 'Iron Man',
    search: 'title',
    sort: 'rating',
});

const headerPropsWithTitleSearch = Map({
    inputValue: 'Iron Man',
    fullItem: {
        isActive: false,
    },
    sort: 'rating',
    search: 'title',
});

const headerPropsWithGenreSearch = headerPropsWithTitleSearch.set('search', 'genres');

storiesOf('Results Bar', module).add('sort by rating', () => <ResultsBar user={resultsBarPropsWithRatingSort} />);

storiesOf('Results Bar', module).add('sort by release date', () =>
    <ResultsBar user={
        resultsBarPropsWithReleaseDateSort
    } />);

storiesOf('Results Bar', module).add('without results', () => <ResultsBar user={resultsBarPropsWithoutResults} />);

storiesOf('Results Bar', module).add('with full item', () => <ResultsBar user={resultsBarPropsWithFullItem} />);

storiesOf('Film Item', module).add('without poster image', () => <FilmItem user={filmItemProps} />);

storiesOf('Film Item', module).add('with poster image', () => <FilmItem user={filmItemPropsWithImage} />);

storiesOf('Full Film Item', module).add('with all information', () => <FullFilmItem user={FullFilmItemProps} />);

storiesOf('Header', module).add('with title search', () => <Header user={headerPropsWithTitleSearch} />);

storiesOf('Header', module).add('with genre search', () => <Header user={headerPropsWithGenreSearch} />);
