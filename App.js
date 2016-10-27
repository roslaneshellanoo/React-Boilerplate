import React, {Component} from 'react';
import ReactDom from 'react-dom';

class App extends Component {

    constructor() {
        super();
        this.state = {
            txt: 'This is the state txt',
        };
        this.update = this.update.bind(this);
    }
    update(e){
        this.setState({txt: e.target.value})
    }
    render() {
        return (
            <div>
                <Widget
                    txt={this.state.txt}
                    update={this.update}
                />

            </div>
        )
    }
}


const Widget = (props) => {
    return (
        <div>
            <input type="text"
                   onChange={props.update}
            />
            <h1>{props.txt}</h1>
        </div>

    );
}



ReactDom.render(
    <App />,
    document.getElementById('app')
);