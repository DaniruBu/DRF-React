import { Input } from 'antd';

const MyInput = ({...props}) => {
    return (
        <Input {...props}/>
    );
};

// Добавляем TextArea как статическое свойство
MyInput.TextArea = Input.TextArea;

export default MyInput;