import React from 'react'
import Services from './Services'

function ServicesContainer class Services extends Component() {
   constructor(){
       super();
       this.state = [
           Services: [
               {
                   _id: 'a',
                   name: 'massage therapy',
                   description: 'with hot rocks',
                   price: '500',
                   provider: 'nancy'
               }
           ]
       ]
   }
   render(){
    const { services } = this.state;
    return(
        <Services />
    )
   }
}

export default ServicesContainer
