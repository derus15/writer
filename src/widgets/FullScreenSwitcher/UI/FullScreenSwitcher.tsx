import style from './FullScreenSwitcher.module.css'

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
        <div
            className={style.fullscreen}
            onClick={toggleFullScreen}
        />
    );
};

