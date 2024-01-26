import style from './WordCounter.module.css';
import { useTextStore } from 'entities/Text';

export const WordCounter = () => {

    const text = useTextStore.use.text();

    const countWords = () => {
        if (text.trim() !== "") {

            return text.trim().split(" ").length;
        }
    };

    const characters = text.length;
    const words = countWords() || 0;

    return (
        <div className={style.container}>
            Signs: {characters} Words: {words}
        </div>
    );
};

