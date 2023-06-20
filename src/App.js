import {Component} from 'react'
import UserProfile from './components/UserProfile'

import './App.css'

const initialUserDetails = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
]

class App extends Component {
  state = {
    searchInput: '',
    userDetails: initialUserDetails,
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  deteleUser = uniqueNo => {
    const {userDetails} = this.state
    const userDeleteResult = userDetails.filter(
      eachItem => eachItem.uniqueNo !== uniqueNo,
    )
    this.setState({userDetails: userDeleteResult})
  }

  render() {
    const {searchInput, userDetails} = this.state
    const userDetailsResults = userDetails.filter(eachItem =>
      eachItem.name.includes(searchInput),
      )
      

    return (
      <div className="app-container">
        <h1 className="title">Users List</h1>
        <input type="search" onChange={this.onChangeSearchInput} />
        <ul className="list-container">
                {userDetailsResults.length===0?<h1>No user found</h1>:userDetailsResults.map(eachUser => (
            <UserProfile
              userDetails={eachUser}
              deleteUser={this.deteleUser}
              key={eachUser.uniqueNo}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
