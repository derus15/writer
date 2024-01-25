import { LinkHTMLAttributes } from 'react';
import style from './Link.module.css';
import {classNames} from 'shared/lib/classNames.ts';

interface LinkProps extends LinkHTMLAttributes<HTMLLinkElement>{
    className?: string;
    download?: string;
}

const Link = ({href, download ,className}: LinkProps) => {
    
    return (
        <a
            href={href}
            download={download}
            className={classNames(style.link, {}, [className])}
        />
    );
};

export default Link;