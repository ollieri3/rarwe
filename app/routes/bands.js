import Route from '@ember/routing/route';
import { tracked } from '@glimmer/tracking';

export class Band {
  @tracked name;
  @tracked songs;

  constructor({ id, name, songs }) {
    this.id = id;
    this.name = name;
    this.songs = songs;
  }
}

export class Song {
  constructor({ title, rating, band }) {
    this.title = title;
    this.rating = rating;
    this.band = band;
  }
}

export default class BandsRoute extends Route {
  model() {
    let blackdog = new Song({
      title: 'Black Dog',
      band: 'Led Zeppelin',
      rating: 3,
    });

    let yellowLedbetter = new Song({
      title: 'Yellow Ledbetter',
      band: 'Pearl Jam',
      rating: 4,
    });

    let pretender = new Song({
      title: 'The Pretender',
      band: 'Foo Fighters',
      rating: 2,
    });

    let daughter = new Song({
      title: 'Daughter',
      band: 'Pearl Jam',
      rating: 5,
    });

    let ledZeppelin = new Band({
      id: 'led-zeppelin',
      name: 'Led Zeppelin',
      songs: [blackdog],
    });

    let pearlJam = new Band({
      id: 'pearl-jam',
      name: 'Pearl Jam',
      songs: [yellowLedbetter, daughter],
    });

    let fooFighters = new Band({
      id: 'foo-fighters',
      name: 'Foo Fighters',
      songs: [pretender],
    });

    return [ledZeppelin, pearlJam, fooFighters];
  }
}
