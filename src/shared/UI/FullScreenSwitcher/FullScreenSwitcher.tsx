import style from './FullScreenSwitcher.module.css'

const FullScreenSwitcher = () => {

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
        <div className={style.fullscreen} onClick={toggleFullScreen}/>
    );
};

export default FullScreenSwitcher;