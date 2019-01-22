import React from 'react'

import Header from './Header'
import AddTodoForm from './AddTodoForm'
import MainView from './MainView'
import Loading from './Loading'
import {withTodoContext}  from './TodoProvider'


function App({loading}) {
  return (
    <div>
      <Header />
      <AddTodoForm />
      <Loading loading={loading}>
      <MainView />
      </Loading>
    </div>
  )
}

export default withTodoContext(App)
