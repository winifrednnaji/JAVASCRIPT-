
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    append(data){
        let newNode = new Node(data);

        if(this.head == null){
            this.head = newNode;
        }
        else{
            let current = this.head;
            while(current.next != null){
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }
    prepend(data){
        let newNode = new Node(data);
        let current = this.head;
        newNode.next = current;
        this.head = newNode;
        this.size++;
    }

    insertAt(data, position){
        
        if(position < 0 || position > this.size){
            return;
        }
         let current = this.head;
         let counter = 0;
            while(current.next != null){
                current = current.next;
                counter++;
                if(counter == position){
                    let newNode = new Node(data);
                    let temp = current.next;
                    current.next = newNode;
                    newNode.next = temp;
                    this.size++;
                    break;
                }

            }

    }
}
module.exports = {LinkedList, Node}
