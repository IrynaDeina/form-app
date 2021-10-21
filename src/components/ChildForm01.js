import React from 'react'
import Style from './Style.css';
import ChildFormSignUp from './ChildFormSignUp';

class ChildForm01 extends React.Component {
    constructor(props) {
        super(props)


        this.state = {
            exUser: {
                userName: '',
                password: '',
                check: false
            },
            redirect: false
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    redirectHandler = () => {
        this.setState({ redirect: true })
        this.renderRedirect();
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <redirect to='./ChildFormRecover' />
        }
    }

    handleInputChange(event) {
        let target = event.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            exUser: {
                ...this.state.exUser,
                [name]: value
            }
        });
        console.log(this.state.exUser)
    }

    onTrigger = (event) => {
        this.props.parentCallback(this.state.exUser);
        event.preventDefault();
        this.setState({
            exUser: {
                userName: '',
                password: '',
                check: false
            }
        });
        console.log(this.state.exUser)
    }
    render() {
        return (
            <div id="signIn-form" >
                <h2 className="title">Sign in</h2>
                <form onSubmit={this.onTrigger}>
                    <div className="row">
                        <div className="col-12">
                            <div className="components">
                                <label>User Name:</label>
                                <br />
                                <input type="text" name="userName" placeholder="example" value={this.state.userName} onChange={this.handleInputChange} />
                            </div>
                            <div className="components">
                                <label>Password:</label>
                                <br />
                                <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleInputChange} />
                            </div>
                            <div className="components checkButton">
                                <input type="checkbox" name="check" value={this.state.check} onChange={this.handleInputChange} />
                                <label for="check">Remember me</label>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-6">
                            <button className="leftButton">Sign in</button>
                        </div>
                        <div className="col-6">
                            <button onClick={this.redirectHandler}>Forgot password?</button >
                            {this.renderRedirect()}
                        </div>
                    </div>
                </form>
            </div >
        )
    }
}

export default ChildForm01;