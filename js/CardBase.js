export default class CardBase extends Phaser.GameObjects.Container {
  constructor(data) {
    let { scene, x, y, name, card, image, depth } = data;
    let spriteCard = new Phaser.GameObjects.Sprite(scene, 0, 0, card);
    let spriteImage = new Phaser.GameObjects.Sprite(scene, 0, 0, image);
    let textName = new Phaser.GameObjects.BitmapText(scene, 0, 0, 'pressstart', name, 16, Phaser.GameObjects.BitmapText.ALIGN_CENTER)
    super(scene, x, y, [spriteCard, spriteImage, textName]);
    this.spriteCard = spriteCard;
    this.spriteImage = spriteImage;
    this.textName = textName;
    this.depth = depth;
    this.scene = scene;
    this.cardname = name;
    this.scene.add.existing(this);
  }

  // fixing the card's name to be center bottom of it
  set cardname(newName) {
    this._cardname = newName;
    this.textName.text = this._cardname;
    this.textName.maxWidth = this.spriteCard.width; // prevents the name field from been wither than the one from the card
    this.textName.tint = 0; // text color
    this.textName.x = -this.textName.width / 2; // X alignment of the card name
    this.textName.y = 120 - this.textName.height;
  }

  deadAnimation() {
    this.scene.tweens.add({
      targets: this.spriteImage,
      alpha: 0,
      duration: 100,
      repeat: 1,
      yoyo: true,
      onCompleate: () => {
        this.spriteImage.setTexture('dead');
      }
    })
  }
}