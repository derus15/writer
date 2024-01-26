import { useEffect } from 'react';
import style from './FileLoader.module.css';
import { useTextStore } from 'entities/Text';

export const FileLoader = () => {

    const reader = new FileReader();
    const setText = useTextStore.use.change();

    const handleDrop = (event: DragEvent) => {

        event.preventDefault();

        const files = event.dataTransfer.files;
        const file = files[0];

        reader.readAsText(file);
        reader.onload = () => {

            const fileContent = String(reader.result);
            setText(fileContent);

        };
    };

    function handleDragOver(event: { preventDefault: () => void; }) {
        event.preventDefault();
    }

    useEffect(() => {
        window.addEventListener('drop', handleDrop);
        window.addEventListener('dragover', handleDragOver);
        return () => {
            window.removeEventListener('drop', handleDrop);
            window.removeEventListener('dragover', handleDragOver);
        };
    }, []);

    return (
        <input
            type="file"
            accept='text/markdown'
            className={style.fileLoader}
        />
    );
};


