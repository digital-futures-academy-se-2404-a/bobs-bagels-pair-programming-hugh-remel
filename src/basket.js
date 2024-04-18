 const basket = {
     items: [],
     capacity: 5,
     checkType(item) {
         if (item === null) {
             return false
         } 
        return true
     },
     addItem(item) {
         let check = this.checkType(item)
         check && !this.isFull() ? this.items.push(item) : ''
     },
     removeItem(item) {
        this.items = this.items.filter(items => items !== item)
     },
     isFull() {
         return this.items.length === 5
     },
     setCapacity(size) {
         size >= 1 ? this.capacity = size : ''
     }

     
 }


export default basket;