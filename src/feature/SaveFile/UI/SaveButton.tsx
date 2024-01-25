import style from './SaveButton.module.css';
import { useTextStore } from 'entities/Text';
import Link from 'shared/UI/Link/Link.tsx';

export const SaveButton = () => {

    const text = useTextStore.use.text();
    const fileName = 'file.txt';
    const blob = new Blob([text], { type: 'text/plain' } );

    return (
        <Link
            href={URL.createObjectURL(blob)}
            download={fileName || 'text.txt'}
            className={style.save}
        />
    );
};
