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