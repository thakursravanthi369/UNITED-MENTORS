let userToken = null;
        let isAdmin = false;

        function showRegister() {
            document.getElementById('loginForm').style.display = 'none';
            document.getElementById('registerForm').style.display = 'block';
        }

        function showLogin() {
            document.getElementById('registerForm').style.display = 'none';
            document.getElementById('loginForm').style.display = 'block';
        }

        function showBooking() {
            document.getElementById('loginForm').style.display = 'none';
            document.getElementById('registerForm').style.display = 'none';
            document.getElementById('bookingForm').style.display = 'block';
        }

        function register() {
            const email = document.getElementById('registerEmail').value;
            const password = document.getElementById('registerPassword').value;

            // Simulated registration (replace with Firebase or backend call)
            console.log("Registering:", email, password);
            alert("Registration successful! Please login.");
            showLogin();
        }

        function login() {
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            // Simulated login (replace with Firebase or backend call)
            console.log("Logging in:", email, password);
            userToken = "dummyToken"; // Replace with actual token
            if(email === "admin@test.com"){
                isAdmin = true;
            }
            showBooking();
        }

        function bookCylinder() {
            // Simulated booking (replace with Firebase or backend call)
            console.log("Booking cylinder");
            alert("Cylinder booked!");
        }

        function logout() {
            userToken = null;
            isAdmin = false;
            document.getElementById('bookingForm').style.display = 'none';
            document.getElementById('loginForm').style.display = 'block';
        }

        function showHistory() {
            // Simulated history retrieval (replace with Firebase or backend call)
            const history = ["Booking 1", "Booking 2", "Booking 3"];
            const historyList = document.getElementById('historyList');
            historyList.innerHTML = "";
            history.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                historyList.appendChild(li);
            });
            document.getElementById('bookingHistory').style.display = 'block';
        }

        function hideHistory() {
            document.getElementById('bookingHistory').style.display = 'none';
        }

        function showNotifications() {
            //Simulated notification retrieval.
            const notifications = ["Notification 1", "Notification 2"];
            const notificationList = document.getElementById('notificationList');
            notificationList.innerHTML = "";
            notifications.forEach(item =>{
                const li = document.createElement('li');
                li.textContent = item;
                notificationList.appendChild(li);
            })
            document.getElementById('notifications').style.display = 'block';

        }
        function hideNotifications(){
            document.getElementById('notifications').style.display = 'none';
        }
