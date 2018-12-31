import C from '../constants.js';

const writeLogOne = writeLogBy =>
    (writeLogBy === "logone") ?
    ({
        type: C.WRITE_LOG,
        writeLog: "WRITE_LOG_ONE"
    }) : 
    (writeLogBy === "logtwo") ?
        ({
            type: C.WRITE_LOG,
            writeLog: "WRITE_LOG_TWO"
        }) :
        ({
            type: C.WRITE_LOG,
            writeLog: "WRITE_LOG_DEFAULT"
        });

export { writeLogOne };