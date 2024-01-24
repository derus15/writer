import {Dispatch, useEffect} from 'react';
import style from './FileLoader.module.css'

interface FileLoaderProps {
    setText: Dispatch<string>
}

const FileLoader = ({setText}: FileLoaderProps) => {

    const reader = new FileReader();

    const handleDrop = (event: DragEvent) => {

        event.preventDefault();

        const files = event.dataTransfer.files;
        const file = files[0];
        reader.readAsText(file);
        reader.onload = () => {

            const fileContent = String(reader.result);
            setText(fileContent);

        };
    }

    function handleDragOver(event: { preventDefault: () => void; }) {
        event.preventDefault();
    }

    useEffect(() => {
        window.addEventListener('drop', handleDrop);
        window.addEventListener('dragover', handleDragOver);
        return () => {
            window.removeEventListener('drop', handleDrop);
            window.removeEventListener('dragover', handleDragOver);
        }
    }, []);

    return (
        <input
            type="file"
            accept='text/markdown'
            className={style.fileLoader}
        />
    );
};

export default FileLoader;