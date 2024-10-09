// authorization

// create user
/** Function Register */
function register() {
  let userInfo = {
    userProfilePicture: "default.png",
    nama: document.getElementById("nama").value,
    email: document.getElementById("email").value,
    password: document.getElementById("newPassword").value,
    category: [],
    order: {},
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


// login (read user)
function login() {
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
