class Item {

    constructor(item_code, item_name, item_quantity, item_price) {
        this.item_code = item_code;
        this.item_name = item_name;
        this.item_quantity = item_quantity;
        this.item_price = item_price;
    }

    get item_code() {
        return _item_code;
    }

    set item_code(item_code) {
        this._item_code = item_code;
    }

    get item_name() {
        return _item_name;
    }

    set item_name(item_name) {
        this._item_name = item_name;
    }

    get item_quantity() {
        return _item_quantity;
    }

    set item_quantity(item_quantity) {
        this._item_quantity = item_quantity;
    }

    get item_price() {
        return _item_price;
    }

    set item_price(item_price) {
        this._item_price = item_price;
    }


}