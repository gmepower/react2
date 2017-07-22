import React, {Component} from 'react'
import {SeriesList} from '../../fetch/Series/index'
import Header from '../../components/header/header'
import './Series.less'
export default class Series extends Component {
    constructor() {
        super();
        this.state = {
            hasMore: false,
            data: []
        }
    }

    loadMore() {
        SeriesList().then(res => res.json()).then(
            data => {
                console.log('loading...');
                this.setState({
                    hasMore: data.hasMore,
                    data: this.state.data.concat(data.data),
                })
            }
        )
    }

    componentDidMount() {
        SeriesList().then(res => res.json()).then(
            data => {
                console.log(data);
                this.setState({
                    hasMore: data.hasMore,
                    data: data.data

                })
            });
        this.fn=()=>{
            clearTimeout(this.timer);
            this.timer=setTimeout(()=>{
                let screen=window.screen.height;
                let top=this.refs.more.getBoundingClientRect().top;//获取当前元素的位置（上，下，左，右）
                if(top<screen){
                    this.loadMore()
                }
            },50)
        };
        window.addEventListener('scroll',this.fn)
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.fn)
    }


    render() {
        return (
            <div>
                <Header/>
                <div className="content">
                    {this.state.data.length ?
                        this.state.data.map((item, index) => (
                            <div key={index} className="course-one">
                                <a className="course-link" href={item.url}>
                                    <div className="course-img">
                                        <img src={item.coverpath} alt=""/>
                                    </div>
                                    <div className="course-infos">
                                        <p className="course-title">{item.title}</p>
                                        <p className="course-speaker">主讲：{item.tname}</p>
                                        <p className="course-detail">{item.tch_synopsis}</p>
                                        <p className="course-lesson">
                                            <span>{item.formattime}</span>

                                        </p>
                                        <p className="course-price">价格：￥{item.pre_price}</p>
                                    </div>
                                </a>
                            </div>
                        ))
                        : <div>正在加载</div>}
                    {this.state.hasMore ? <div ref='more' className="hasMore" onClick={this.loadMore.bind(this)}>加载更多</div> :
                        <div>到底部了</div>}
                </div>
            </div>
        )
    }
}