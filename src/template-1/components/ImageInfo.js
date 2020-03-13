import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Form, Card, Button} from 'react-bootstrap'

class ImageInfo extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             savedImage: null
        }
    }
    
    handleSavedImage = (event) => {

        let reader = new FileReader();
        reader.onload = (e) => {
            this.setState({
                savedImage: e.target.result
                });
            };

        reader.readAsDataURL(event.target.files[0]);
    }

    handleUploadImage = (event) => {
        this.props.updateImage(this.state.savedImage);
    }

    handleRemoveImage = () => {
        this.props.removeImage();
    }

    render() {
        return (
            <div>
                <Card body border="primary" style={{margin: '10px 0px'}}>
                    <Form.Group controlId="formGroupImg" style={{display: 'inline-block', float:'left'}}>
                        <input type="file" onChange={this.handleSavedImage}/>
                    </Form.Group>
                    <Button variant="primary" onClick={this.handleUploadImage}> + Upload </Button>
                </Card>
                <Button variant="danger" onClick={this.handleRemoveImage}> - Remove Image </Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        img: state.imageRed.img
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateImage: (img) => { dispatch({type: 'UPLOAD_IMAGE', img: img}) },
        removeImage: () => { dispatch({type:'REMOVE_IMAGE'}) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageInfo)
