import React, { Component } from 'react'
import './style/SidebarStyle.css'
import {Accordion, Card } from 'react-bootstrap'
import PersonalInfo from './components/PersonalInfo'
import EducationInfo from './components/EducationInfo'
import SkillsInfo from './components/SkillsInfo'
import InternshipInfo from './components/InternshipInfo'
import ProjectInfo from './components/ProjectInfo'
import PositionInfo from './components/PositionInfo'
import AwardInfo from './components/AwardInfo'
import HobbyInfo from './components/HobbyInfo'

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <Accordion defaultActiveKey=" ">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                        Personal Information
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <PersonalInfo />
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                        Education
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            <EducationInfo />
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="3">
                        Skills
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="3">
                        <Card.Body>
                            <SkillsInfo />
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="4">
                        Internship
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="4">
                        <Card.Body>
                            <InternshipInfo />
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="5">
                        Project
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="5">
                        <Card.Body>
                            <ProjectInfo />
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="6">
                        Position of Responsibility
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="6">
                        <Card.Body>
                            <PositionInfo />
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="7">
                        Awards and Achievement
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="7">
                        <Card.Body>
                            <AwardInfo />
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="8">
                        Interests and Hobbies
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="8">
                        <Card.Body>
                            <HobbyInfo />
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        )
    }
}

export default Sidebar
