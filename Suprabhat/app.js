
// Replace with your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAl9MdT8hcLRTvk3k_wdhXyqGsc-DvFzHA",
  authDomain: "suprabhat-6868.firebaseapp.com",
  databaseURL: "https://suprabhat-6868-default-rtdb.firebaseio.com",
  projectId: "suprabhat-6868",
  storageBucket: "suprabhat-6868.appspot.com",
  messagingSenderId: "367865580260",
  appId: "1:367865580260:web:29064f31e3c545badafaf1",
  measurementId: "G-EB6JH57H81"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

function sendOTP() {
    const phoneNumber = document.getElementById('phoneNumber').value;
    const appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');

    auth.signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
            // SMS sent
            const code = prompt('Enter OTP:');
            return confirmationResult.confirm(code);
        })
        .then((result) => {
            // User signed in successfully
            console.log(result.user);
        })
        .catch((error) => {
            console.error(error.message);
        });
}

function verifyOTP() {
    const code = document.getElementById('otp').value;

    auth.currentUser.confirmationResult.confirm(code)
        .then((result) => {
            // User signed in successfully
            console.log(result.user);
        })
        .catch((error) => {
            console.error(error.message);
        });
}
