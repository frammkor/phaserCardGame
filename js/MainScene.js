export default class MainScene extends Phaser.Scene {
  constructor() {
    super('MainScene');
  }

  preload() {
    // It runs before the peage load
    // It's the best place to load your IMGs
    this.load.image('card', 'assets/images/card.png'),
      this.load.image('armor', 'assets/images/armor.png'),
      this.load.image('dead', 'assets/images/dead.png'),
      this.load.image('deathknight', 'assets/images/deathknight.png'),
      this.load.image('firedrake', 'assets/images/firedrake.png'),
      this.load.image('goldendragon', 'assets/images/goldendragon.png'),
      this.load.image('healingpotion', 'assets/images/healingpotion.png'),
      this.load.image('kobold', 'assets/images/kobold.png'),
      this.load.image('ogre', 'assets/images/ogre.png'),
      this.load.image('paladin', 'assets/images/paladin.png'),
      this.load.image('playercard', 'assets/images/playercard.png'),
      this.load.image('restartbutton', 'assets/images/restartbutton.png'),
      this.load.image('shield', 'assets/images/shield.png'),
      this.load.image('troll', 'assets/images/troll.png'),
      this.load.bitmapFont('pressstart', 'assets/fonts/pressstart.png', 'assets/fonts/pressstart.fnt')
  }
}