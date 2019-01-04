import React from 'react';

import Boxes from './Boxes';

const box1 = {
  title: "aljsadf",
  subtitle: 'fn;ansdf',
  information: 'afnjasn asdf af ewf  frge gregre',
  color: 'red'
}

const box2 = {
  title: 'fknb',
  subtitle : 'yiyo tefu',
  information: 'qptnmbvutnjg b bgnw biwda dk k ookk hbvwq',
  color: 'blue'
}

const box3 = {
  title: 'how',
  subtitle: 'now',
  information: 'brown cow',
  color: 'yellow'
}

const box4 = {
  title: 'unique',
  subtitle: 'New',
  information: 'Yorrrrrrrrrrrrrrrrrrrrrrrk',
  color: 'purple'
}

const box5 = {
  title: 'oogity',
  subtitle: 'boogity',
  information: 'glueeeeeeeeeeeee',
  color: 'turquoise'
}

const box6 = {
  title: 'green',
  subtitle: 'eggs',
  information: 'and ham',
  color: 'green'
}

const box7 = {
  title: 'cumulo',
  subtitle: 'nimbus',
  information: 'cirro stratus',
  color: 'lightBlue'
}

const box8 = {
  title: 'Outdoor',
  subtitle: 'Research',
  information: 'afja;fhaf b fbaiwfb birbgitvbbvurbv e',
  color: 'magenta'
}

const box9 = {
  title: 'hydro',
  subtitle: 'flask',
  information: 'hot or cold',
  color: 'pink'
}

const box10 = {
  title: 'lights',
  subtitle: 'electricity',
  information: 'lamplamplamp',
  color: 'salmon'
}

const App = () => (
  <div>
    <Boxes {...box1}/>
    <Boxes {...box2}/>
    <Boxes {...box3}/>
    <Boxes {...box4}/>
    <Boxes {...box5}/>
    <Boxes {...box6}/>
    <Boxes {...box7}/>
    <Boxes {...box8}/>
    <Boxes {...box9}/>
    <Boxes {...box10}/>
  </div>
)
  

export default App;


