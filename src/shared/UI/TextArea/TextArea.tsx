import {ChangeEvent, Dispatch} from 'react';
import style from './TextArea.module.css';

interface TextAreaProps {
    setText: Dispatch<string>
    value: string;
}b

const TextArea = ({setText, value}: TextAreaProps) => {

    const textEdit = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    }

    return (
        <textarea
            placeholder={'Просто начните писать...'}
            value={value}
            className={style.textarea}
            onChange={textEdit}
        />
    );
};

export default TextArea;