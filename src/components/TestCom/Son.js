import React from 'react';

const Son = ({ writeLog = "default", onWriteLog = f=>f }) => {
    return (
        <div onClick={ () => onWriteLog("logtwo")}>
            test: {writeLog}
        </div>
    );
};

export default Son;