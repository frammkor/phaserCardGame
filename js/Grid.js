import CardGrid from './CardGrid.js';
import cardTypes from './cardTypes.js';

export default class Grid {
  constructor(data) {
    let { scene, columns, rows } = data;
    this.xOffset = 120;
    this.yOffset = 280;
    this.yStart = scene.game.config.height / 2;
    this.columns = columns;
    this.rows = rows;
    this.scene = scene;
    this.cards = [];
    this.addCards(0);
  }

  addCards(startIndex) {
    for (let index = startIndex; index < this.columns * this.rows; index++) {
      const cardType = cardTypes[Math.floor(Math.random() * cardTypes.length)];
      let card = new CardGrid({
        scene: this.scene,
        x: this.xOffset + (this.scene.game.config.width / 2 - this.xOffset) * (index % this.columns),
        y: this.yStart - this.yOffset * Math.floor(index / this.columns),
        card: 'card',
        image: cardType.image,
        value: cardType.value,
        name: cardType.name,
        type: cardType.type,
      });
      card.depth = 0;
      this.cards.push(card);
    }
  }

  fadeFrontRow() {
    setTimeout(() => {
      // deleting the first three cards
      this.cards.splice(0, 3).forEach(card => card.destroy());
      // moving down all he cards
      this.cards.forEach(card => {
        this.scene.tweens.add({
          targets: card,
          duration: 400,
          y: card.y + this.yOffset
        })
      })
    }, 1000);

    // fade fast the two cards that were not selected
    this.cards.slice(0, 3).forEach(card => {
      if (!card.select) {
        this.scene.tweens.add({ targets: card, alpha: 0, duration: 200 })
      }
    })
  }
}