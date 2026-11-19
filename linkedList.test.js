const {LinkedList} = require('./linkedList');

describe('LinkedList', () => {
    let list;

    beforeEach(() => {
        list = new LinkedList();
    });

    test('that a linked list created is empty', () => {
        expect(list.head).toBeNull();
        expect(list.size).toEqual(0);   
    });

    test('that a node can be added to the linked list', () => {
        //when i
        list.append(10);
        //assert that   
        expect(list.size).toEqual(1);
    });
    test('that i can prepend to a list with other nodes', () => {
        //given
        list.append(10);
        list.append(20);
        //when
        list.prepend(30);
        //assert 
        expect(list.size).toBe(3);
        expect(list.head.data).toBe(30);
    })
    test('that prepend adds a node to a list with no nodes', () => {
        //when
        list.prepend(10);
        //assert
        expect(list.size).toBe(1);
        expect(list.head.data).toBe(10);
    })
    test('that a node is inserted at the specified position of the list', () => {
        //given
        list.append(30);
        list.append(20);
        list.append(10)
        //when
        list.insertAt(4,1);
        //assert
        expect(list.size).toBe(4);

    })
})