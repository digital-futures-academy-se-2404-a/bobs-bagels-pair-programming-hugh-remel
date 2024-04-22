class Item {
    #name
    constructor(name='Bagel') {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }
}

export default Item;