import React from 'react'
import { Input } from 'antd';

const MyInput = ({...props}) => {
    return (
        <Input {...props}/>
    );
};

MyInput.TextArea = Input.TextArea;

export default MyInput;