import './style/App.css';
import { FileLoader } from 'widgets/FileLoader';
import { FullScreenSwitcher } from 'widgets/FullScreenSwitcher';
import { TextArea } from 'widgets/TextArea';
import { SaveButton } from 'feature/SaveFile';
import { WordCounter } from 'feature/WordCounter';


function App() {

    return (
        <>
            <header className={'header'}>
                <FileLoader />
                <span className={'title'}>To open a txt/markdown drop them here</span>
                <div className={'toolContainer'}>
                    <SaveButton />
                    <FullScreenSwitcher />
                </div>
            </header>
            <div className={'areaContainer'}>
                <TextArea />
            </div>
            <WordCounter />
        </>
    );
}

export default App;
