////////////////////////////////////// Coding RAGA/////////////////////////////////

// let hasil;
// let email = `johndoe@gmail.com`
// let passcontoh = "12345"

// function encryptPassword(password) {
//   return btoa(password);
// }

// let pass = encryptPassword(passcontoh) // encryptedPassword Base
// console.log(pass);
// function decryptPassword(encryptedPassword) {
//   return atob(encryptedPassword); // Decrypt hasil encrypt
// }

// let hasildecryp = decryptPassword(pass)
// console.log(hasildecryp);

// ////  Konversi array objek ke string dan simpan ke sessionStorage
// sessionStorage.setItem("hactiventory", JSON.stringify(hactiventory));

// // . Ambil kembali data dari sessionStorage
// const storedhactiventory = sessionStorage.getItem("hactiventory");

// // . Konversi string kembali menjadi array objek
// const parsedhactiventory = JSON.parse(storedhactiventory);

// console.log([parsedhactiventory]);

//authorization
function Login() {
    // console.log(`hehe`);

    for (let i = 0; i < hactiventory.length; i++) {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        // console.log(email , hactiventory[i]["email"])
        if (email == hactiventory[i]["email"] && password == hactiventory[i]["password"]) {
            // console.log(hactiventory[i]);
            window.location.href = "../home.html";
            break;
        } else if (email !== hactiventory[i]["email"] && password !== hactiventory[i]["password"]) {
            console.log(`login yang anda masukan salah`);
            break;
        }
    }
}

// delete aray

const array = [
    { id: 1, name: "John" },
    { id: 2, name: "Doe" },
    { id: 3, name: "Jane" }
];

//nama yang ingin dihapus
const nameToDelete = `John`;

for (let i = 0; i < array.length; i++) {
    if (array[i].name === nameToDelete) {
        for (let j = i; j < array.length - 1; j++) {
            array[j] = array[j + 1];
        }
        //hapus elemen terakhir(karena sudah digeser kedepan)
        array.length--;
        break; //keluar dari loop setelah objek ditemukan
    }
}

// console.log(array);

