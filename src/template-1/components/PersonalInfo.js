import React, { Component } from 'react'
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form'

class PersonalInfo extends Component {

    handleChangeName = (event) => { 
        //console.log(this.props);
        this.props.updateName(event.target.value);
    }

    handleChangeCollegeName = (event) => {
        this.props.updateCollgeName(event.target.value);
    }

    handleChangeEmail = (event) => {
        this.props.updateEmail(event.target.value);
    }

    handleChangeDOB = (event) => {
        this.props.updateDOB(event.target.value);
    }

    handleChangeAddress = (event) => {
        this.props.updateAddress(event.target.value);
    }

    render() {
        //console.log(this.props);
        return (
            <div>
                <Form>
                    <Form.Group controlId="formGroupFullName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Full Name" onChange={this.handleChangeName}/>
                    </Form.Group>

                    <Form.Group controlId="formGroupCollegeName">
                        <Form.Label>College Name</Form.Label>
                        <Form.Control type="text" placeholder="College name" onChange={this.handleChangeCollegeName} />
                    </Form.Group>

                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" onChange={this.handleChangeEmail} />
                    </Form.Group>

                    <Form.Group controlId="formGroupDOB">
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control type="text" placeholder="April 15, 2020" onChange={this.handleChangeDOB} />
                    </Form.Group>

                    <Form.Group controlId="formGroupAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control as="textarea" rows="3" placeholder="Address" onChange={this.handleChangeAddress}/>
                    </Form.Group>
                </Form>

                {/*
                <div className="form basic-info-form">
                    <div className="form-input">
                        <label className="label">Name</label>
                        <p className="control">
                        <input className="input" type="text" onChange={this.handleChangeName} />
                        </p>
                    </div>

                    <div className="form-input">
                        <label className="label">College Name</label>
                        <p className="control">
                        <input className="input" type="text" onChange={this.handleChangeCollegeName} />
                        </p>
                    </div>
                    
                    <div className="form-input">
                        <label className="label">Email</label>
                        <p className="control">
                        <input className="input" type="text" onChange={this.handleChangeEmail} />
                        </p>
                    </div>

                    <div className="form-input">
                        <label className="label">Date of Birth</label>
                        <p className="control">
                        <input className="input" type="text" onChange={this.handleChangeDOB} />
                        </p>
                    </div>

                    <div className="form-input">
                        <label className="label">Address</label>
                        <p className="control">
                        <textarea className="textarea input" type="text" onChange={this.handleChangeAddress}></textarea>
                        </p>
                    </div>
                </div>
                */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    //console.log(state);
    return {
        name: state.personRed.name,
        collegeName: state.personRed.collegeName,
        email: state.personRed.email,
        dob: state.personRed.dob,
        address: state.personRed.address
    }
}

const mapDispatchToProps = (dispatch) => {
    //console.log(dispatch)
    //store.subscribe(()=>store.getState());
    return {
        updateName: (name) => { dispatch({type: 'UPDATE_NAME', name: name}) },
        updateCollgeName: (collegeName) => { dispatch({type: 'UPDATE_COLLEGENAME', collegeName: collegeName}) },
        updateEmail: (email) => { dispatch({type: 'UPDATE_EMAIL', email: email}) },
        updateDOB: (dob) => { dispatch({type: 'UPDATE_DOB', dob: dob}) },
        updateAddress: (address) => { dispatch({type: 'UPDATE_ADDRESS', address: address}) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfo)
