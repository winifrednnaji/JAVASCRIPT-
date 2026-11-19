const {PotentialLovers, LinkedList} = require('./linkedList');

describe('LinkedList', () => {
    let lovers;
    beforeEach(() => {
        lovers = new PotentialLovers();
    });


    test('that the numbers of both petals are even and odd respectively', () => {

        petals = [5,6]
        expect(lovers.loveTest).toEqual(true);
    });
});