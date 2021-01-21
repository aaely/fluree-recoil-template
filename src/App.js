import React from 'react'
import logo from './logo.svg';
import './App.css';
import { useRecoilValue } from 'recoil'
import { getCollections, getPredicates } from './Recoil/querySelectors'


function App() {
  const myCollections = useRecoilValue(getCollections)
  const myPredicates = useRecoilValue(getPredicates)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        If Connected to a FlureeDB instance, all collections and predicates will render below.
        </p>
        <p>
          This is a basic template for FlureeDB using Recoil to manage queries and global state.
        </p>
        <a
          className="App-link"
          href="https://s3.amazonaws.com/fluree-releases-public/fluree-latest.zip"
          target="_blank"
          rel="noopener noreferrer"
        >
         Download the Latest Version of FlureeDB 
        </a>
        <h3 style={{textAlign: 'center'}} >Current List of Collections</h3>
        {myCollections.map(collection => {
          return(
            <p>{collection['_collection/name']}</p>
          )
        })}
        <br />
        <h3 style={{textAlign: 'center'}} >Current List of Predicates</h3>
        {myPredicates.map(predicate => {
          return(
            <p>{predicate['_predicate/name']}</p>
          )
        })}
      </header>
    </div>
  );
}

export default App;
