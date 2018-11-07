import React from 'react';
import { Engine } from 'babylonjs';

import { createScene } from '../vr/createScene';

class RenderCanvas extends React.Component {
  componentDidMount() {
    // eventually move this to a singleton
    const canvas = document.getElementById('renderCanvas');
    const engine = new Engine(canvas, true);
    const scene = createScene(engine, canvas);

    engine.runRenderLoop(function() {
        scene.render();
    });

    window.addEventListener('resize', function() {
        engine.resize();
    });
  }

  render() {
    return (
      <canvas id="renderCanvas" />
    );
  }
}

export default RenderCanvas;
