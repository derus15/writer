import {ChangeEvent, useEffect} from 'react';
import style from './TextArea.module.css';
import { useTextStore } from 'entities/Text';

export const TextArea = () => {

    const setText = useTextStore.use.change();
    const text = useTextStore.use.text();

    const textEdit = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    }

    useEffect(() => {
        if (text) {
            localStorage.setItem('text', text);
        }
    }, [text]);

    useEffect(() => {
        const savedText = localStorage.getItem('text');
        setText(savedText || '');
    }, [setText]);

    return (
        <textarea
            autoFocus
            placeholder={'Просто начните писать...'}
            value={text}
            className={style.textarea}
            onChange={textEdit}
        />
    );
};

