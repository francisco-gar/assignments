import React from 'react'
import { Link, Route } from 'react-router-dom'
import ServiceDetail from './ServiceDetail';


function Services({ services }) {
    const serviceLinks = services.map((service => (
        <li>
            <Link to={`/services/${services._id}`}>{services.name}</Link>
            <link to = [{}]
            pathname: `services/${service._id}`,
            state: {service}
        </li>
    )));


    return (
        <div>
            <h3>services</h3>
            <ul>
                <li>

                    {serviceLinks}
                </li>

            </ul>
            <Route path='services/:id' component={({ match: { params: { id } } }) = {
                const foundService = services.find(service => service._id === id);
                return <ServiceDetail> {...foundService}
                } />
        </div>
            )
        }
        
        export default Services
