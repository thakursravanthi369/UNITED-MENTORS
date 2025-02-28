// Firebase Configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  
  // DOM Elements
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const tokenForm = document.getElementById('tokenForm');
  const prescriptionForm = document.getElementById('prescriptionForm');
  const patientList = document.getElementById('patientList');
  const logoutButton = document.getElementById('logoutButton');
  
  // User Login
  loginForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
  
    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        alert('Login successful');
        window.location.href = 'dashboard.html';
      })
      .catch((error) => alert(error.message));
  });
  
  // User Registration
  registerForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const role = e.target.role.value;
  
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        db.collection('users').doc(user.uid).set({
          email,
          role
        });
        alert('Registration successful');
        window.location.href = 'login.html';
      })
      .catch((error) => alert(error.message));
  });
  
  // Logout
  logoutButton?.addEventListener('click', () => {
    auth.signOut()
      .then(() => {
        alert('Logged out successfully');
        window.location.href = 'login.html';
      })
      .catch((error) => alert(error.message));
  });
  
  // Token Generation
  tokenForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const patientName = e.target.patientName.value;
    const contact = e.target.contact.value;
    const token = `TKN-${Date.now()}`;
  
    db.collection('patients').add({
      patientName,
      contact,
      token,
      history: []
    }).then(() => {
      alert('Token generated successfully');
      e.target.reset();
    }).catch((error) => alert(error.message));
  });
  
  // Add Prescription
  prescriptionForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const patientId = e.target.patientId.value;
    const prescription = e.target.prescription.value;
  
    db.collection('patients').doc(patientId).update({
      history: firebase.firestore.FieldValue.arrayUnion(prescription)
    }).then(() => {
      alert('Prescription added successfully');
      e.target.reset();
    }).catch((error) => alert(error.message));
  });
  
  // Fetch Patients
  if (patientList) {
    db.collection('patients').onSnapshot((snapshot) => {
      patientList.innerHTML = '';
      snapshot.forEach((doc) => {
        const data = doc.data();
        patientList.innerHTML += `
          <li>
            <strong>${data.patientName}</strong> - Token: ${data.token}
            <button onclick="viewHistory('${doc.id}')">View History</button>
          </li>`;
      });
    });
  }
  
  // View Patient History
  function viewHistory(patientId) {
    db.collection('patients').doc(patientId).get()
      .then((doc) => {
        if (doc.exists) {
          const data = doc.data();
          alert(`History for ${data.patientName}: ${data.history.join(', ')}`);
        } else {
          alert('No patient found');
        }
      })
      .catch((error) => alert(error.message));
  }
  