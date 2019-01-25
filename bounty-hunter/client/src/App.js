import React from 'react'

import { withBountyContext } from './DataProvider'
import Header from './Header'
import MainView from './MainView';
import BountyForm from './BountyForm'
import Loading from './Loading'

function App({loading}) {
  return (
    <div>
      <Header />
      <BountyForm />
      <Loading loading={loading}>
      <MainView />
      </Loading>
    </div>
  )
}

export default withBountyContext(App)
