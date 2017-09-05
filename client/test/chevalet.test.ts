/*

import 'reflect-metadata';
import { ChevaletComponent } from './../app/chevalet/chevalet.component';
import { Lettre } from './../app/lettre/lettre';
import { LettreReserve } from './../app/lettre/lettre-reserve';
import { ReserveLettresService } from './../app/lettre/reserve-lettres.service';

let assert = require('chai').assert;

let reserveLettresService = new ReserveLettresService;
let chevaletComponent = new ChevaletComponent(reserveLettresService);

function resetReserveLettres(){
let RESERVELETTRES: LettreReserve[] = [
    new LettreReserve(new Lettre('A', 1), 9),
    new LettreReserve(new Lettre('B', 3), 2),
    new LettreReserve(new Lettre('C', 3), 2),
    new LettreReserve(new Lettre('D', 2), 3),
    new LettreReserve(new Lettre('E', 1), 15),
    new LettreReserve(new Lettre('F', 4), 2),
    new LettreReserve(new Lettre('G', 2), 2),
    new LettreReserve(new Lettre('H', 4), 2),
    new LettreReserve(new Lettre('I', 1), 8),
    new LettreReserve(new Lettre('J', 8), 1),
    new LettreReserve(new Lettre('K', 10), 1),
    new LettreReserve(new Lettre('L', 1), 5),
    new LettreReserve(new Lettre('M', 2), 3),
    new LettreReserve(new Lettre('N', 1), 6),
    new LettreReserve(new Lettre('O', 1), 6),
    new LettreReserve(new Lettre('P', 3), 2),
    new LettreReserve(new Lettre('Q', 8), 1),
    new LettreReserve(new Lettre('R', 1), 6),
    new LettreReserve(new Lettre('S', 1), 6),
    new LettreReserve(new Lettre('T', 1), 6),
    new LettreReserve(new Lettre('U', 1), 6),
    new LettreReserve(new Lettre('V', 4), 2),
    new LettreReserve(new Lettre('W', 10), 1),
    new LettreReserve(new Lettre('X', 10), 1),
    new LettreReserve(new Lettre('Y', 10), 1),
    new LettreReserve(new Lettre('Z', 10), 1),
    new LettreReserve(null, 2)
];

chevaletComponent.setLettresReserve(RESERVELETTRES);
}

resetReserveLettres();


// Debut des tests.

describe('Array', function() {
  describe('#getNbrLettresReserve()', function() {
    it('calcule le nombre de lettres dans la reserve si rien nest enlever (devrait etre 102)', function() {
      assert.equal(chevaletComponent.getNbrLettresReserve(), 102);
    });
    it('On enleve 7 lettres de la reserve, il devrait y en avoir 95', function() {
      chevaletComponent.getRandomLettres(7);
      assert.equal(chevaletComponent.getNbrLettresReserve(), 95);
      resetReserveLettres();
    });
  });

    describe('#getRandomLettres()', function() {
    it(`On essaye denlever 103 lettres de la reserve, donc il devrait avoir
             102 lettres car la fonction ne devrait rien faire`, function() {
      chevaletComponent.getRandomLettres(103);
      assert.equal(chevaletComponent.getNbrLettresReserve(), 102);
      resetReserveLettres();
    });
      it(`On entre 7 en parametre, donc la fonction devrait retourner un tableau
          avec 7 lettres`, function() {
      let tableauLettres = chevaletComponent.getRandomLettres(7);
      assert.equal(tableauLettres.length, 7);
      resetReserveLettres();
    });
      it(`On entre 0 en parametre donc la fonction retourne un tableau vide`, function() {
      let tableauLettres = chevaletComponent.getRandomLettres(0);
      assert.equal(tableauLettres.length, 0);
      resetReserveLettres();
    });
  });
});

*/
