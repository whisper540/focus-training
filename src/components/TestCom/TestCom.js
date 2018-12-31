import React from 'react';
import { connect } from 'react-redux';
import { writeLogOne } from '../../store/actionbuilder';
import Son from './Son.js'


const TestCom = ( props ) => {
    console.log(props);

    return (
        <Son {...props}/>
    );
};

const mapStateToProps = state =>
    ({
        writeLog: state.writeLog
    });

const mapDispatchToProps = dispatch =>
    ({
        onWriteLog(writeLogBy) {
            dispatch(writeLogOne(writeLogBy));
        }
    });

const NewTestComp = connect(
    mapStateToProps,
    mapDispatchToProps
)(TestCom);

// const NewTestComp = connect(
//     state => ({
//         writeLog: state.writeLog
//     }),
//     dispatch => ({
//         onWriteLog(writeLogBy) {
//             dispatch(writeLogOne(writeLogBy));
//         }
//     })
// )(TestCom);

export default NewTestComp;