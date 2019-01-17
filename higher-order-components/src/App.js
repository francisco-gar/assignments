import React from 'react'

import Button, { OkButton, XButton } from './Button'

function App() {
  return (
    <div>
      <Button>
        default
      </Button>
      <XButton>
        X
      </XButton>
     <OkButton>
       Ok
     </OkButton>
    </div>
  )
}

export default App;