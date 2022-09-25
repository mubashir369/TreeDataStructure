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
    insert(value){
        const newNode=new Node(value)
        if(this.isEmpty()){
            this.root=newNode
        }else{
            insertNode(this.root,newNode)
        }
    }
    insertNode(root,newNode){
        if(newNode.value<root.value){
            if(root.left==-null){
                root.left=newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right===null){
                root.right=newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }
    search(root, value) {
        if (!root) {
          return false;
        } else {
          if (root.value === value) {
            return true;
          } else if (value < root.value) {
            return this.search(root.left, value);
          } else {
            return this.search(root.right, value);
          }
        }
      }
      preOrder(root) {
        if (root) {
          console.log(root.value);
          this.preOrder(root.left);
          this.preOrder(root.right);
        }
      }
      inOrder(root) {
        if (root) {
          this.inOrder(root.left);
          console.log(root.value);
          this.inOrder(root.right);
        }
      }
      postOrder(root) {
        if (root) {
          this.postOrder(root.left);
          this.postOrder(root.right);
          console.log(root.value);
        }
      }

}