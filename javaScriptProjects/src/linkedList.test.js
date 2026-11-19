const {LinkedList} = require('./linkedList');

describe('LinkedList', () => {
    let list;
    beforeEach(() => {
        list = new LinkedList();
    });

    test('that a linkedList created is empty', () => {
        expect(list.head).toBeNull();
        expect(list.size).toEqual(0);
    });
});