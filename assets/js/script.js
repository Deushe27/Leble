import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBeEQrMe9WTQGJc0zKecdyRpqqI0_UP_uY",
    authDomain: "leble-7f668.firebaseapp.com",
    databaseURL: "https://leble-7f668-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "leble-7f668",
    storageBucket: "leble-7f668.appspot.com",
    messagingSenderId: "817773805380",
    appId: "1:817773805380:web:64e9b66687a2421ac2a111",
    measurementId: "G-FJLZLZNQQW"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Get a reference to the Firebase Storage service
const storage = getStorage(app);

// Path to your video file in Firebase Storage
const videoPath = 'video/video.mp4'; // Update with your actual path

// Get the download URL for the video
const videoRef = ref(storage, videoPath);

getDownloadURL(videoRef)
  .then((url) => {
    console.log('Download URL:', url); // Log the URL to the console
    document.getElementById('videoPlayer').src = url;
  })
  .catch((error) => {
    console.error('Error getting download URL:', error);
  });
