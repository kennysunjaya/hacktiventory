// authorization
// create user

// done lakukan pemanggilan login pada auth() untuk melihat apakah loginButton ditekan
login();

/** Function Register */
function register() {
    let userInfo = {
        userProfilePicture: "default.png",
        nama: document.getElementById("fullname").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        category: [],
        order: {}
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
        window.location.href = "http://127.0.0.1:5500/hackaton%20phase%200/index.html";
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
            if (!inventoryArray.some((existingUser) => existingUser.email === user.email)) {
                inventoryArray.push(user);
            }
        }
        localStorage.setItem("hackTinventory", JSON.stringify(inventoryArray));
    }
}

// function untuk mengambil hactIventory dari local storage
function getHackTinventory() {
    return JSON.parse(localStorage.getItem("hackTinventory"));
}

initializeLocalStorage();
// selesai mengambil ke dan dari local storage

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
        console.log(sessionUserData);

        // Menyimpan userData ke session storage
        if (sessionUserData) {
            console.log(sessionUserData);
            // memasukkan sessionStorage jika sessionStorage ditemukan
            setSessionStorage(sessionUserData);

            // Redirect ke halaman home setelah login sukses
            window.location.href = "view/about.html";
        } else {
            // todo jika tidak ada sessionUserData, munculkan notifikasi error pada login
            // untuk pertamanya tampilkan console.log("Login failed. Please check your username and password and try again.")
            // done cari tampilkan pesan dalam bahasa inggris
            // done jika gagal kosongkan kembali input email dan password
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";

            console.log("Login failed. Please check your username and password and try again.");
        }
    });

    // Jika tidak ada kecocokan
    // console.log("Email atau password salah");
}

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

function setSessionStorage() {
    sessionStorage.setItem("user", JSON.stringify(sessionUserData.user));
    sessionStorage.setItem("category", JSON.stringify(sessionUserData.category));
    sessionStorage.setItem("order", JSON.stringify(sessionUserData.order));
    sessionStorage.setItem("item", JSON.stringify(sessionUserData.item));
}
