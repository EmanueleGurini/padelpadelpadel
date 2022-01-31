
  // import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
  // import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-analytics.js";
	import app from 'firebase/compat/app';

  const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT__APP__ID,
    measurementId: process.env.REACT__APP__MEASUREMENT__ID
  };


	class Firebase {
		constructor() {
			app.initializeApp(firebaseConfig);
		}
	}
	
	export default Firebase;