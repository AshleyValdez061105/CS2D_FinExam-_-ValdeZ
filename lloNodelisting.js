class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
    this.printList(); // Print the list after each append
  }


  bubbleSort() {
    if (!this.head || !this.head.next) return; // Nothing to sort

    let swapped;
    do {
      swapped = false;
      let current = this.head;
      let prev = null;
      while (current.next) {
        if (current.data > current.next.data) {
          // Swap nodes
          if (prev) {
            prev.next = current.next;
          } else {
            this.head = current.next;
          }
          const temp = current.next;
          current.next = temp.next;
          temp.next = current;
          prev = temp;
          swapped = true;
        } else {
          prev = current;
          current = current.next;
        }
      }
    } while (swapped);
  }


  printList() {
    let current = this.head;
    let str = "";
    while (current) {
      str += current.data + " ";
      current = current.next;
    }
    console.log("Linked List:", str);
  }
}


const myList = new LinkedList();
myList.append(30);
myList.append(10);
myList.append(20);
myList.append(5);
myList.append(40);

console.log("Unsorted List:");
myList.printList();

myList.bubbleSort();

console.log("\nSorted List:");
myList.printList();
