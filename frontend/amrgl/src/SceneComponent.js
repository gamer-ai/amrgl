import { Engine, Scene } from '@babylonjs/core'
import React, { useEffect, useRef } from 'react'

const SceneComponent = (props) => {
    const reactCanvas = useRef(null);
    const { antialias, engineOptions, adaptToDeviceRatio, sceneOptions, onRender, onSceneReady, ...rest } = props;
    const width = window.innerWidth;
    const height = window.innerHeight;
    useEffect(() => {
        if (reactCanvas.current) {
            const engine = new Engine(reactCanvas.current, antialias, engineOptions, adaptToDeviceRatio);
            const scene = new Scene(engine, sceneOptions);
            engine.setSize(width, height);
            if (scene.isReady()) {
                props.onSceneReady(scene)
            } else {
                scene.onReadyObservable.addOnce(scene => props.onSceneReady(scene));
            }
            engine.runRenderLoop(() => {
                if (typeof onRender === 'function') {
                    onRender(scene);
                }
                scene.render();
            })
            const resize = () => {
                const newWidth = window.innerWidth;
                const newHeight = window.innerHeight;
                engine.setSize(newWidth, newHeight);
                scene.getEngine().resize();
            }
            if (window) {
                window.addEventListener('resize', resize);
            }
            return () => {
                scene.getEngine().dispose();
                if (window) {
                    window.removeEventListener('resize', resize);
                }
            }
        }
    }, [reactCanvas])
    return (
        <canvas ref={reactCanvas} {...rest} />
    );
}

export default SceneComponent;