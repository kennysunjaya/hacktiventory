// authorization
// create user
/** Function Register */
function register() {
  let userInfo = {
    userProfilePicture: "default.png",
    nama: document.getElementById("fullname").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    category: [],
    order: {},
  };
  let repeatPassword = document.getElementById("repeatPassword").value;

  if (repeatPassword !== userInfo["password"]) {
    alert("Passwords do not match!");
    return;
  }

  if (noEmailDuplicate(userInfo)) {
    let hackTinventory = getHackTinventory();
    hackTinventory.push(userInfo);
    localStorage.setItem("hackTinventory", JSON.stringify(hackTinventory));
    console.log("Registration successful");
    window.location.href =
      "http://127.0.0.1:5500/hackaton%20phase%200/index.html";
  } else {
    alert("Email is already in use!");
  }
}

function noEmailDuplicate(userInfo) {
  let hackTinventory = getHackTinventory();
  for (let i = 0; i < hackTinventory.length; i++) {
    if (hackTinventory[i]["email"] === userInfo["email"]) {
      return false;
    }
  }
  return true;
}

// function untuk menyimpan hackTiventory ke local storage
function initializeLocalStorage() {
  // mengambil hackTinventory dan memasukkannya ke variabel existing inventory
  let existingInventory = localStorage.getItem("hackTinventory");
  // kalau di localstorage tidak ada object hackTinventory
  if (!existingInventory) {
    // kalau tidak ada object, maka setItemnya di dalam local storage
    localStorage.setItem("hackTinventory", JSON.stringify(hactiventory));
  } else {
    // kalau ada objectnya di local storage
    let inventoryArray = JSON.parse(existingInventory);
    // looping hactiventory yang awal
    for (let user of hactiventory) {
      if (
        !inventoryArray.some(
          (existingUser) => existingUser.email === user.email
        )
      ) {
        inventoryArray.push(user);
      }
    }
    localStorage.setItem("hackTinventory", JSON.stringify(inventoryArray));
  }
}

// function untuk mengambil hactIventory dari local storage
function getHackTinventory() {
  return JSON.parse(localStorage.getItem("hackTinventory")) || [];
}

initializeLocalStorage();
// selesai mengambil ke dan dari local storage

/* ====================================================================================================== */

// login (read user)
function login() {
  // Ambil data dari local storage
  let hackTinventory = getHackTinventory();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Loop melalui setiap user di local storage
  for (let i = 0; i < hackTinventory.length; i++) {
    if (
      email == hackTinventory[i]["email"] &&
      password == hackTinventory[i]["password"]
    ) {
      console.log("Login successful");
      // Redirect ke halaman home setelah login sukses

      // mengambil item
      let item = [];
      for (let j = 0; j < hackTinventory[i].category.length; j++) {
        let temp = {};
        let category = hackTinventory[i].category;
        let perCategory = category[j];
        let categoryName = perCategory.categoryName;
        let itemPercategory = perCategory.item;
        for (let k = 0; k < itemPercategory.length; k++) {
          temp.category = categoryName;
          temp.itemImage = itemPercategory[k].itemImage;
          temp.itemName = itemPercategory[k].itemName;
          temp.itemPrice = itemPercategory[k].itemPrice;
          temp.modalPrice = itemPercategory[k].modalPrice;
          temp.quantity = itemPercategory[k].quantity;
          item.push(temp);
        }
      }

      // memasukkan semua data yang dibutuhkan ke dalam userData
      let userData = {
        user: {
          nama: hackTinventory[i].nama,
          email: hackTinventory[i].email,
        },
        category: hackTinventory[i].category,
        order: hackTinventory[i].order,
        item: item,
      };

      // Menyimpan userData ke session storage
      sessionStorage.setItem("user", JSON.stringify(userData.user));
      sessionStorage.setItem("category", JSON.stringify(userData.category));
      sessionStorage.setItem("order", JSON.stringify(userData.order));
      sessionStorage.setItem("item", JSON.stringify(userData.item));

      // Mengeluarkan object userData
      console.log(userData);

      // nanti nyalakan setelah console.log keluar
      window.location.href = "view/about.html";
      return userData; // Menghentikan fungsi jika login berhasil
    }
  }
  // Jika tidak ada kecocokan
  console.log("Email atau password salah");
}