////////////////////////////////////// Coding KENNY /////////////////////////////////

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
                        quantity: 40
                    },
                    {
                        itemImage: "/MakananDanMinuman/PocariSweat.jpeg",
                        itemName: "PocariSweat",
                        itemPrice: 5000,
                        modalPrice: 3500,
                        quantity: 24
                    },
                    {
                        itemImage: "/MakananDanMinuman/PopMie.jpg",
                        itemName: "PopMie",
                        itemPrice: 6000,
                        modalPrice: 4000,
                        quantity: 24
                    },
                    {
                        itemImage: "/MakananDanMinuman/SilverQueen.jpg",
                        itemName: "SilverQueen",
                        itemPrice: 16000,
                        modalPrice: 13500,
                        quantity: 24
                    },
                    {
                        itemImage: "/MakananDanMinuman/SlaiOlai.jpeg",
                        itemName: "SlaiOlai",
                        itemPrice: 6000,
                        modalPrice: 4000,
                        quantity: 24
                    }
                ]
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
                        quantity: 40
                    },
                    {
                        itemImage: "/PeralatanRumahTangga/Rinso.jpg",
                        itemName: "Rinso",
                        itemPrice: 36000,
                        modalPrice: 34000,
                        quantity: 24
                    },
                    {
                        itemImage: "/PeralatanRumahTangga/SapuLidi.jpg",
                        itemName: "SapuLidi",
                        itemPrice: 18000,
                        modalPrice: 15000,
                        quantity: 40
                    },
                    {
                        itemImage: "/PeralatanRumahTangga/Sunlight.jpeg",
                        itemName: "Sunlight",
                        itemPrice: 24000,
                        modalPrice: 22000,
                        quantity: 40
                    },
                    {
                        itemImage: "/PeralatanRumahTangga/SuperPel.jpg",
                        itemName: "SuperPel",
                        itemPrice: 18000,
                        modalPrice: 16000,
                        quantity: 40
                    }
                ]
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
                        quantity: 40
                    },
                    {
                        itemImage: "/KesehatanDanKecantikan/Garnier.jpg",
                        itemName: "Garnier",
                        itemPrice: 25000,
                        modalPrice: 23500,
                        quantity: 24
                    },
                    {
                        itemImage: "/KesehatanDanKecantikan/Kahf.jpg",
                        itemName: "Kahf",
                        itemPrice: 24000,
                        modalPrice: 23000,
                        quantity: 40
                    },
                    {
                        itemImage: "/KesehatanDanKecantikan/Kelly.jpg",
                        itemName: "Kelly",
                        itemPrice: 25000,
                        modalPrice: 23500,
                        quantity: 40
                    },
                    {
                        itemImage: "/KesehatanDanKecantikan/Zinc.jpg",
                        itemName: "Zinc",
                        itemPrice: 18000,
                        modalPrice: 16000,
                        quantity: 40
                    }
                ]
            }
        ],
        order: [
            {
                item: [
                    {
                        itemName: "Indomie",
                        jumlahItem: 7
                    },
                    {
                        itemName: "MamaLemon",
                        jumlahItem: 3
                    }
                ]
            }
        ]
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
                        quantity: 40
                    },
                    {
                        itemImage: "/MakananDanMinuman/PocariSweat.jpeg",
                        itemName: "PocariSweat",
                        itemPrice: 5000,
                        modalPrice: 3500,
                        quantity: 24
                    },
                    {
                        itemImage: "/MakananDanMinuman/PopMie.jpg",
                        itemName: "PopMie",
                        itemPrice: 6000,
                        modalPrice: 4000,
                        quantity: 24
                    },
                    {
                        itemImage: "/MakananDanMinuman/SilverQueen.jpg",
                        itemName: "SilverQueen",
                        itemPrice: 16000,
                        modalPrice: 13500,
                        quantity: 24
                    },
                    {
                        itemImage: "/MakananDanMinuman/SlaiOlai.jpeg",
                        itemName: "SlaiOlai",
                        itemPrice: 6000,
                        modalPrice: 4000,
                        quantity: 24
                    }
                ]
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
                        quantity: 40
                    },
                    {
                        itemImage: "/PeralatanRumahTangga/Rinso.jpg",
                        itemName: "Rinso",
                        itemPrice: 36000,
                        modalPrice: 34000,
                        quantity: 24
                    },
                    {
                        itemImage: "/PeralatanRumahTangga/SapuLidi.jpg",
                        itemName: "SapuLidi",
                        itemPrice: 18000,
                        modalPrice: 15000,
                        quantity: 40
                    },
                    {
                        itemImage: "/PeralatanRumahTangga/Sunlight.jpeg",
                        itemName: "Sunlight",
                        itemPrice: 24000,
                        modalPrice: 22000,
                        quantity: 40
                    },
                    {
                        itemImage: "/PeralatanRumahTangga/SuperPel.jpg",
                        itemName: "SuperPel",
                        itemPrice: 18000,
                        modalPrice: 16000,
                        quantity: 40
                    }
                ]
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
                        quantity: 40
                    },
                    {
                        itemImage: "/KesehatanDanKecantikan/Garnier.jpg",
                        itemName: "Garnier",
                        itemPrice: 25000,
                        modalPrice: 23500,
                        quantity: 24
                    },
                    {
                        itemImage: "/KesehatanDanKecantikan/Kahf.jpg",
                        itemName: "Kahf",
                        itemPrice: 24000,
                        modalPrice: 23000,
                        quantity: 40
                    },
                    {
                        itemImage: "/KesehatanDanKecantikan/Kelly.jpg",
                        itemName: "Kelly",
                        itemPrice: 25000,
                        modalPrice: 23500,
                        quantity: 40
                    },
                    {
                        itemImage: "/KesehatanDanKecantikan/Zinc.jpg",
                        itemName: "Zinc",
                        itemPrice: 18000,
                        modalPrice: 16000,
                        quantity: 40
                    }
                ]
            }
        ],
        order: {
            orderID: 0,
            orderCategory: 1
        }
    },
    {
        userProfilePicture: "default.png",
        nama: "Keanu Reeve",
        email: "keanureeve@gmail.com",
        password: "12345"
    }
];

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
            if (!inventoryArray.some((existingUser) => existingUser.email === user.email)) {
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

/** Fungsi cek repeat password dan email duplikat */
// function noRepeatPassword(userInfo) {
//   return userInfo["password"] === userInfo["repeatPassword"];
// }

// DONE COPAS to auth by Kelvin
function noEmailDuplicate(userInfo) {
    let hackTinventory = getHackTinventory();
    for (let i = 0; i < hackTinventory.length; i++) {
        if (hackTinventory[i]["email"] === userInfo["email"]) {
            return false;
        }
    }
    return true;
}

/** Function Register */ //sudah dicopas ke auth.js by Kelvin
function register() {
    let userInfo = {
        userProfilePicture: "default.png",
        nama: document.getElementById("nama").value,
        email: document.getElementById("email").value,
        password: document.getElementById("newPassword").value,
        category: [],
        order: {}
    };
    let repeatPassword = document.getElementById("repeatNewPassword").value;
    // ngecek email duplikat dan password repeat
    if (repeatPassword === userInfo["password"] && noEmailDuplicate(userInfo)) {
        let hackTinventory = getHackTinventory();
        hackTinventory.push(userInfo);
        localStorage.setItem("hackTinventory", JSON.stringify(hackTinventory));
        console.log("Registration successful");
    } else if (repeatPassword !== userInfo["password"]) {
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

function loadNavbar() {
    const navbar = `
        <nav class="navbar navbar-expand-md bg-light sticky-top p-0 m-0">
        <div class="container-fluid navigasi">
          <a class="navbar-brand" href="../view/profile.html"><img src="../img/userPhoto/HACKTIVENTORY.png" alt="" style="width: 230px; margin-left: 7px;"></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="d-flex flex-row-reverse mx-4">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">    
            <!-- link home -->
            <li class="nav-item mx-2 button1 rounded-pill btn ">
                <a class="nav-link active" aria-current="page" href="../view/home.html">Home</a>
            </li>
            
            <!-- link About -->
            <li class="nav-item mx-2 button1 rounded-pill btn">
                <a  class="nav-link active " href="./about.html">About</a>
            </li>
            
            <!-- link Our Story -->
            <li class="nav-item mx-2 button1 rounded-pill btn">
                <a  class="nav-link active " href="./ourstory.html">Our Story</a>
            </li>
        </ul>
        <!-- drop down profile -->

        <div class="dropdown">
            <button class="btn button dropdown-toggle rounded-pill" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="loginButton">
                <img src="../img/userPhoto/default.png" class="img" alt="..." style="width: 20px; height: 20px;">
                Hacktiv8
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item my-1" href="./profile.html">Profile</a></li>
                <li><a class="dropdown-item my-1" type="button" onclick="logout()">Log out</a></li>
            </ul>
        </div>
        </div>
        </div>
        </div>
    </nav>`;
    document.getElementById("navbar").innerHTML = navbar;

    // mengatur tombol loginButton dengan nama user yang ada di storage
    const loginButton = document.getElementById("loginButton");
    const welcome = document.getElementById("welcome");
    let user = JSON.parse(sessionStorage.getItem("user"));
    loginButton.innerHTML = user.nama;
    if (welcome) welcome.innerHTML = `Welcome, ` + user.nama + "!";
}

function loadFooter() {
    const footer = `
      <div class="footer p-1" style="width: auto; text-align: center; position:relative; top: 0;">
        Ultramarine Fox @2024
    </div>`;
    document.getElementById("footer").innerHTML = footer;
}

// untuk mengatur minheight dari container
function adjustContentHeight() {
    const headerHeight = document.querySelector("#navbar").offsetHeight;
    const footerHeight = document.querySelector("#footer").offsetHeight;
    const viewportHeight = window.innerHeight;

    const contentHeight = viewportHeight - headerHeight - footerHeight;
    document.querySelector(".container").style.minHeight = contentHeight + "px";
}

window.addEventListener("resize", adjustContentHeight);
window.addEventListener("load", adjustContentHeight);

function logout() {
    let result = [];
    // 1. satukan session storage
    // let user = groupingUser();

    // menghapus session storage
    sessionStorage.clear();

    window.location.href = "http://127.0.0.1:5500/hackaton%20phase%200/index.html";
}

function groupingUser() {
    let result = {};
    const user = JSON.parse(sessionStorage.getItem("user"));
    // console.log(user.email);

    // 2. delete object yang ada di localstorage yang sama dengan user email
    let deletedUserLocalStorage = deleteUserLocalStorage(user.email);
    // sekarang localstorage sudah hygienis dari user yang sedang login
    console.log(deletedUserLocalStorage);

    // localStorage.setItem("hackTinventory", JSON.stringify(deletedUserLocalStorage));

    const category = JSON.parse(sessionStorage.getItem("category"));
    const item = JSON.parse(sessionStorage.getItem("item"));
    const order = JSON.parse(sessionStorage.getItem("order"));

    return result;
}

// mengambil data user yang sudah bersih dari kepunyaan john doe
function deleteUserLocalStorage(userEmail) {
    // console.log(userEmail);
    let user = JSON.parse(localStorage.getItem("hackTinventory"));
    let result = [];
    for (let i = 0; i < user.length; i++) {
        let perUser = user[i];
        // ambil email yang ada di local storage
        let email = perUser.email;
        if (email !== userEmail) {
            result.push(perUser);
        }
    }
    localStorage.clear();
    return result;
}
