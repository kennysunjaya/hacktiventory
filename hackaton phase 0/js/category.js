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
