
const admin = require('firebase-admin')
const functions = require('firebase-functions')
const firebase = require('firebase')
//TODO: make the auth related
var serviceAccount = require("../clientCert/noriSleepsInFireKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://norisleeps.firebaseio.com",
})

const firestore = admin.firestore();
const ref = firestore.collection('food')

/*
//test get methods
let docRef = ref.doc('apple')
let getApple = docRef.get().then(doc => {
    if (!doc.exists) console.log('can not find it?')
    else console.log("--🍎 🍏-->", doc.data())
}).catch(console.error)
*/

const appleRequestTest = (name, callback) => {
    let docRef = ref.doc('apple')
    docRef.get().then(doc => {
        if (!doc.exists) console.log('can not find it?')
        else {
            console.log("--🍏-->")//, doc.data())
            callback(doc.data())
        } 
    }).catch(console.error)
}

module.exports = {appleRequestTest}

//console.log(' hello ref ===', ref)
// const apple =  ref.where('name', '==', 'apple').get()
// .then(snap => {
//     console.log(snap)
// })
// console.log('====>>>', apple)


//adding stuff to test
/*
const onion = 'onion'
const onionData = {
    name: ' onion',
    status: {
        yes: false,
        but: 'just no, never, bad, bad, bad!'
    },
    type: 'veggie',
    url: 'https://www.cesarsway.com/dog-care/nutrition/dog-approved-people-food'
}

const apple = 'apple'
const appleData = {
    name: ' apple',
    status: {
        yes: true,
        but: 'carefule with core && seeds'
    },
    type: 'fruit',
    url: 'https://www.cesarsway.com/dog-care/nutrition/dog-approved-people-food'
}

const greenbean = 'greenbean'
const greenbeanData = {
    name: ' greenbean',
    status: {
        yes: true,
        but: 'no salt or spieces tho!'
    },
    type: 'veggie',
    url: 'https://www.cesarsway.com/dog-care/nutrition/dog-approved-people-food'
}

/*
ref.doc(apple).set(appleData)
ref.doc(greenbean).set(greenbeanData)
ref.doc(onion).set(onionData)
*/

//TODO: figure out emojis queries sometime