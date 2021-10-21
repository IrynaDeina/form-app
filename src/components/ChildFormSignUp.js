import React from 'react'
import Style from './Style.css';

class ChildFormSignUp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            newUser: {
                fullName: '',
                newEmail: '',
                password: '',
                gender: 'male',
                bio: ''
            }
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        let target = event.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            newUser: {
                ...this.state.newUser,
                [name]: value
            }
        });
        console.log(this.state.newUser)
    }

    onTrigger = (event) => {
        this.props.parentCallback3(this.state.newUser);
        event.preventDefault();
        this.setState({
            newUser: {
                fullName: '',
                newEmail: '',
                password: '',
                gender: 'male',
                bio: ''
            }
        });
        console.log(this.state.newUser)
    }
    render() {
        return (
            <div id="signUp-form" >
                <h2 className="title">Sign up</h2>
                <form onSubmit={this.onTrigger}>
                    <div className="row">
                        <div className="col-12">
                            <div className="components">
                                <label>Full Name:</label>
                                <br />
                                <input type="text" name="fullName" placeholder="Alex Something" value={this.state.fullName} onChange={this.handleInputChange} />
                            </div>

                            <div className="components">
                                <label>Your Email:</label>
                                <br />
                                <input type="text" name="newEmail" placeholder="examole@email.com" value={this.state.newEmail} onChange={this.handleInputChange} />
                            </div>

                            <div className="components">
                                <label>Password:</label>
                                <br />
                                <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleInputChange} />
                            </div>
                            <div className="components radioButton">
                                <label>Your Gender:</label>
                                <br />
                                <input type="radio"
                                    name="gender"
                                    value="male"
                                    checked={this.state.gender === 'male'}
                                    onChange={this.handleInputChange} />
                                <label for="male">Male</label>
                                <input type="radio"
                                    name="gender"
                                    value="female"
                                    checked={this.state.gender === 'female'}
                                    onChange={this.handleInputChange} />
                                <label for="female">Female</label>
                            </div>

                            <div className="components">
                                <label for="bio">Bio</label>
                                <br />
                                <textarea type="text" name="bio"
                                    placeholder="Something about you..." cols="55" rows="6" value={this.state.bio} onChange={this.handleInputChange}></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <button type="submit" className="leftButton">Sign up</button>
                        </div>
                        <div className="col-6">
                            <button>Forget password?</button>
                        </div>
                    </div>
                </form>
            </div >
        )
    }
}

export default ChildFormSignUp;