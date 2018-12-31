import C from '../constants.js';

const writeLog = (state="WRITE_LOG_DEFAULT", action) => {
    switch(action.type) {
        case C.WRITE_LOG:
            return action.writeLog;
        default:
            return state;
    }
};

export { writeLog };