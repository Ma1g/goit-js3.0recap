// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Простора квартира в центрі міста",
//   rating: 4.85,
//   price: 5500,
//   tags: ["premium", "panoramic", "center", "trusted"],
//   location: {
//     country: "Україна",
//     city: "Київ",
//     district: "Печерськ",
//     street: "вул. Грушевського"
//   },
//   owner: {
//     name: "Марія Шевченко",
//     phone: "380991234567",
//     email: "maria.rent@example.com"
//   },
//   features: ["ліфт", "консьєрж", "паркінг", "тераса"]
// };

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner["phone"];
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastFeature = apartment.features.at(-1);
// const city = apartment.location.city;

// // console.log(ownerName);
// // console.log(ownerPhone);
// // console.log(numberOfTags);
// // console.log(firstTag);
// // console.log(lastFeature);
// // console.log(city);

// apartment.price = 6500;
// apartment.rating = 4.95;
// apartment.owner.name = "Марія Шевченко (оновлено)";
// apartment.tags.push("top");
// apartment.features[1] = "охоронець";
// apartment.location.district = "Шевченківський";

// console.log(apartment.price, apartment.rating, apartment.owner.name, apartment.tags, apartment.features[1], apartment.location.district)


// function getExtremeScores(scores) {
//   return {
//     best: Math.max(...scores),
//     worst: Math.min(...scores)
//   };
// }

// console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]))


// const library = {
//     books: 5,
//     owner: "adam",

//     addBook(bookName) {
        
//     },

//     removeBook(bookName) {

//     },

//     getInfo() {
//         return `${this.owner} has ${this.books} books in the library.`
//     }
// }


// console.log(library.getInfo()); // "Anna has 3 books in the library."

// library.addBook("Dune");
// console.log(library.getInfo()); // "Anna has 4 books in the library."

// library.removeBook("Harry Potter");
// library.removeBook("Unknown book"); // нічого не змінює
// console.log(library.getInfo()); // "Anna has 3 books in the library."


// function foo(...args) {
//     console.log(args);
// }

// console.log(foo([1, 2, 3, 4]))

// const store = [
//     { title: 'SpiderMan', price: 150, color: 'Red' },
//     { title: 'Batman', price: 110, color: 'Black' },
//     { title: 'Car', price: 750, color: 'Blue' },
//     { title: 'Barbie', price: 750, color: 'blue' },
//     { title: 'Scafander', price: 1500, color: 'Orange' },
// ];

// for (const item of store) {
//     console.log(item.title, item.price)
// }

// const store = [
//     { title: 'SpiderMan', price: 150, rating: 10},
//     { title: 'Batman', price: 110, rating: 10},
//     { title: 'Car', price: 750, rating: 10},
//     { title: 'Barbie', price: 750, rating: 10},
//     { title: 'Scafander', price: 1500, rating: 10},
// ];

// const result = [];
// for (const item of store) {
//     result.push(item.price)
// }
// console.log(result)

// const users = [
//     { fullname: 'Diego', phoneNumber: 345345345, city: 'Kyiv' },
//     { fullname: 'Katia', phoneNumber: 345345345, city: 'Lviv' },
//     { fullname: 'Ania', phoneNumber: 345345345, city: 'Dnipro' },
//     { fullname: 'Doiche', phoneNumber: 345345345, city: 'Kyiv' },
//     { fullname: 'Adam', phoneNumber: 345345345, city: 'Lviv' },
//     { fullname: 'Eleonora', phoneNumber: 345345345, city: 'Dnipro' }
// ];

// const information = [];

// for (const user of users) {
//     if (user.city === 'Dnipro') {
//         information.push(user)
//     }
// }
// console.log(information)


