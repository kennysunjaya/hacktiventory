/** Local Storage */
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
    order: {
      orderID: 0,
      orderCategory: 1,
    },
  },
  // object yang kedua
  {
    userProfilePicture: "default.png",
    nama: "Jane Doe",
    email: "janedoe@gmail.com",
    password: "54321",
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
    order: {
      orderID: 0,
      orderCategory: 1,
    },
  },
  {
    userProfilePicture: "default.png",
    nama: "Keanu Reeve",
    email: "keanureeve@gmail.com",
    password: "12345",
  },
];

// function untuk menyimpan hackTiventory ke local storage
function initializeLocalStorage() {
  localStorage.setItem("hackTiventory", JSON.stringify(hactiventory));
}

// function untuk mengambil hactIventory dari local storage
function getHackTinventory() {
  return JSON.parse(localStorage.getItem("hackTiventory")) || [];
}
initializeLocalStorage();
// selesai mengambil ke dan dari local storage

/** Fungsi cek repeat password dan email duplikat */
function noRepeatPassword(userInfo) {
  return userInfo["password"] === userInfo["repeatPassword"];
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

/** Function Register */
function register() {
  let userInfo = {
    name: document.getElementById("nama").value,
    email: document.getElementById("email").value,
    password: document.getElementById("newPassword").value,
    repeatPassword: document.getElementById("repeatNewPassword").value,
    category: [],
    order: {},
  };
  if (noRepeatPassword(userInfo) && noEmailDuplicate(userInfo)) {
    let hackTinventory = getHackTinventory();
    hackTinventory.push(userInfo);
    localStorage.setItem("hackTiventory", JSON.stringify(hackTiventory));
    console.log("Registration successful");
  } else if (noRepeatPassword(userInfo) === false) {
    console.log("Password diulang dengan salah");
  } else if (noEmailDuplicate(userInfo) == false) {
    console.log("Email sudah dipakai");
  }
}

// // // /** Function Change Password  */
// // // let objPassword = {
// // //   email: "johndoe@gmail.com",
// // //   password: "password lama",
// // //   newPassword: "password baru",
// // //   repeatNewPassword: "password baru",
// // // };

// // // function changePassword(objPassword, db_user) {
// // //   if (
// // //     objPassword["password"] !== objPassword["newPassword"] &&
// // //     objPassword["newPassword"] === objPassword["repeatNewPassword"]
// // //   ) {
// // //     for (let i = 0; i < db_user.length; i++) {
// // //       if (objPassword["email"] === db_user[i]["email"]) {
// // //         db_user[i]["password"] = objPassword["newPassword"];
// // //       }
// // //     }
// // //   }
// // //   return db_user;
// // // }
