import { LinkHTMLAttributes } from 'react';
import style from './Link.module.css';
import {classNames} from 'shared/lib/classNames.ts';

interface LinkProps extends LinkHTMLAttributes<HTMLLinkElement>{
    className?: string;
    download?: string;
    id: string;
}

const Link = ({href, download, className, id}: LinkProps) => {
    
    return (
        <a
            href={href}
            download={download}
            className={classNames(style.link, {}, [className])}
            id={id}
        />
    );
};

export default Link;