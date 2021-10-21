import React from 'react'
import Style from './Style.css';

class ChildFormRecover extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            recoverPass: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);

    }
    handleInputChange(event) {
        let target = event.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value

        });

    }
    onTrigger = (event) => {
        this.props.parentCallback2(this.state.recoverPass);
        event.preventDefault();
        this.setState({
            recoverPass: ''
        });
    }

    render() {
        return (
            <div id="recover-form">
                <h2 className="title">Recover Password</h2>
                <form onSubmit={this.onTrigger}>
                    <div className="row">
                        <div className="col-12">
                            <label>Your Email:</label>
                            <br />
                            <input type="text" name="recoverPass" placeholder="examole@email.com" value={this.state.recoverPass} onChange={this.handleInputChange} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-6">
                            <button className="leftButton">Send</button>
                        </div>
                        <div className="col-6">
                            <button>Sign up</button>
                        </div>
                    </div>
                </form>
            </div >
        )
    }
}

export default ChildFormRecover;