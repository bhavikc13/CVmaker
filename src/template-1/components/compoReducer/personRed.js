const initState = {
        name: 'Name', 
        collegeName: 'DA-IICT',
        email: '201701000@daiict.ac.in', 
        dob: 'April 15, 2020', 
        address: 'myAddress'
}

const personRed = (state = initState, action) => {
    //console.log(state)
    if(action.type==='UPDATE_NAME') {
        return {
            ...state,
            name: action.name
        }
    }   
    else if(action.type==='UPDATE_COLLEGENAME') {
        return {
            ...state,
            collegeName: action.collegeName
        }
    }
    else if(action.type==='UPDATE_EMAIL') {
        return {
            ...state,
            email: action.email
        }
    }
    else if(action.type==='UPDATE_DOB') {
        return {
            ...state,
            dob: action.dob
        }
    }
    else if(action.type==='UPDATE_ADDRESS') {
        return {
            ...state,
            address: action.address
        }
    }

    return state;
}

export default personRed