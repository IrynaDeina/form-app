import React from 'react'
import ChildForm01 from './ChildForm01';
import ChildFormRecover from './ChildFormRecover';
import ChildFormSignUp from './ChildFormSignUp';
import Style from './Style.css';



class ParentForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            exUser: {
                userName: '',
                password: '',
                check: ''
            },

            recoverPass: '',

            newUser: {
                fullName: '',
                newEmail: '',
                password: '',
                gender: '',
                bio: ''
            },

            contForm: {
                yourEmail: '',
                subject: '',
                message: ''
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.send = this.send.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleCallback = this.handleCallback.bind(this);
        this.handleCallback2 = this.handleCallback2.bind(this);
        this.handleCallback3 = this.handleCallback3.bind(this);
    }

    /*----SIGN --IN----*/

    handleCallback = (childData) => {
        this.setState({
            exUser: {
                userName: childData.userName,
                password: childData.password,
                check: childData.check
            }
        })
        console.log(this.state.exUser);
    }


    /*----RECOVER PASSWORD----*/

    handleCallback2 = (childData) => {
        this.setState({
            recoverPass: childData
        })

        console.log(this.state.recoverPass);
    }


    /*----SIGN UP----*/

    handleCallback3 = (childData) => {
        this.setState({
            newUser: {
                fullName: childData.fullName,
                newEmail: childData.newEmail,
                password: childData.password,
                gender: childData.gender,
                bio: childData.bio
            }
        })
        console.log(this.state.newUser);
    }


    /*----CONTACT FORM parent----*/

    handleInputChange(event) {
        let target = event.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            contForm: {
                ...this.state.contForm,
                [name]: value
            }
        });
        console.log(this.state.contForm);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            exUser: {
                userName: '',
                password: '',
                check: ''
            }
        })
        console.log(this.state.contForm);
    }

    send() {

    }

    clear() {
        this.setState({
            contForm: {
                yourEmail: '',
                subject: '',
                message: ''
            }
        });
    }

    render() {

        return (
            <div className="content" >
                <div className="dataFiled">
                    <p>Sign in info:
                        <br />
                        <p>
                            {JSON.stringify(this.state.exUser, null, ' ')}
                        </p>
                    </p>
                    <br />
                    <p>Recover password info:
                        <br />
                        <p>
                            {JSON.stringify(this.state.recoverPass, null, ' ')}
                        </p>
                    </p>
                    <br />
                    <p>Sign up info:
                        <br />
                        <p>
                            {JSON.stringify(this.state.newUser, null, ' ')}
                        </p>
                    </p>
                    <br />
                    <p>Contact Form info:
                        <br />
                        <p>
                            {JSON.stringify(this.state.contForm, null, ' ')}
                        </p>
                    </p>
                    <br />
                </div>

                <div id="container-lg">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="box">
                                <ChildForm01
                                    parentCallback={this.handleCallback} />
                            </div>
                            <div className="box">
                                <ChildFormRecover
                                    parentCallback2={this.handleCallback2} />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <ChildFormSignUp
                                parentCallback3={this.handleCallback3} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div id="contact-form">
                                <h2 className="title">Contact Form</h2>
                                <form onSubmit={this.handleSubmit} disabled={!this.state.exUser}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="components">
                                                <label for="yourEmail">Your Email:</label>
                                                <br />
                                                <input type="text" name="yourEmail" placeholder="examole@email.com" value={this.state.contForm.yourEmail} onChange={this.handleInputChange} />
                                                <label for="opt">Subject:</label>
                                                <br />
                                                <select name="subject" value={this.state.contForm.subject} onChange={this.handleInputChange}>
                                                    <option value="" defaultValue disabled hidden>Select</option>
                                                    <option value="Option 1">Option 1 </option>
                                                    <option value="Option 2">Option 2</option>
                                                    <option value="Option 3">Option 3</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="components">
                                                <label for="message">Message</label>
                                                <br />
                                                <textarea type="text" name="message"
                                                    placeholder="Type your message here" cols="55" rows="6" value={this.state.contForm.message} onChange={this.handleInputChange}></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-3">
                                            <button className="leftButton" value="send">Send</button>
                                        </div>
                                        <div className="col-md-3">
                                            <button type="reset" value="clear" onClick={() => this.clear()}> Cancel</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }

}

export default ParentForm;