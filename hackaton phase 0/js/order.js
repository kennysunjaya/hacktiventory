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
  ]
  
  // create Order
//   let hackTinventory = getHackTinventory();
  function addOrder(item , itemName , jumlahItem) {
    for(let i = 0 ; i < hactiventory.length; i++){
      let perArr = hactiventory[i]
      for(let j= 0 ; j < perArr.order.length ; j ++){
        let dalam = perArr.order[j]
        for(let k = 0 ; k < dalam.item.length ; k++){
          let OrderItem = dalam.item[k]
          for(let l = 0 ; l < perArr.category.length; l++){
            let category = perArr.category[l]
            for(let m = 0 ; m < category.item.length ; m++){
              let inventoryItem = category.item[m]
              if(inventoryItem.itemName === OrderItem.itemName){
                inventoryItem.quantity -= OrderItem.jumlahItem
                // console.log(inventoryItem.quantity);
                
              }
            }
          }
        }
      }
    }
    return hactiventory
  }
  console.log(addOrder(hactiventory));
  
  
  // read Order
  
  function getOrder(data, input) {
  let jumlah = 0;
  
  for(let i = 0 ; i < data.length ; i++){
    let perdata = data[i]
    for(let j = 0 ; j < perdata.category.length; j++){
      let category = perdata.category[j]
      for(let k = 0 ; k < category.item.length; k ++){
        let invertoryItem = category.item[k]
        // console.log(invertoryItem);
        if(invertoryItem.itemName === input){
          jumlah += invertoryItem.quantity
        }
      }
    }
  }
  return `${input} berjumlah: ${jumlah}`
  }
  
  // console.log(getOrder(hactiventory, "SilverQueen"));
  
  
  
  // updateOrder
  function updateOrder(data , barang  , jumlah) {
      for(let i = 0 ; i < data.length ; i++){
          let perdata = data[i]
          for(let j = 0 ; j < perdata.category.length; j++){
            let category = perdata.category[j]
            for(let k = 0 ; k < category.item.length; k ++){
              let invertoryItem = category.item[k]
              if(invertoryItem.itemName === barang){
                  invertoryItem.quantity += jumlah
                  
              }
            }
          }
        }
  
  
  }
  
  console.log(updateOrder(hactiventory , "Indomie" , 5 ));
  // console.log(hactiventory);
  
  
  // delete Order
  function deleteOrder(data , nama ) {    
      //nama yang ingin dihapus dalam bentuk barang , bisa diganti dalam bentuk lain nya
      const nameToDelete = nama;
      for(let i = 0 ; i < data.length ; i++){
          let perdata = data[i]
          for(let j = 0 ; j < perdata.category.length; j++){
            let category = perdata.category[j]
            for(let k = 0 ; k < category.item.length; k ++){
              let invertoryItem = category.item[k]
              if(invertoryItem.itemName === nameToDelete){
                  category.item.splice(k, 1);
                      // console.log(`${nameToDelete} telah dihapus.`);
                      return; // Keluar setelah item ditemukan dan dihapus
              }
            }
          }
        }
  }
  // console.log(deleteOrder(hactiventory , "Indomie"));
  
  // console.log(hactiventory[0].category[0].item);