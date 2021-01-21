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
          This is a basic template for FlureeDB using Recoil to manage queries and global state.
        </p>
        <h1 style={{textAlign: 'center'}}>Getting Started</h1>
        <ol>
          <li>Download the latest version of FlureeDB here:</li>
            <a
            className="App-link"
            href="https://s3.amazonaws.com/fluree-releases-public/fluree-latest.zip"
            target="_blank"
            rel="noopener noreferrer"
            style={{marginTop: '3%'}}
            >
            Download the Latest Version of FlureeDB 
            </a>
          <li style={{marginTop: '3%'}} >Once that is downloaded and running at <code>http://localhost:8080</code></li>
          <ol>
            <li style={{marginTop: '3%'}}>
              Find flureeFetch.js in the src/utils folder
            </li>
            <li style={{marginTop: '3%'}}>
              Update the fullUri with your ledger name: ie <code>account name/db name</code> 
            </li>
          </ol>
        </ol>
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
