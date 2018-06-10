import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

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

const resultsBarProps = {
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
};

const resultsBarPropsWithRatingSort = { ...resultsBarProps };

storiesOf('Results Bar', module).add('sort by rating', () => <ResultsBar user={resultsBarPropsWithRatingSort} />);

const resultsBarPropsWithReleaseDateSort = {
    ...resultsBarProps,
    sort: 'releaseDate',
};

storiesOf('Results Bar', module).add('sort by release date', () =>
    <ResultsBar user={
        resultsBarPropsWithReleaseDateSort
    } />);

const resultsBarPropsWithoutResults = {
    ...resultsBarProps,
    resultsCount: 0,
};
storiesOf('Results Bar', module).add('without results', () => <ResultsBar user={resultsBarPropsWithoutResults} />);

const resultsBarPropsWithFullItem = {
    ...resultsBarProps,
    fullItem: {
        isActive: true,
        filmData: {
            genres: ['Drama'],
        },
    },
};
storiesOf('Results Bar', module).add('with full item', () => <ResultsBar user={resultsBarPropsWithFullItem} />);

const filmItemProps = {
    id: 123456,
    title: 'Iron man',
    posterUrl: '',
    genres: ['Drama', 'Comedy'],
    year: 1999,
};
storiesOf('Film Item', module).add('without poster image', () => <FilmItem user={filmItemProps} />);

const filmItemPropsWithImage = {
    id: 123456,
    title: 'Iron man',
    posterUrl: './iron.jpg',
    genres: ['Drama', 'Comedy'],
    year: 1999,
};
storiesOf('Film Item', module).add('with poster image', () => <FilmItem user={filmItemPropsWithImage} />);

const FullFilmItemProps = {
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
};

storiesOf('Full Film Item', module).add('with all information', () => <FullFilmItem user={FullFilmItemProps} />);


const headerProps = {
    inputValue: 'Iron Man',
    fullItem: {
        isActive: false,
    },
    sort: 'rating',
    search: 'title',
};

storiesOf('Header', module).add('without results', () => <Header user={headerProps} />);


const headerPropsWithGenreSearch = {
    inputValue: 'Iron Man',
    fullItem: {
        isActive: false,
    },
    sort: 'rating',
    search: 'genres',
};

storiesOf('Header', module).add('with genre search', () => <Header user={headerPropsWithGenreSearch} hi={linkTo('Button')}/>);

