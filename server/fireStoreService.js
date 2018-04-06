const admin = require('firebase-admin')
const functions = require('firebase-functions')
const firebase = require('firebase')
//TODO: make the auth related
var serviceAccount = require("../clientCert/noriSleepsInFireKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://norisleeps.firebaseio.com",
});

const firestore = admin.firestore();
const ref = firestore.doc('samples/data')

/*
ref.set({
      status: 'sleeping🤮ZZ🤲ZZ'
  }).then( (data) => console.log("Satus saved -->", data))
  .catch(error => console.log('Got an error: ', error))
*/

ref.get().then(doc => {
    if (doc && doc.exists){
        const data = doc.data()
        console.log('recieved data =', data)
    }
}).catch(console.log)
