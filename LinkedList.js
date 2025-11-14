import { Node } from "./Node";
export class Linkedlist{
    constructor(){
        this.head = null;
    }
    append(value){
    const newNode = new Node(value);
    if (this.head === null) {
        this.head = newNode;
        return;
        }
    let current = this.head;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    current.nextNode = newNode;
    }

    prepend(value){
    const newNode = new Node(value);
    if (this.head === null) {
        this.head = newNode;
        return;
        }

    newNode.nextNode = this.head;
    this.head = newNode; 
    }

    size(){
        if(this.head === null){
            console.log("this ia an empty list")
            return 0;
        }
        let listsize = 0;
        let current = this.head;
        while (current !== null) {
            listsize+=1; 
            current = current.nextNode;     
    }
    console.log(`the linked list has ${listsize} elements`)
    return listsize;
    }

    get headNode(){
        return this.head;
    }

    get tailNode(){
        if (!this.head) return null;
        let current = this.head;
        while(current.nextNode !== null){
            current = current.nextNode;
        }
        return current;
    }

    at(index){
        let parserindex = 0;
        if(index < 0||index>(this.size()-1)){
            console.log("no node exist at that index")
            return null;
        }
        let current = this.head;
        while (current !== null) {
           if(parserindex === index) return current; 
            parserindex+=1;
            current = current.nextNode;             
    }
    return null;
    }

    pop(){
        if(!this.head) return null;
        if (!this.head.nextNode) {
        const removedNode = this.head;
        this.head = null; 
        return removedNode;
    }
        let currentNode = this.head;
        let previousNode;
        while(currentNode.nextNode !== null){
            previousNode = currentNode;
            currentNode = currentNode.nextNode;
        }
        previousNode.nextNode = null;
        return currentNode;
    }

    contains(value){
        if(!this.head) return false;
        let currentNode = this.head;
        while(currentNode !== null){
            if(currentNode.value === value) return true;
            currentNode = currentNode.nextNode;
        }
        return false;
    }

    find(value){
        if(!this.head) return null;
        let currentNode = this.head;
        let index = 0;
        while(currentNode !== null){
            if(currentNode.value === value) return index;
            index ++;
            currentNode = currentNode.nextNode;
        }
        return null;
    }

    toString(){
        if(!this.head) return "(head) -> null";
        let current = this.head;
        let string = "";
        while(current !== null){
            string += `(${current.value}) -> `;
            current = current.nextNode;
        }
        string += "null ";
        return string;
    }
}