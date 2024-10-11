let hactiventory = [
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
  },
];

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
