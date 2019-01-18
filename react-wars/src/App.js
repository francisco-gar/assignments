import React from 'react';
import Header from './Header';
import MainView from './MainView';
import Footer from './Footer';
import CharactersData from './CharactersData';
import Loading from './Loading';
import ErrorHandler from './ErrorHandler';

const App = () => {
  return (
    <div>
      <Header />
      <CharactersData>
        {({ characters, loading, errMsg }) => (
          <Loading loading={loading}>
            <ErrorHandler errMsg={errMsg}>
              <MainView characters={characters} />
            </ErrorHandler>
          </Loading>
        )}
      </CharactersData>

    </div>
  )
}

export default App;