import React, {Component} from 'react'
import './index.less'
export default class Search extends Component {
    back(){
this.props.history.go(-1)
    }
    clear(){
        console.log(this.refs.search);
        this.refs.search.value=''
    }
    search(){

    }
    render() {
        return (<div>


            <div className="s-header">
                <div className="s-box-cnt">
                    <form action="#">
                        <div className="input">
                            <i className="iconfont icon-sousuo"></i>
                            <input onKeyUp={this.search.bind(this)} ref='search' type="text" name="search" placeholder="输入课程名称"/>
                            <i className="iconfont icon-guanbi1 icon-close" onClick={this.clear.bind(this)}></i>
                        </div>

                            <div className="s-cancel" onClick={this.back.bind(this)}>取消</div>
                    </form>
                </div>
            </div>


        </div>)
     }
    }