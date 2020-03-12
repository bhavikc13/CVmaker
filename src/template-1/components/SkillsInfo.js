import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Form, Card} from 'react-bootstrap'

class SkillsInfo extends Component {

    handleChangeAOI = (event) => {
        this.props.updateAOI(event.target.value);
    }

    handleChangePL = (event) => {
        this.props.updatePL(event.target.value);
    }

    handleChangeTT = (event) => {
        this.props.updateTT(event.target.value);
    }

    handleChangeTE = (event) => {
        this.props.updateTE(event.target.value);
    }

    render() {
        return (
            <div>
                <Form>
                    <Card body border="primary" style={{margin: '10px 0px'}}>
                        <Form.Group controlId="formGroupAOI">  {/*Area of Interest*/}
                            <Form.Label>Expertise Area/Area(s) of Interest</Form.Label>
                            <Form.Control as="textarea" rows="3" placeholder="Web Development, Machine Learning..." onChange={this.handleChangeAOI}/>
                        </Form.Group>
                    </Card>

                    <Card body border="primary" style={{margin: '10px 0px'}}>
                    <Form.Group controlId="formGroupPL"> {/* Programming Languages */}
                        <Form.Label>Programming Language(s)</Form.Label>
                        <Form.Control as="textarea" rows="3" placeholder="C++, Python..." onChange={this.handleChangePL} />
                    </Form.Group>
                    </Card>

                    <Card body border="primary" style={{margin: '10px 0px'}}>
                    <Form.Group controlId="formGroupTT"> {/* Tools and Technologies */}
                        <Form.Label>Tools and Technologies</Form.Label>
                        <Form.Control as="textarea" rows="3" placeholder="React JS, Redux, Firebase..." onChange={this.handleChangeTT} />
                    </Form.Group>
                    </Card>

                    <Card body border="primary" style={{margin: '10px 0px'}}>
                    <Form.Group controlId="formGroupTE"> {/* Technical Electives */}
                        <Form.Label>Technical Electives</Form.Label>
                        <Form.Control as="textarea" rows="3" placeholder="Software Engineering, Operating System..." onChange={this.handleChangeTE} />
                    </Form.Group>
                    </Card>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    //console.log(state);
    return {
        aoi: state.skillRed.areaOfInterest,
        pl: state.skillRed.proLanguages,
        tt: state.skillRed.toolsAndTech,
        te: state.skillRed.techElectives
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateAOI: (aoi) => { dispatch({type: 'UPDATE_AOI', aoi: aoi}) },
        updatePL: (pl) => { dispatch({type: 'UPDATE_PL', pl: pl}) },
        updateTT: (tt) => { dispatch({type: 'UPDATE_TT', tt: tt}) },
        updateTE: (te) => { dispatch({type: 'UPDATE_TE', te: te}) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SkillsInfo)
