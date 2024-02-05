/** Node: node for a stack. */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */
class Stack {
  constructor() {
    // Initialize the first pointer to null 
    this.first = null;
    // Initialize the last pointer to null
    this.last = null;
    // Initialize the size to 0
    this.size = 0;
  }

/** push(val): add new value to the end of the stack. Returns undefined. */
push(val) {
  // Create a new node with the given value
  const newNode = new Node(val);

  // Check if the stack is currently empty (no nodes)
  if (!this.first) {
    // If the stack is empty, set both the first and last pointers
    // to the new node since it's the only node in the stack
    this.first = newNode;
    this.last = newNode;
  } else {
    // If the stack is not empty, set the new node's "next" pointer
    // to point to the current first node (the previous top of the stack)
    newNode.next = this.first;

    // Update the first pointer to the new node, making it the new top of the stack
    this.first = newNode;
  }

  // Increase the size of the stack by 1 to reflect the addition of the new node
  this.size++;
}


/** pop(): remove the node from the top of the stack
 * and return its value. Should throw an error if the stack is empty. */
pop() {
  // Check if the stack is empty
  if (this.isEmpty()) {
    // If the stack is empty, throw an error
    throw new Error("Stack is empty");
  }

  // Get a reference to the first node (the one to be removed)
  const removedNode = this.first;

  // If there is only one node in the stack
  if (this.size === 1) {
    // Set both the first and last pointers to null
    this.first = null;
    this.last = null;
  } else {
    // If there are more than one nodes in the stack, update the first pointer
    // to point to the next node in the stack
    this.first = this.first.next;
  }

  // Decrease the size of the stack by 1
  this.size--;

  // Return the value of the removed node
  return removedNode.val;
}


/** peek(): return the value of the first node in the stack.
 * If the stack is empty, return undefined. */
peek() {
  // Check if the stack is empty
  if (this.isEmpty()) {
    // If the stack is empty, there's nothing to peek at, so return undefined
    return undefined;
  }

  // Return the value of the first node in the stack (the top of the stack)
  return this.first.val;
}


  /** isEmpty(): return true if the stack is empty, otherwise false */
  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Stack;
