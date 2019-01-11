import React from 'react';
import CharactersData from './CharactersData'
import Loading from './Loading';
import ErrorHandler from './ErrorHandler';
import CharacterList from './CharacterList';
// import Interval from './Interval';

const App = () => {
  return (
    <div>
      {/* <Interval/> */}
      <CharactersData>
      {({ characters, loading, errMsg }) => (
        <Loading loading={loading}>
          <ErrorHandler errMsg={errMsg}>
            <CharacterList characters={characters} />
          </ErrorHandler>
        </Loading>
      )}
      </CharactersData>
    </div>
  )
}

export default App;
