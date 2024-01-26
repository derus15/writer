import { ChangeEvent } from 'react';
import style from './TextArea.module.css';
import { useTextStore } from 'entities/Text';

export const TextArea = () => {

    const setText = useTextStore.use.change();
    const text = useTextStore.use.text();

    const textEdit = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    };

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

