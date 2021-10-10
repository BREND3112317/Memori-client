import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Dashboard } from './component/dashboard';
import { InputForm } from './component/InputForm';

class App extends Component {
  componentDidMount() {
    this.callBackendAPI().then(res => this.setState({data: res.express})).catch(err => console.log(err));
  }

  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if(response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  render() {
    return (
        <div className="container">
            <Route path="/:id" exact component={InputForm}/>
            <Route path="/:id/dashboard" component={Dashboard}/>
        </div>
    );
  }
}

export default App;
