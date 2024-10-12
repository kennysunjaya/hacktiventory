// authorization

// done initializeLocalStorage memerlukan data.js, panggil data.js di register dan index.html
// selesai mengambil ke dan dari local storage
initializeLocalStorage();
// function untuk menyimpan hackTiventory ke local storage
function initializeLocalStorage() {
    // mengambil hacktiventory dan memasukkannya ke variabel existing inventory
    let existingInventory = localStorage.getItem("hacktiventory");
    // kalau di localstorage tidak ada object hacktiventory
    if (!existingInventory) {
        // kalau tidak ada object, maka setItemnya di dalam local storage
        localStorage.setItem("hacktiventory", JSON.stringify(hacktiventory));
    } else {
        // kalau ada objectnya di local storage
        let inventoryArray = JSON.parse(existingInventory);
        // looping hactiventory yang awal
        for (let user of hacktiventory) {
            if (!inventoryArray.some((existingUser) => existingUser.email === user.email)) {
                inventoryArray.push(user);
            }
        }
        localStorage.setItem("hacktiventory", JSON.stringify(inventoryArray));
    }
}

// done lakukan pemanggilan login pada auth() untuk melihat apakah loginButton ditekan
// login akan berjalan jika submit pada loginform ditekan
// done function login akan dijalankan jika memang ada index.html pada link address
if (window.location.href.indexOf("index.html") > -1) {
    // done setfocus ketika masuk ke dalam login
    document.getElementById("email").focus();
    login();
}

// done function register akan dijalankan jika memang ada register.html pada link address
if (window.location.href.indexOf("register.html") > -1) {
    // cek apakah sudah ada session data ketika di dalam register, jika ada maka arahkan ke halaman about
    // done setfocus ketika masuk ke dalam register
    document.getElementById("fullname").focus();
    register();
}

// todo cek apakah pada halaman tersebut sudah cek in
function isCheckIn() {
    console.log(sessionStorage.getItem("user"));
}

/** Function Register */
function register() {
    // done jika register dipanggil maka register terlebih dahulu
    registerValidate();

    let userInfo = {
        userProfilePicture: "default.png",
        nama: document.getElementById("fullname").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        category: [],
        order: {}
    };
    repeatPassword = document.getElementById("repeatPassword").value;

    // done by Kenny jika repeatPassword sama dengan password
    if (repeatPassword !== userInfo["password"]) {
        // todo tampilkan pesan untuk password do not match
        console.log("Passwords do not match!");
        return;
    }

    // done by Kenny, periksa apakah email diduplicate
    if (noEmailDuplicate(userInfo)) {
        let hacktiventory = getHackTinventory();
        hacktiventory.push(userInfo);
        localStorage.setItem("hacktiventory", JSON.stringify(hacktiventory));
        console.log("Registration successful");
        window.location.href = "http://127.0.0.1:5500/hackaton%20phase%200/index.html";
    } else {
        // fixme gunakan notifikasi pada register
        // todo jika email sudah digunakan, tampilkan pesan dengan menggunakan session storage yang bernama message
        // pesan yang digunakan adalah "Your Account is registered! Please login!"
        console.log("Email is already in use!");
    }
}

function registerValidate() {
    // todo validation data yang masuk
    let nama = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let repeatPassword = document.getElementById("repeatPassword").value;
}

// done by Kenny, pemeriksaan apakah email duplicate
function noEmailDuplicate(userInfo) {
    let hacktiventory = getHackTinventory();
    for (let i = 0; i < hacktiventory.length; i++) {
        if (hacktiventory[i]["email"] === userInfo["email"]) {
            return false;
        }
    }
    return true;
}

// done by Kenny function untuk mengambil hacktiventory dari local storage
function getHackTinventory() {
    return JSON.parse(localStorage.getItem("hacktiventory"));
}

/* ====================================================================================================== */

// login (read user)
function login() {
    document.getElementById("loginForm").addEventListener("submit", (event) => {
        event.preventDefault();

        // mengambil userLogin dan memasukkan dalam object
        const userLogin = {
            email: document.getElementById("email").value,
            password: document.getElementById("password").value
        };

        // Ambil data dari local storage
        let hacktiventory = getHackTinventory();

        // Loop melalui setiap user di local storage
        let sessionUserData = getUserData(userLogin, hacktiventory);

        // Menyimpan userData ke session storage
        if (sessionUserData) {
            console.log(sessionUserData);
            // memasukkan sessionStorage jika sessionStorage ditemukan
            setSessionStorage(sessionUserData);

            // Redirect ke halaman home setelah login sukses
            window.location.href = "view/about.html";
        } else {
            // done jika tidak ada sessionUserData, munculkan notifikasi error pada login
            // untuk pertamanya tampilkan console.log("Login failed. Please check your username and password and try again.")
            // done cari tampilkan pesan dalam bahasa inggris
            // done jika gagal kosongkan kembali input email dan password
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";

            // done setfocus lagi ke login setelah mengosongkan email dan password
            document.getElementById("email").focus();

            // done mengambil alertbox di index.html
            const alertBox = document.getElementById("loginValidation");
            showAlertwithAnimation(alertBox);
        }
    });

    // Jika tidak ada kecocokan
    // console.log("Email atau password salah");
}

function showAlertwithAnimation(alertBox) {
    // alertMasuk(alertBox);
    // alertKeluar(alertBox);
    // done alert masuk
    alertBox.classList.remove("d-none"); // Show the alert by removing d-none
    alertBox.classList.add("show"); // Bootstrap class to display the alert

    // done alert keluar
    setTimeout(function () {
        alertBox.classList.remove("show"); // Bootstrap class to display the alert
    }, 3000); // alert akan memulai fade show dalam waktu 3000 milidetik

    setTimeout(function () {
        alertBox.classList.add("d-none");
    }, 3500); //alert akan menghilang setelah
}

// done membuat getUserdata untuk memisahkan dari login function
function getUserData(userLogin, hacktiventory) {
    for (let i = 0; i < hacktiventory.length; i++) {
        // done jika ditemukan email dan login yang cocok lakukan ambil data
        if (userLogin.email == hacktiventory[i]["email"] && userLogin.password == hacktiventory[i]["password"]) {
            console.log("Login successful");

            // mengambil item
            let item = [];
            for (let j = 0; j < hacktiventory[i].category.length; j++) {
                let temp = {};
                let category = hacktiventory[i].category;
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
            userData = {
                user: {
                    nama: hacktiventory[i].nama,
                    email: hacktiventory[i].email
                },
                category: hacktiventory[i].category,
                order: hacktiventory[i].order,
                item: item
            };

            return userData; // Menghentikan fungsi jika login berhasil
        } else {
            // done jika tidak ditemukan email yang sama maka return userdata = undefined
            return (userData = undefined);
        }
    }
}

function setSessionStorage(sessionUserData) {
    sessionStorage.setItem("user", JSON.stringify(sessionUserData.user));
    sessionStorage.setItem("category", JSON.stringify(sessionUserData.category));
    sessionStorage.setItem("order", JSON.stringify(sessionUserData.order));
    sessionStorage.setItem("item", JSON.stringify(sessionUserData.item));
}

// done nanti pindahkan ke auth.js
function logout() {
    let result = [];
    // todo satukan session storage
    // let user = groupingUser();

    // done menghapus session storage
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

// todo mengambil data user yang sudah bersih dari kepunyaan john doe
function deleteUserLocalStorage(userEmail) {
    // console.log(userEmail);
    let user = JSON.parse(localStorage.getItem("hacktinventory"));
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
