import {useState} from 'react';
import './style/App.css'
import TextArea from '../shared/UI/TextArea/TextArea.tsx';
import FullScreenSwitcher from '../shared/UI/FullScreenSwitcher/FullScreenSwitcher.tsx';
import FileLoader from '../shared/UI/FileLoader/FileLoader.tsx';
import WordCounter from '../feature/WordCounter/WordCounter.tsx';

function App() {

    const [text, setText] = useState('');

    return (
        <>
            <FileLoader setText={setText} />
            <FullScreenSwitcher />
            <div className={'areaContainer'}>
                <TextArea
                    setText={setText}
                    value={text}
                />
            </div>
            <WordCounter text={text}/>
        </>
    )
}
export default App
