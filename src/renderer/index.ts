// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process unless
// nodeIntegration is set to true in webPreferences.
// Use preload.js to selectively enable features

import { CanvasManipulator } from './canvas-manipulator'
import { CustomSlider } from './custom-slider'

// needed in the renderer process.
;(function () {
    const canvas = new CanvasManipulator('plot-area')
    const customSlider = new CustomSlider()
})()
