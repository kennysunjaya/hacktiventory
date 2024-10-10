let userInfo =
  // object yang pertama
  {
    userProfilePicture: "default.png",
    nama: "John Doe",
    email: "johndoe@gmail.com",
    password: "12345",
    category: [
      {
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
      },
      {
        categoryID: 1,
        categoryName: "Peralatan Rumah Tangga",
        item: [
          {
            itemImage: "/PeralatanRumahTangga/MamaLemon.jpg",
            itemName: "MamaLemon",
            itemPrice: 20000,
            modalPrice: 17500,
            quantity: 40,
          },
          {
            itemImage: "/PeralatanRumahTangga/Rinso.jpg",
            itemName: "Rinso",
            itemPrice: 36000,
            modalPrice: 34000,
            quantity: 24,
          },
          {
            itemImage: "/PeralatanRumahTangga/SapuLidi.jpg",
            itemName: "SapuLidi",
            itemPrice: 18000,
            modalPrice: 15000,
            quantity: 40,
          },
          {
            itemImage: "/PeralatanRumahTangga/Sunlight.jpeg",
            itemName: "Sunlight",
            itemPrice: 24000,
            modalPrice: 22000,
            quantity: 40,
          },
          {
            itemImage: "/PeralatanRumahTangga/SuperPel.jpg",
            itemName: "SuperPel",
            itemPrice: 18000,
            modalPrice: 16000,
            quantity: 40,
          },
        ],
      },
      {
        categoryID: 2,
        categoryName: "Kesehatan & Kecantikan",
        item: [
          {
            itemImage: "/KesehatanDanKecantikan/Biore.jpg",
            itemName: "Biore",
            itemPrice: 18000,
            modalPrice: 16000,
            quantity: 40,
          },
          {
            itemImage: "/KesehatanDanKecantikan/Garnier.jpg",
            itemName: "Garnier",
            itemPrice: 25000,
            modalPrice: 23500,
            quantity: 24,
          },
          {
            itemImage: "/KesehatanDanKecantikan/Kahf.jpg",
            itemName: "Kahf",
            itemPrice: 24000,
            modalPrice: 23000,
            quantity: 40,
          },
          {
            itemImage: "/KesehatanDanKecantikan/Kelly.jpg",
            itemName: "Kelly",
            itemPrice: 25000,
            modalPrice: 23500,
            quantity: 40,
          },
          {
            itemImage: "/KesehatanDanKecantikan/Zinc.jpg",
            itemName: "Zinc",
            itemPrice: 18000,
            modalPrice: 16000,
            quantity: 40,
          },
        ],
      },
    ],
    order: [
      {
        item: [
          {
            itemName: "Indomie",
            jumlahItem: 7,
          },
          {
            itemName: "MamaLemon",
            jumlahItem: 3,
          },
        ],
      },
    ],
  };

// create category
function addCategory(userInfo, namaKategori) {
  let category = userInfo["category"];
  let kategoriSudahAda = false;
  for (let i = 0; i < category.length; i++) {
    if (namaKategori === category[i]["categoryName"]) {
      kategoriSudahAda = true;
    }
  }
  if (kategoriSudahAda) {
    console.log("kategori sudah ada");
  } else {
    let newCategory = {
      categoryID: category.length,
      categoryName: namaKategori,
      item: [],
    };
    userInfo["category"].push(newCategory);
  }
}
//TEST CASE
// console.log(addCategory(userInfo, "Kenny"));
// console.log(userInfo);

// read category
function getCategory(userInfo, namaKategori) {
  let category = userInfo["category"];
  let categoryFound = false;
  for (let i = 0; i < category.length; i++) {
    if (category[i]["categoryName"] === namaKategori) {
      console.log(category[i]["item"]);
      categoryFound = true;
    }
  }
  if (categoryFound === false) {
    console.log("Kategori Tidak Ditemukan");
  }
}
//TEST CASE
// console.log(getCategory(userInfo, "Kesehatan & Kecantikan"));
// console.log(userInfo);

// updatecategory
function updateCategory(userInfo, namaKategori, namaItem, itemValue) {
  let category = userInfo["category"];
  let categoryFound = false;
  for (let i = 0; i < category.length; i++) {
    if (category[i]["categoryName"] === namaKategori) {
      // MASUKKAN FUNGSI UPDATE ITEM DISINI
      categoryFound = true;
    }
  }
  if (categoryFound === false) {
    console.log("Kategori Tidak Ditemukan");
  }
}
//TEST CASE
// console.log(updateCategory(userInfo, "Kesehatan & Kecantikan", namaItem, itemValue ));
// console.log(userInfo);

// delete category
function deleteCategory(userInfo, namaKategori) {
  let newCategory = [];
  let category = userInfo["category"];
  for (let i = 0; i < category.length; i++) {
    if (category[i]["categoryName"] !== namaKategori) {
      newCategory.push(category[i]);
    }
  }
  userInfo["category"] = newCategory;
}
//TEST CASE
// console.log(deleteCategory(userInfo, "Kesehatan & Kecantikan"));
// console.log(userInfo);
