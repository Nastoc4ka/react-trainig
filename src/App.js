import React, {Component} from 'react';
import './App.css';

const NOT_VALIDATED = Symbol.for('NOT_VALIDATED');
const VALID = Symbol.for('VALID');
const INVALID = Symbol.for('INVALID');
const DEFAULT_PROPERTY_VALUE = {
    value: '',
    status: NOT_VALIDATED
};

const VALIDATION_FORM = {
    email: /^\S+@\S+\.\S+$/,
    password: /^\S{6,12}$/
};

class App extends Component {

    constructor() {
        super();
        this.state = {
            email: DEFAULT_PROPERTY_VALUE,
            password: DEFAULT_PROPERTY_VALUE,
            confirmConditions: DEFAULT_PROPERTY_VALUE,
        };

        this.emailInput = React.createRef();
    }

    componentDidMount(){
        this.emailInput.current.focus();
    }

    onChangeInput = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        let formItem = e.target.name;
        console.log(formItem, value);

        this.setState((state) => {
            return {[formItem]: { ...state[formItem], value}}
        });

        const isPropertyNeedValidation = this.state[formItem].status !== NOT_VALIDATED;
        const isNotCheckbox = e.target.type !== 'checkbox';

        if (isPropertyNeedValidation && isNotCheckbox) {
            this.validateFormItem(e);
        }
    };

    onSubmit = (e) => {
        e.preventDefault();
        console.log('submit');

    };

    validateFormItem = (e) => {
        const formItem = e.target.name;

        const isValid = (VALIDATION_FORM[formItem]).test(e.target.value);

        console.log(this.state[formItem], formItem, isValid);

        this.setState((state) => {
            return {
                [formItem]: {
                    ...state[formItem],
                    status: (isValid ? VALID : INVALID)
                }
            }
        });
    };

    render() {
        console.log('render()');
        const {
            email, password, confirmConditions
        } = this.state;

        const disableSubmit = !(email.status === VALID && password.status === VALID && confirmConditions.value);
        console.log(this.state);


        return (
            <div className="App">
                <h1>Sign in</h1>
                <form onSubmit={this.onSubmit}>
                    <input type="text" id="email" name="email" value={email.value}
                           ref={this.emailInput}
                           onChange={this.onChangeInput}
                           onBlur={this.validateFormItem}/>
                    {email.status !== INVALID ?
                        <label htmlFor="email"> Enter your email</label> :
                        <label htmlFor="email" className="wrongFormat"> Wrong e-mail format</label>}
                    <br/><br/>
                    <input type='password'
                           placeholder='from 6 to 12 symbols'
                           id='password'
                           name="password"
                           value={password.value}
                           onChange={this.onChangeInput}
                           onBlur={this.validateFormItem}
                    />
                    {password.status !== INVALID ?
                        <label htmlFor="password"> password</label> :
                        <label htmlFor="password" className="wrongFormat"> Password should consist from 6 to 12
                            symbols</label>}
                    <br/><br/>
                    <input type="checkbox"
                           id="confirmConditions"
                           name='confirmConditions'
                           checked={confirmConditions.value}
                           onChange={this.onChangeInput}/>
                    <label htmlFor='confirmConditions'> I have read and accepted privacy policy</label><br/><br/>
                    <input type="submit" id="submit" name="submit" value="Submit" disabled={disableSubmit}/>

                </form>
            </div>
        );
    };
}

export default App;
