import React, {Component} from 'react'
import '../assets/index.less'
import MenuLink from '../components/menu/menu'
import {
    HashRouter as Router,//提供一个路由容器
    Route,//单条路由
    Switch
} from 'react-router-dom'
import Home from './Home/Home'
import Live from './Live/Live'
import Series from './Series/Series'
import Public from './Public/Public'
import Search from '../components/search/search'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as Actions from '../store/actions/useInfo'

 class App extends React.Component {
    constructor() {
        super();
        this.state = {
            done: false
        }
    }
    componentDidMount() {
        this.setState({
            done: true
        });
        console.log(this.props.userActions);
    }
    render() {
        return (
            <Router>
                <div>
                    {this.state.done ?
                            <Switch>
                            <Route path='/' exact={true} component={Home}/>
                            <Route path='/series' component={Series}/>
                            <Route path='/public' component={Public}/>
                            <Route path='/live' component={Live}/>
                            <Route path='/search' component={Search}/>
                            </Switch>
                         : <div>正在加载。。。</div>}
                </div>
            </Router>
        )
    };
}
export default connect(
    state => {//mapStateToProps
        return {
        }
    },
    dispatch => {//mapDispatchToProps
        return {
            userActions:bindActionCreators(Actions,dispatch)
        }
    }
)(App)