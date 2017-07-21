import React, {Component} from 'react'
import './header.less'
import MenuLink from '../menu/menu'

import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom'
export default class Header extends Component {

    render() {
        return (<div className="container">
            <div className="header">
                <img className="logo" src="http://m.mysipo.com/home/images/logo.png" alt=""/>
                <a href="http://user.mysipo.com/memberv1/login?tourl=http://m.mysipo.com/index/index/course">
                    <span>登录</span>
                    <div className="icon">
                        <img src="http://m.mysipo.com/home/images/avatar_default.png" alt=""/>
                    </div>
                </a>
            </div>
            <div className="search">
                <Link to='/search'>
                <div className="input"><i className="iconfont  icon-sousuo"></i><input type="text" placeholder="课程搜索"/></div>
                <div className="sub"><i className="iconfont icon-gengduo-copy-copy"></i><span>筛选</span></div>
                </Link>
            </div>
            <div className="nav">
                <MenuLink activeOnlyWhenExact={true} to="/" label="全部课程" />
                <MenuLink activeOnlyWhenExact={true} to="/live" label="直播课程" />
                <MenuLink activeOnlyWhenExact={true} to="/series" label="系列课程" />
                <MenuLink activeOnlyWhenExact={true} to="/public" label="公开课" />
            </div>
        </div>)
    }
}