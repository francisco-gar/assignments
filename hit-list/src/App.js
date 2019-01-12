import React from 'react'
import Header from './Header'
import HitsData from './HitsData'
import HitList from './HitList'
import ErrorHandler from './ErrorHandler'
import Loading from './Loading'


function App() {
  return (
    <div>
      <Header />
      <HitsData>
        {({ hits, loading, errMsg }) => (
          <Loading loading={loading}>
            <ErrorHandler errMsg={errMsg}>
              <HitList hits={hits} />
            </ErrorHandler>
          </Loading>
        )}
      </HitsData>
    </div>
  )
}

export default App
