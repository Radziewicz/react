import React, { Component} from 'react';
import './App.css';
import Product from './Product';

class App extends Component {
  state = {
    products: []
  }

  componentDidMount () {
    fetch('data/products.json')
    .then(response => response.json() )
    .then(data => {
      this.setState({
        products: data.products
      })
    } )
  }

  render () {
    const products = this.state.products.map(product => (
      <Product key={product.id} name={product.title} price={product.price} image={product.src}/>
    ))
    return (
      <div className="container">
       {products}
      </div>
    );
  }
}

export default App;
