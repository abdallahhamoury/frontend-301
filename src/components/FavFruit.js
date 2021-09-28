import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import CardList from './CardList';
import UpdateModel from './UpdateModel';
import './AllDataAPI.css';
class FavFruit extends React.Component {
  constructor() {
    super();
    this.state = {
      favDataList: [],
      selectedItem: {},
      shwoupdateFav: false,
    }
  }
  componentDidMount = async () => {
    let list = await axios.get(`${process.env.REACT_APP_SERVER}/getfav?email=${this.props.auth0.user.email}`);
    console.log(list.data);
    this.setState({
      favDataList: list.data,
    })
  }
  deletFav = async (id) => {
    console.log(id);
    let list = await axios.delete(`${process.env.REACT_APP_SERVER}/deleteFav/${id}?email=${this.props.auth0.user.email}`);
    this.setState({
      favDataList: list.data,
    })
  }
  shwoupdateFav = async (item) => {
    this.setState({
      shwoupdateFav: true,
      selectedItem: item,
    })
  }
  handelClose = async () => {
    this.setState({
      shwoupdateFav: false,
    })
  }
  update = async (selectedItem) => {
    let list = await axios.put(`${process.env.REACT_APP_SERVER}/updateFav/${selectedItem.id}?email=${this.props.auth0.user.email}`, selectedItem)
    this.setState({
      favDataList: list.data,
    })
  }
  render() {
    return (
      <>
        <h1>My Favorite Fruits</h1>
        <div className="container">
          {this.state.favDataList.map((item, index) => {
            return (
              <CardList key={index} item={item} deletFav={this.deletFav} shwoupdateFav={this.shwoupdateFav} />
            )
          })}
        </div>
        <UpdateModel show={this.state.shwoupdateFav} item={this.state.selectedItem} handelClose={this.handelClose} update={this.update} />
      </>

    )
  }
}

export default withAuth0(FavFruit);
