function loadNavbar() {
  const navbar = `
        <nav class="navbar navbar-expand-md bg-light sticky-top  p-0 m-0">
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
</ul>

<!-- drop down profile -->

<div class="dropdown">
    <button class="btn button dropdown-toggle rounded-pill" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="loginButton">
        <img src="../img/userPhoto/default.png" class="img" alt="..." style="width: 20px; height: 20px;">
        Hacktiv8
    </button>
    <ul class="dropdown-menu">
        <li><a class="dropdown-item my-1" href="./profile.html">Profile</a></li>
        <li><a class="dropdown-item my-1" href="./auth/login.html">Log out</a></li>
    </ul>
</div>
</div>
</div>
</div>
    </nav>`;
  document.getElementById("navbar").innerHTML = navbar;
}

function loadFooter() {
  const footer = `
      <div class="footer p-1" style=" width: auto; text-align: center;">
        Ultramarine Fox @2024
    </div>`;
  document.getElementById("footer").innerHTML = footer;
}
