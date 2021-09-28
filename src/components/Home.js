import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Favcard from './FavCard'
import { withAuth0 } from '@auth0/auth0-react';
import './AllDataAPI.css';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      allDataList: [],
    }
  }
  componentDidMount = async () => {
    let list = await axios.get(`${process.env.REACT_APP_SERVER}/getDataFromApi`);
    console.log(list.data);
    this.setState({
      allDataList: list.data,
    })
  }

  addToFavorites = async (item) => {
    await axios.post(`${process.env.REACT_APP_SERVER}/addFav?email=${this.props.auth0.user.email}`, item);
  }


  render() {
    return (
      <>
        <h1>API Fruits</h1>

        <div className="container" >
          {this.state.allDataList.map((item, index) => {
            return (
              <Favcard key={index} item={item} addToFavorites={this.addToFavorites} />
            )
          })}

        </div>
      </>
    )
  }
}

export default withAuth0(Home);
