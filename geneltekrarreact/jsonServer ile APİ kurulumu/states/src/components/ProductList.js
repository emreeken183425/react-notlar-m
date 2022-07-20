import React, { Component } from 'react';
import {ListGroup, ListGroupItem } from 'reactstrap';

class ProductList extends Component {
    state={
        producties:[
            {productyId:1,ProductName:"elma"},
            {productyId:2,ProductName:"armut" }
        ],
        delivery:[
            {vehicleId:1,vehicleName:"tren"},
            {vehicleId:2,vehicleName:"Bus"}
        ],
        summary:[
            {summaryId:1,summaryName:"kitaplık"},
            {summaryId:2,summaryName:"raf"}
        ]
    }
    render() {
        return (
            <div>
                <h1>product list</h1>
                <ListGroup >
                    {this.state.producties.map(product=>(
                        <ListGroupItem key={product.productyId } >{product.ProductName} </ListGroupItem>
                    ) ) },
                    {
                        this.state.delivery.map(vehic=>(
                            <ListGroupItem key={vehic.vehicleId } >{vehic.vehicleName} </ListGroupItem>
                        ))
                    },
                    {
                        this.state.summary.map(summary=>(
                            <ListGroupItem key={summary.summaryId } >{summary.summaryName} </ListGroupItem>
                        ) )
                    }
                </ListGroup>
            </div>
        );
    }
}

export default ProductList;