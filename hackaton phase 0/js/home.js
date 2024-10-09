// nantinya hactiventory diambil dari session storage
function displayHactiventory() {
    // ambil div id nya dari html
    const itemList = document.getElementById("item-list");

    // membersihkan dulu isi dari tbody table item-list
    // itemList.innerHTML = "";

    let index = 1;

    // loop inventory dari session storage
    // sementara menggunakan array dari hactiventory
    hactiventory.forEach((item) => {
        // membuat element tr pada item
        let trItem = document.createElement("tr");
        // membuat element th pada item untuk nomor
        let thItem = document.createElement("th");
        thItem.setAttribute("scope", "row");
        thItem.innerHTML = index;
        // buat tdItem
        // tambahkan setiap 1 lopping selesai
        index++;
    });
}

displayHactiventory();
