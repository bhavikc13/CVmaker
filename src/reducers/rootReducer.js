import { combineReducers } from 'redux'
import personRed from '../template-1/components/compoReducer/personRed'
import educationRed from '../template-1/components/compoReducer/educationRed'
import skillRed from '../template-1/components/compoReducer/skillRed'
import internshipRed from '../template-1/components/compoReducer/internshipRed'
import projectRed from '../template-1/components/compoReducer/projectRed'
import positionRed from '../template-1/components/compoReducer/positionRed'
import awardRed from '../template-1/components/compoReducer/awardRed'
import hobbyRed from '../template-1/components/compoReducer/hobbyRed'
import imageRed from '../template-1/components/compoReducer/imageRed'

export default combineReducers({
    imageRed: imageRed,
    personRed: personRed,
    educationRed: educationRed,
    skillRed: skillRed,
    internshipRed: internshipRed,
    projectRed: projectRed,
    positionRed: positionRed,
    awardRed: awardRed,
    hobbyRed: hobbyRed
})