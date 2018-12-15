import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectEmail} from "./redux/action";
import {Provider} from 'react-redux';

class Modal extends Component {
    componentDidMount(){
        this.modalTarget = document.createElement('div');
        this.modalTarget.className = 'modal';
        document.body.appendChild(this.modalTarget);
        this._render();

    }
    _render() {
        ReactDOM.render(
        <Provider>
        <div>{this.props.children}</div>
        </Provider>,
            this.modalTarget
        );
    }

    componentWillUpdate(){
        this._render();
    }

    componentWillUnmount(){
        ReactDOM.unmountComponentAtNode(this.modalTarget);
        document.body.removeChild(this.modalTarget);
    }

    render(){
        return <noscript/>;
    }

}

function mapStateToProps(state){
    return{
        mail : state.EmailList
    };

}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectEmail: selectEmail}, dispatch)

}

export default connect(mapStateToProps, matchDispatchToProps)(Modal);