import React, {useEffect} from 'react';
import './App.css';
import { connect } from 'react-redux';
import {getCoins} from './actions';
import CreateCard from './CreateCard';
import CardList from './CardList';


const App = ({getCoins, coinData, isFetching, error}) => {
  useEffect(() => {
    getCoins();
  }, [getCoins]);

  if (isFetching) {
    return <h2>Our colony of worker ants is getting that data for you!</h2>
  }

  return (
    <div className="App">
      <h2>Hi my name is Mike and I collect Pokemon cards want to see??</h2>
      <div className="card-list">
      {coinData.map(item => {
        return(
          <CreateCard 
          className="pokemon-card"
          name={item.name}
          image={item.imageUrl}
          types={item.types}
          />
        )
      })}
      </div>

      {/* <CardList /> */}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    coinData: state.coinData,
    isFetching: state.isFetching,
    error: state.error
  };
}

export default connect(
  mapStateToProps, {getCoins}
)(App);