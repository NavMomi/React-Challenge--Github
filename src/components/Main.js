import React,{Component} from 'react'
import axios from 'axios'
import User from '../components/User'
import Search from '../components/Search';
import Repo from '../components/Repo';

export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            search: "NavMomi",
            userInfo: {},
            reposInfo: [],
            clientId:'c05a4ff8ebe142c67179',
            clientSecret:'24520b9116ebfc984ba23077bc1038f887772e28',
        }
    }

componentDidMount = () => {
    this.onClick();
}

onClick = () => {
    this.state.search === "" ? alert('Text Field Cannot Be Empty!')
    :axios.get(`https://api.github.com/users/${this.state.search}?client_id=${this.state.clientId}&client_secret=${this.state.clientSecret}&sort=created`)
      .then(result => {
          this.setState({userInfo: result.data})
      })
      .catch(err => console.log(err))
      this.setState({search: ""})
    axios.get(`https://api.github.com/users/${this.state.search}/repos?client_id=${this.state.clientId}&client_secret=${this.state.clientSecret}&sort=created`)
    .then(result => {
        this.setState({reposInfo: result.data})
    })
    .catch(err => console.log(err))
}

onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
}

  render() {
       return (
      <div>
        <Search onChange={this.onChange} onClick={this.onClick} search={this.state.search} />
        <User userInfo={this.state.userInfo}/>
        <Repo reposInfo={this.state.reposInfo}/>
      </div>
    )
  }
}
