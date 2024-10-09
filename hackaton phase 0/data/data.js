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
    userID: 1,
    userProfilePicture: "default.png",
    nama: "Keanu Reeve",
    email: "keanureeve@gmail.com",
    password: "12345",
<<<<<<< HEAD
  }
];



=======
  },
];
>>>>>>> a9344c84a97e9a155a949146c55e1d9975c30f45
