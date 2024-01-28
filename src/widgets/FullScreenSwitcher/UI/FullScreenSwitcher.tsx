import style from './FullScreenSwitcher.module.css';
import {Tooltip} from 'react-tooltip';

export const FullScreenSwitcher = () => {

    const toggleFullScreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    };

    return (
        <>
            <div
                className={style.fullscreen}
                onClick={toggleFullScreen}
                id='fullScreen'
            />
            <Tooltip anchorSelect='#fullScreen' place="top" content={'Fullscreen'}/>
        </>
    );
};

