import React, {Component} from 'react';
import './App.css';

class App extends Component {

    state = {
        registrationForm: {
            email: '',
            password: '',
            confirmConditions: false,
        },
        emailIsValid: true,
        passwordIsValid: true,
        validationForm: {
            email: /\S+@\S+\.\S+/,
            password: /\b\S{6,12}\b/
        }
    };

    onChangeInput = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        const name = {[e.target.name]: value};

        this.setState({
            registrationForm: {...this.state.registrationForm, ...name}
        });

        if (!this.state[e.target.name + 'IsValid'] && e.target.type !== 'checkbox') {
            this.validateFormItem(e);
        }
    };

    onSubmit = (e) => {

        e.preventDefault();
        console.log(this.state.registrationForm);
        this.setState({
            registrationForm: {
                email: '',
                password: '',
                confirmConditions: false,
            }
        })
    };

    validateFormItem = (e) => {
        const formItem = e.target.name;
        console.log(this.state.validationForm[formItem]);

        this.setState({
            [formItem + 'IsValid']: (this.state.validationForm[formItem]).test(e.target.value),
        });
    };

    render() {
        console.log('render()');
        const {
            registrationForm: {email, password, confirmConditions},
            emailIsValid, passwordIsValid,
        } = this.state;

        let disableSubmit = !(email && password && confirmConditions && emailIsValid && passwordIsValid);
        console.log(disableSubmit);


        return (
            <div className="App">
                <h1>Sign in</h1>
                <form onSubmit={this.onSubmit}>
                    <input type="text" id="email" name="email" value={email}
                           onChange={this.onChangeInput}
                           onBlur={this.validateFormItem}/>
                    {emailIsValid ?
                        <label htmlFor="email"> Enter your email</label> :
                        <label htmlFor="email" className="wrongFormat"> Wrong e-mail format</label>}
                    <br/><br/>
                    <input type='password'
                           placeholder='from 6 to 12 symbols'
                           id='password'
                           name="password"
                           value={password}
                           onChange={this.onChangeInput}
                           onBlur={this.validateFormItem}
                    />
                    {passwordIsValid ?
                        <label htmlFor="password"> password</label> :
                        <label htmlFor="password" className="wrongFormat"> Password should consist from 6 to 12
                            symbols</label>}
                    <br/><br/>
                    <input type="checkbox"
                           id="confirmConditions"
                           name='confirmConditions'
                           checked={confirmConditions}
                           onChange={this.onChangeInput}/>
                    <label htmlFor='confirmConditions'> I have read and accepted privacy policy</label><br/><br/>
                    <input type="submit" id="submit" name="submit" value="Submit" disabled={disableSubmit}/>

                </form>
            </div>
        );
    };
}

export default App;
