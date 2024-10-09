let hactiventory = [
    // object yang pertama
    {
      userID: 0,
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
      order: {
        orderID: 0,
        orderCategory: 1
      }
    },
    // object yang kedua
    {
      userID: 1,
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
      userID: 1,
      userProfilePicture: "default.png",
      nama: "Keanu Reeve",
      email: "keanureeve@gmail.com",
      password: "12345",
    }
  ];
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

////  Konversi array objek ke string dan simpan ke sessionStorage
sessionStorage.setItem('hactiventory', JSON.stringify(hactiventory));

// . Ambil kembali data dari sessionStorage
const storedhactiventory = sessionStorage.getItem('hactiventory')

// . Konversi string kembali menjadi array objek
const parsedhactiventory = JSON.parse(storedhactiventory);

console.log([parsedhactiventory]);

//authorization
function Login(){
  // console.log(`hehe`);
  
    for(let i= 0 ; i < hactiventory.length ; i++){
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        // console.log(email , hactiventory[i]["email"])
        if(email == hactiventory[i]["email"] && password == hactiventory[i]["password"]){
            // console.log(hactiventory[i]);
            window.location.href = "../home.html";
            break
        }else if(email !== hactiventory[i]["email"] && password !== hactiventory[i]["password"]){
            console.log(`login yang anda masukan salah`)
            break
        }
    }
}


// delete aray

const array = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Doe' },
  { id: 3, name: 'Jane' }
];


//nama yang ingin dihapus 
const nameToDelete = `John`;


for(let i = 0 ; i < array.length ; i++){
  if(array[i].name === nameToDelete){
    for(let j = i ; j < array.length -1 ; j++){
      array[j] = array[j+1]
    }
    //hapus elemen terakhir(karena sudah digeser kedepan)
    array.length--;
    break ; //keluar dari loop setelah objek ditemukan
  }
}

console.log(array);


