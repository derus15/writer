import { SyntheticEvent, useEffect, useRef}  from 'react';
import style from './TextArea.module.css';
import { useTextStore } from 'entities/Text';

export const TextArea = () => {

    const setText = useTextStore.use.change();
    const text = useTextStore.use.text();
    const textArea = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (textArea.current) {
            textArea.current.textContent = text;
        }
    }, [text]);

    const textEdit = (e: SyntheticEvent<HTMLDivElement>) => {
        const target = e.target as HTMLDivElement;
        setText(target.textContent || '');
    };

    return (
        <div
            ref={textArea}
            contentEditable="plaintext-only"
            className={style.textarea}
            onInput={textEdit}
        />
    );
};

