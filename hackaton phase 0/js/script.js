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
