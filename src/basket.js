//  const basket = {
//      items: [],
//      capacity: 5,
//      checkType(item) {
//          if (item === null) {
//              return false
//          } 
//         return true
//      },
//      addItem(item) {
//          let check = this.checkType(item)
//          check && !this.isFull() ? this.items.push(item) : ''
//      },
//      removeItem(item) {
//         this.items = this.items.filter(items => items !== item)
//      },
//      isFull() {
//          return this.items.length === 5
//      },
//      setCapacity(size) {
//          size >= 1 ? this.capacity = size : ''
//      }

     
//  }


class Basket {
    #capacity
    #items = []
    constructor(capacity=5) {
        this.#capacity = capacity
    }
    checkType(item) {
         if (item.getName() === null) {
             return false
         } 
        return true
     }
     addItem(item) {
         let check = this.checkType(item)
         check && !this.isFull() ? this.#items.push(item) : ''
     }
     removeItem(item) {
        this.#items = this.#items.filter(items => items !== item)
     }
     isFull() {
         return this.#items.length === this.#capacity
     }
     setCapacity(size) {
         size >= 1 ? this.#capacity = size : ''
     }
    
    getItems() {
        return this.#items
    }
    getCapacity() {
        return this.#capacity
    }
}




export default Basket;