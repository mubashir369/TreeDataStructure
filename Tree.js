//Create A Node
class Node{
    constructor(value){
        this.value=value
        this.right=null
        this.left=null
    }
}
//create Binary Search Tree
class BinarySearchTree{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root===null
    }
}