import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Dashboard } from './component/dashboard';
import { InputForm } from './component/InputForm';

const routes = [
  {
    path: '/:id',
    component: InputForm,
    exact: true,
    breadcrumbName: "Input",
    // routes: [
    //   {
    //     path: '/:id/dashboard',
    //     component: Dashboard,
    //     breadcrumbName: "Dashboard"
    //   }
    // ]
  },
  {
    path: '/:id/dashboard',
    component: Dashboard,
    breadcrumbName: "Dashboard"
  }
]

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
            {
              routes.map((route, i) => {
                const { path, exact, routes } = route;
                return(
                  <Route
                    key={i}
                    path={path}
                    exact={exact}
                    render={(routeProps) => (
                      <route.component routes={routes} {...routeProps}/>
                    )}
                  />
                )
              })
            }
            {/* <Route path="/:id" exact component={InputForm}/>
            <Route path="/:id/dashboard" component={Dashboard}/> */}
        </div>
    );
  }
}

export default App;
