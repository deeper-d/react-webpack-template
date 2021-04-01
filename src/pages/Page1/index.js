import React from "react"
import ReactDOM from "react-dom"
import { increment } from '../../redux/action/Increment';
import { connect } from 'react-redux';
import './cssStyle.css';
// import './lessStyle.less';
import Pic1 from '../../img/page1-1.jpg';

@connect(
    state => ({
        number: state.IncrementReducer.number,
        message: state.IncrementReducer.message
    })
)
export default class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    onClick = () => {
        this.props.dispatch(increment())
        let a = 111;
        let b = 222;
        var xxx = (c,d) => c*d;
        console.log(xxx(a,b));
    }

    render() {
        console.log('number', this.props.number, this.props.massage);
        return (
            <div>
                <div>current number： {this.props.number} <button onClick={()=>this.onClick()}>点击+1</button></div>
                <span>{this.props.message}</span>
                <img src={Pic1} alt=""/>
            </div>
        );
    }
}
