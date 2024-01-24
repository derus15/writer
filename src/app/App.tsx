import './style/App.css'
import TextArea from '../shared/UI/TextArea/TextArea.tsx';
import FullScreenSwitcher from '../shared/UI/FullScreenSwitcher/FullScreenSwitcher.tsx';
import FileLoader from '../shared/UI/FileLoader/FileLoader.tsx';
import WordCounter from '../feature/WordCounter/WordCounter.tsx';

function App() {

    return (
        <>
            <FileLoader />
            <FullScreenSwitcher />
            <div className={'areaContainer'}>
                <TextArea />
            </div>
            <WordCounter />
        </>
    )
}

export default App
