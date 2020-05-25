export function AddButtonRestart(scene) {
  const restartbutton = scene.add.image(scene.game.config.width / 2, scene.game.config.height / 2, 'restartbutton');
  restartbutton.depth = 2;
  restartbutton.setInteractive();
  // --> like 'onHover'
  restartbutton.on('pointerover', () => { restartbutton.tint = 0xcccccc });
  restartbutton.on('pointerout', () => { restartbutton.tint = 0xffffff });
  // <-- like 'onHover'

  // onClick
  restartbutton.on('pointerdown', () => {
    restartbutton.tint = 0xffffff;
    scene.scene.restart();
  })
}