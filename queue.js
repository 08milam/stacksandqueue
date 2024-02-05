/** Node: node for a queue. */

/** Node: node for a stack.
 * Represents a single node in a linked list-based stack.
 */
class Node {
  constructor(val) {
    // Initialize the value stored in this node
    this.val = val;

    // Initialize the reference to the next node to null
    this.next = null;
  }
}


/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

 /** enqueue(val): add a new value to the end of the queue.
 * Returns undefined. */
enqueue(val) {
  // Create a new node with the given value
  const newNode = new Node(val);

  // Check if the queue is currently empty (no nodes)
  if (this.isEmpty()) {
    // If the queue is empty, set both the first and last pointers
    // to the new node since it's the only node in the queue
    this.first = newNode;
    this.last = newNode;
  } else {
    // If the queue is not empty, set the current last node's "next" pointer
    // to point to the new node, and update the last pointer to the new node
    this.last.next = newNode;
    this.last = newNode;
  }

  // Increase the size of the queue by 1 to reflect the addition of the new node
  this.size++;
}


/** dequeue(): remove and return the value of the first node in the queue.
 * Should throw an error if the queue is empty. */
dequeue() {
  // Check if the queue is empty
  if (this.isEmpty()) {
    // If the queue is empty, throw an error indicating that the queue is empty
    throw new Error('Queue is empty');
  }

  // Get a reference to the first node (the one to be removed)
  const removedNode = this.first;

  // If there is only one node in the queue
  if (this.size === 1) {
    // Set both the first and last pointers to null
    this.first = null;
    this.last = null;
  } else {
    // If there are more than one nodes in the queue, update the first pointer
    // to point to the next node in the queue
    this.first = this.first.next;
  }

  // Decrease the size of the queue by 1 to reflect the removal of the first node
  this.size--;

  // Return the value of the removed node
  return removedNode.val;
}


/** peek(): return the value of the first node in the queue.
 * If the queue is empty, return undefined. */
peek() {
  // Check if the queue is empty
  if (this.isEmpty()) {
    // If the queue is empty, there's nothing to peek at, so return undefined
    return undefined;
  }

  // Return the value of the first node in the queue (the front of the queue)
  return this.first.val;
}

  /** isEmpty(): return true if the queue is empty, otherwise false */
  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Queue;
