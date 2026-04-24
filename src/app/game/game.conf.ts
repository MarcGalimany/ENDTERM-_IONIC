import * as Phaser from 'phaser'
import { MainScene } from './escenas/main.game'

export const gameconf: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: innerWidth,
  height: innerHeight,
  parent: 'phase-game',
physics: 
    {
        default: 'arcade',
        arcade: {
            gravity: { x:0, y:0 }, 
            debug: false
        },
    },
    scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },

    scene: [MainScene]
}