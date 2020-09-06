import React from 'react';
import Row from './Row'
import './App.css';
import requests from './requests';
import Banner from './Banner'

function App() {
  return (<div className="app">
    <Banner />
    <Row title="NETFLIX ORIGINALS" isLargeRow fetchUrl={requests.fetchNetflixOriginals} />
    <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
    <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
    <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
    <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
    <Row title="Romantic Movies" fetchUrl={requests.fetchTrending} />
    <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
  </div>
  );
}


export default App;
