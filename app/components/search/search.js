import React, {Component} from 'react'
import './index.less'
export default class Search extends Component {
    back(){
this.props.history.push('/')
    }
    clear(){
        console.log(this.refs.search);
        this.refs.search.value=''
    }
    search(e){
        if(e.keyCode !== 13){
            return;
        }
this.props.history.push('/search/keyword='+this.refs.search.value)
    }
    render() {
        return (<div>


            <div className="s-header">
                <div className="s-box-cnt">
<div className="form">
                        <div className="input">
                            <i className="iconfont icon-sousuo"></i>
                            <input onKeyUp={this.search.bind(this)} ref='search' type="text" name="search" placeholder="输入课程名称"/>
                            <i className="iconfont icon-guanbi1 icon-close" onClick={this.clear.bind(this)}></i>
                        </div>
                            <div className="s-cancel" onClick={this.back.bind(this)}>取消</div>
</div>
                </div>
            </div>


        </div>)
     }
    }