// const users = [
//     { fullname: 'Diego', phoneNumber: '', city: 'Kyiv' },
//     { fullname: 'Katia', phoneNumber: '', city: 'Lviv' },
//     { fullname: 'Ania', phoneNumber: '', city: 'Dnipro' },
//     { fullname: 'Doiche', phoneNumber: '', city: 'Kyiv' },
//     { fullname: 'Adam', phoneNumber: '', city: 'Lviv' },
//     { fullname: 'Eleonora', phoneNumber: '', city: 'Dnipro' }
// ];

// let information;

// for (const user of users) {
//     if (user.city === 'Dnipro') {
//         information = user;
//         break;
//     }
// }

// console.log(information)


// const friends = [
//     { name: "Mango", online: false },
//     { name: "Kiwi", online: true },
//     { name: "Poly", online: false },
//     { name: "Ajax", online: false }
// ];

// console.table(friends)

// function findFriendByName(allFriends, friendName) {
    
//     for (const friend of allFriends) {
//         if (friend.name === friendName) {
//             return friend;
//         }
//     }
// }

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Adam'))

// function getAllNames(allFriends) {

//     const res = [];

//     for (const item of allFriends) {
//         res.push(item.name);
//     }
//     return res;
// }


// console.log(getAllNames(friends));

// function getOnlineFriends(allFriends) {
//     const res = [];

//     for (const item of allFriends) {
//         if (item.online) {
//             res.push(item.name)
//         }
//     }
//     return res;
// }

// console.log(getOnlineFriends(friends))


// const stones = [
//     { name: "Smaragd", price: 1300, quantity: 4 },
//     { name: "Diamante", price: 2700, quantity: 3 },
//     { name: "Saphir", price: 400, quantity: 7 },
//     { name: "Shebin", price: 200, quantity: 2 },
// ];

// function calcTotalPrice(stones, stoneName) {
//     for (const item of stones) {
//         if (item.name === stoneName) {
//             return item.price * item.quantity;
//         }
//     }
// }

// console.log(calcTotalPrice(stones, "Shebin"))

let sleeping = false;

const dog = {
    name: 'Lord',
    breed: 'Spaniel',
    age: 3,


    sayWoof() {
        console.log("Woof Woof");
    },

    eat() {
        if(sleeping === false) {
            console.log("Nham nham");
        } else {
            console.log("I am sleeping!!!")
        }
    },

    sleep() {
        console.log("I   am  sleeping")
        sleeping = true;
    },
}


const cat = {
    name: 'Murzik',
    breed: 'basic',
    age: 3,


    sayMeow() {
        console.log("Miaw miaw");
    },

    scratch() {
        console.log("|| ||| ||")
    },

    eat() {
        if(sleeping === false) {
            console.log("Nham nham");
        } else {
            console.log("I am sleeping!!!")
        }
    },

    sleep() {
        console.log("I   am  sleeping")
        sleeping = true;
    },
}


const student = {
    firstName: 'Vasia',
    lastName: 'Dibrov',
    age: 20,
    group: "PZRK-101-12",

    showInfo() {
        console.log(this.firstName)
    },

}


const playlist = {
    name: "My amaizing Playlist",
    rating: 5,
    tracks: ["track-1", "track-2", "track-3"],
    author: "Joch Andrey",
    genres: 'Pop',

    changeName(newName) {
        this.name = newName;
    },
    addTrack(track) {
        this.tracks.push(track);
    },
    updateRating(newRating) {   
        this.rating = newRating;
    },
    getTrackCount() {
        return this.tracks.length;
    },
}

// playlist.changeName("John is going onnnn");
// console.log(playlist.getTrackCount())
// playlist.addTrack("track-4");
// playlist.updateRating(6);
// console.log(playlist.getTrackCount())

// console.log(playlist)


// const defaultSetting = {
//     theme: "light",
//     showNotifications: true,
//     hideSidebar: false,
// };

// const userSetting = {
//     showNotifications: false,
//     hideSidebar: true,
// };

// const finalSettings = {
//     ...defaultSetting,
//     ...userSetting
// }

// console.log(finalSettings)

function foo(...arr) {
    console.log(arr)
}

foo(10, 20, 30)
foo("Hello", "World", 30)