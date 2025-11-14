import { Linkedlist } from "./LinkedList.js";
const list = new Linkedlist();
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

list.append(10);
list.append(20);
list.prepend(5);

console.log(list.toString());
console.log("Size:", list.size());
console.log("Tail:", list.tailNode.value);
console.log("Contains 10:", list.contains(10));
console.log("Find 20:", list.find(20));