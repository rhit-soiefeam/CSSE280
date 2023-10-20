var rhit = rhit || {};
rhit.FB_COLLECTION_MOVIEQUOTE = "MovieQuotes";
rhit.FB_KEY_QUOTE = "quote";
rhit.FB_KEY_MOVIE = "movie";
rhit.FB_KEY_LAST_TOUCHED = "lastTouched";
rhit.fbMovieQuotesManager = null;
rhit.fbSingleQuoteManager = null;
const db = firebase.firestore();

rhit.FbSingleQuoteManager = class {
    constructor(movieQuoteId) {
    this._documentSnapshot = {};
    this._unsubscribe = null;
    this._ref = firebase.firestore().collection(rhit.FB_COLLECTION_MOVIEQUOTE).doc(movieQuoteId);
    }
    beginListening(changeListener) {
    this._unsubscribe = this._ref.onSnapshot((doc) => {
    if (doc.exists) {
    console.log("Document data:", doc.data());
    this._documentSnapshot = doc;
    changeListener();
    } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
    //window.location.href = "/";
    }
    });
    }
    stopListening() {
    this._unsubscribe();
    }
    update(quote, movie) {
    this._ref.update({
    [rhit.FB_KEY_QUOTE]: quote,
    [rhit.FB_KEY_MOVIE]: movie,
    [rhit.FB_KEY_LAST_TOUCHED]: firebase.firestore.Timestamp.now(),
    })
    .then(() => {
    console.log("Document successfully updated!");
    })
    .catch(function (error) {
    // The document probably doesn't exist.
    console.error("Error updating document: ", error);
    });
    }
    
    
    delete() {
    return this._ref.delete();
    }
    
    
    get quote() {
    return this._documentSnapshot.get(rhit.FB_KEY_QUOTE);
    }
    
    
    get movie() {
    return this._documentSnapshot.get(rhit.FB_KEY_MOVIE);
    }
} 
document.getElementById('fetchData').addEventListener('click', function() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => {
        document.getElementById('dataContainer').innerHTML = `
            <p><strong>Title:</strong>${data.title}</p>
            <p><strong>ID:</strong>${data.id}</p>
            <p><strong>Completed:</strong> ${data.completed}</p>
        `;
    })
    .catch(error => {
        console.error("There was an error fetching data:", error);
    });
});

rhit.main = function () {
	console.log("Ready");
	// Bare bones read...
	const ref = firebase.firestore().collection("MovieQuotes");
	// ref.onSnapshot((querySnapshot) => {
	// 	console.log("MovieQuotes...");
	// 	querySnapshot.forEach((document) => {
	// 		console.log(document.data());
	// 	});
	// });
};
// ref.add({
//     quote: "My first quote",
//     movie: "My first movie",
//     lastTouched: firebase.firestore.Timestamp.now(),
// });

