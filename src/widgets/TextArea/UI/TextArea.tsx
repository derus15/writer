import {SyntheticEvent, useEffect, useLayoutEffect, useRef} from 'react';
import style from './TextArea.module.css';
import { useTextStore } from 'entities/Text';

export const TextArea = () => {

    const setText = useTextStore.use.change();
    const text = useTextStore.use.text();
    const textArea = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
        if (textArea.current) {
            textArea.current.textContent = text;
        }
    }, [text]);

    useEffect(() => {
        window.scrollTo(0, document.body.scrollHeight - window.innerHeight);
    }, [text]);

    const textEdit = (e: SyntheticEvent<HTMLDivElement>) => {
        const target = e.target as HTMLDivElement;
        setText(target.textContent || '');
    };

    return (
        <div className={style.container}>
            <div
                ref={textArea}
                contentEditable="plaintext-only"
                className={style.textarea}
                onInput={textEdit}
            />
        </div>
    );
};
