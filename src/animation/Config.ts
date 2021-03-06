import {Color} from "three";

/**
 * Configurations
 */
export const config = {

    // Field of vision and cutoff frustum for near and far
    cam: {fov: 50, near: 1, far: 5000},

    // Smooth movements (speeds are in terms of pixels per ms)
    smooth: {mouseSpeed: 10 * window.devicePixelRatio},

    // Cursor
    cursor: {radius: 2, width: 0.3, color: new Color('#333')},

    // Debug mode
    debug: false,

    // Edit mode
    editMode: true,

    // Editor config
    editor: {zMin: 70, zMax: 90}
}

export const colors = {
    sky: {
        top: new Color('#3284ff'),
        bottom: new Color('#ffffff'),
        ground: new Color('#ffc87f'),
        dirLight: new Color('#fff4e5')
    },
}
