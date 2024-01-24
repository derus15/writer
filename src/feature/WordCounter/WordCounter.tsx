import style from './WordCounter.module.css'

interface WordCounterProps {
    text: string
}

const WordCounter = ({text}: WordCounterProps) => {

    const countWords = () => {
        if (text.trim() !== "") { // проверяем, не является ли строка пустой

            return text.trim().split(" ").length;
        }
    }

    const characters = text.length;
    const words = countWords() || 0;

    return (
        <div className={style.container}>
            Signs: {characters} Words: {words}
        </div>
    );
};

export default WordCounter;
