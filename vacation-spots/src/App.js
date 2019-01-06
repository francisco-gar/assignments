import React from 'react';

import Card from './Card';

let cards = [
  {
    place: "Meridian, Idaho",
    price: '40',
    timeToGo: "Spring"
  }, {
    place: "Cancun",
    price: '900',
    timeToGo: "Winter"
  }, {
    place: "China",
    price: '1200',
    timeToGo: "Fall"
  }, {
    place: "Russia",
    price: '1100',
    timeToGo: "Summer"
  }, {
    place: "Lebanon",
    price: '400',
    timeToGo: "Spring"
  }
]

const App = () => {
  const cardComponents = cards.map((card, i) => <Card key={i}{...card} />);
  return (
    <div>
      {cardComponents}
    </div>)
}

export default App;