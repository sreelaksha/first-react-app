import React, { Component, Suspense } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

//import Posts2 from './containers2/Posts2';
import User2 from './containers2/User2';
import Welcome2 from './containers2/Welcome2';

const Posts2 = React.lazy(() => import('./containers2/Posts2'));


class App2 extends Component {
    state ={
        showPosts : false,
    }

    modeHandler = () => {
        this.setState(prevState => {
            return ({showPosts: !prevState.showPosts});
        });
    };
  render() {

    return (
            <React.Fragment>
                    <button onClick = { this.modeHandler }> Toggle Button </button>
                    { this.state.showPosts ? (
                            <Suspense fallback = {<div>Loading... </div>}>
                                 <Posts2 />
                            </Suspense>
                            ) : (
                                  <User2 />
                                 )}

            </React.Fragment>
        /*<BrowserRouter>
                <React.Fragment>
                <nav>
                    <NavLink to = "/user2"> User Page </NavLink> &nbsp;
                    <NavLink to = "/posts2"> Posts Page </NavLink> &nbsp;
                </nav>
                     <Route path ='/' component = {Welcome2} exact />
                      <Route path ='/user2' component = {User2} />
                      {*//*} <Route path ='/posts2' component = {Posts2} /> *//*}
                      <Route path="/posts2" render = {() => (
                            <Suspense fallback = {<div>Loading... </div>}>
                                <Posts2 />
                            </Suspense>
                      )}/>
                 </React.Fragment>
         </BrowserRouter>*/
    );
  }
}

export default App2;