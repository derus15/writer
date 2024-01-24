import {ChangeEvent, Dispatch, useEffect} from 'react';
import style from './TextArea.module.css';

interface TextAreaProps {
    setText: Dispatch<string>
    value: string;
}

const TextArea = ({setText, value}: TextAreaProps) => {

    const textEdit = (e: ChangeEvent<HTMLTextAreaElement>) => {
        localStorage.setItem('text', value);
        setText(e.target.value);
    }

    useEffect(() => {
        const savedText = localStorage.getItem('text');
        setText(savedText);
    }, []);

    return (
        <textarea
            autoFocus
            placeholder={'Просто начните писать...'}
            value={value}
            className={style.textarea}
            onChange={textEdit}
        />
    );
};

export default TextArea;