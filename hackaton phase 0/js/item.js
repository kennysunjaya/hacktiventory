// create item
function addItem(categoryItem, namaItem, gambarItem, hargaItem, modalItem, quantityItem) {
    let item = categoryItem["item"];
    let itemSudahAda = false;
    for (let i = 0; i < item.length; i++) {
        console.log(namaItem, item[i]["itemName"]);
        if (namaItem === item[i]["itemName"]) {
            itemSudahAda = true;
        }
    }
    if (itemSudahAda) {
        console.log("kategori sudah ada");
    } else {
        let newItem = {
            itemImage: "/MakananDanMinuman/Indomie.jpeg",
            itemName: "Indomie",
            itemPrice: 4000,
            modalPrice: 3000,
            quantity: 40
        };
        categoryItem.push(newItem);
    }
}

// read Item
function getItem() {}

// updateItem
function updateItem() {}

// delete item
function deleteItem() {}
