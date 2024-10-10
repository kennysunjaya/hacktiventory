let categoryItem = {
  categoryID: 0,
  categoryName: "Makanan & Minuman",
  item: [
    {
      // edit di sini
      itemImage: "/MakananDanMinuman/Indomie.jpeg",
      itemName: "Indomie",
      itemPrice: 4000,
      modalPrice: 3000,
      quantity: 40,
    },
    {
      itemImage: "/MakananDanMinuman/PocariSweat.jpeg",
      itemName: "PocariSweat",
      itemPrice: 5000,
      modalPrice: 3500,
      quantity: 24,
    },
    {
      itemImage: "/MakananDanMinuman/PopMie.jpg",
      itemName: "PopMie",
      itemPrice: 6000,
      modalPrice: 4000,
      quantity: 24,
    },
    {
      itemImage: "/MakananDanMinuman/SilverQueen.jpg",
      itemName: "SilverQueen",
      itemPrice: 16000,
      modalPrice: 13500,
      quantity: 24,
    },
    {
      itemImage: "/MakananDanMinuman/SlaiOlai.jpeg",
      itemName: "SlaiOlai",
      itemPrice: 6000,
      modalPrice: 4000,
      quantity: 24,
    },
  ],
};

// create item
function addItem(
  categoryItem,
  namaItem,
  gambarItem,
  hargaItem,
  modalItem,
  quantityItem
) {
  let item = categoryItem["item"];
  let itemSudahAda = false;
  for (let i = 0; i < item.length; i++) {
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
      quantity: 40,
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
