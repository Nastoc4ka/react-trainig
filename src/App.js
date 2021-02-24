import React, {Component} from 'react';
import {connect} from "react-redux";
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {saveInputName, deleteName} from './redux/actions/name-actions';
import Name from './components/Name';
import './App.css';

class App extends Component {
    state = {
        name: ''
    };

    handleChangeName = (e) => {
        this.setState({
            name: e.target.value
        });
    };

    onSaveName = () => {
        this.props.dispatch(saveInputName(this.state.name));
        this.setState({
            name: ''
        });
    };

    onRemoveName = () => {
        this.props.dispatch(deleteName());
        this.setState({
            name: ''
        });
    };

    render() {
        return (
            <Container fluid="md" className="App p-3">
                <Jumbotron>
                    <Row>
                        <Col>
                            <label htmlFor="inputName"><h3>Введіть ім'я</h3></label>
                            <br/>
                            <input type="text"
                                   id="inputName"
                                   name="inputName"
                                   onChange={this.handleChangeName}
                                   value={this.state.name}/>
                            <br/><br/>
                            <ButtonGroup>
                                <Button variant="outline-primary" onClick={this.onSaveName}>Зберегти</Button>
                                <Button variant="outline-dark" onClick={this.onRemoveName}>Очистити</Button>
                            </ButtonGroup>
                        </Col>
                        <Col>
                            {this.props.name && <Name name={this.props.name}/>}
                        </Col>
                    </Row>
                </Jumbotron>
            </Container>
        )
    }

}

const mapStateToProps = state => {
    return {
        name: state.name
    }
};

export default connect(mapStateToProps)(App);
