var phoneBook = {
  "Abe": "111-111-1111",
  "Bob": "222-222-2222",
  "Cam": "333-333-3333",
  "Dan": "444-444-4444",
  "Ern": "555-555-5555",
  "Fry": "111-111-1111",
  "Gil": "222-222-2222",
  "Hal": "333-333-3333",
  "Ike": "444-444-4444",
  "Jim": "555-555-5555",
  "Kip": "111-111-1111",
  "Liv": "222-222-2222",
  "Mia": "333-333-3333",
  "Nik": "444-444-4444",
  "Oli": "555-555-5555",
  "Pam": "111-111-1111",
  "Qiq": "222-222-2222",
  "Rob": "333-333-3333",
  "Stu": "444-444-4444",
  "Tad": "555-555-5555",
  "Uwe": "111-111-1111",
  "Val": "222-222-2222",
  "Wil": "333-333-3333",
  "Xiu": "444-444-4444",
  "Yam": "555-555-5555",
  "Zed": "111-111-1111"
};

// console.log(phoneBook.hasOwnProperty('Gil'))

for (var sameNum in phoneBook)
    if (phoneBook[sameNum] === "333-333-3333")

 console.log(sameNum)


 // var multi = {
 //   name: 'Product List',
 //   items: [
 //    {
 //      name: 'Nexus',
 //      price: 800
 //    },
 //    {
 //      name: 'iPhone',
 //      price: 1000
 //    }
 //   ]
 // }
  // console.log(multi.items)

// var totalPrice = 0

 // for(var init = 0; init < multi.items.length; init++) {
 //   var eachObj = multi.items[init]
 //  //  console.log(multi.items[init])
 //
 //   totalPrice += eachObj.price
 // }

// console.log(totalPrice)
