document.getElementById('serviceRequests').textContent = Math.floor(Math.random() * 20);
document.getElementById('revenue').textContent = "$" + Math.floor(Math.random() * 5000);
document.getElementById('activeProviders').textContent = Math.floor(Math.random() * 10);
document.getElementById('customerFeedback').textContent = (Math.random() * (5 - 3) + 3).toFixed(1) + "/5";

// Service Management Form
document.getElementById('serviceForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    var category = document.getElementById('categoryInput').value;
    var description = document.getElementById('descriptionInput').value;
    var price = document.getElementById('priceInput').value;
    var options = document.getElementById('optionsInput').value;
    
    // Display added service
    alert("New Service Added:\nCategory: " + category + "\nDescription: " + description + "\nPrice: $" + price + "\nOptions: " + options);
    
    // Clear form inputs
    document.getElementById('categoryInput').value = '';
    document.getElementById('descriptionInput').value = '';
    document.getElementById('priceInput').value = '';
    document.getElementById('optionsInput').value = '';
});

// Service Provider Management Form
document.getElementById('providerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    var name = document.getElementById('nameInput').value;
    var specialization = document.getElementById('specializationInput').value;
    var email = document.getElementById('emailInput').value;
    var phone = document.getElementById('phoneInput').value;
    
    // Append provider to the list
    var providerList = document.getElementById('providerList');
    var newRow = providerList.insertRow();
    newRow.innerHTML = "<td>" + name + "</td><td>" + specialization + "</td><td>" + email + "</td><td>" + phone + "</td>";
    
    // Clear form inputs
    document.getElementById('nameInput').value = '';
    document.getElementById('specializationInput').value = '';
    document.getElementById('emailInput').value = '';
    document.getElementById('phoneInput').value = '';
});

// Booking Management - Dummy data
var bookings = [
    { user: "Ynw Melly", service: "Plumbing", date: "2024-02-12", time: "09:00 AM", status: "Pending" },
    { user: "Michael Smith", service: "Electrical", date: "2024-02-15", time: "10:30 AM", status: "Pending" },
    { user: "Jane Samita", service: "Cleaning", date: "2024-02-18", time: "02:00 PM", status: "Pending" }
];

// Populate booking list
var bookingList = document.getElementById('bookingList');
bookings.forEach(function(booking) {
    var newRow = bookingList.insertRow();
    newRow.innerHTML = "<td>" + booking.user + "</td><td>" + booking.service + "</td><td>" + booking.date + "</td><td>" + booking.time + "</td><td class='status'>" + booking.status + "</td><td><input type='button' value='Approve' onclick='approveBooking(this)'><input type='button' value='Reject' onclick='rejectBooking(this)'></td>";
});

// Approve booking
function approveBooking(button) {
    var row = button.parentNode.parentNode;
    var statusCell = row.cells[4];
    statusCell.textContent = "Approved";
    statusCell.classList.remove("status");
    statusCell.style.color = "#00cc00"; // Green color for approved status
    row.cells[5].innerHTML = ""; // Remove action buttons
}

// Reject booking
function rejectBooking(button) {
    var row = button.parentNode.parentNode;
    var statusCell = row.cells[4];
    statusCell.textContent = "Rejected";
    statusCell.classList.remove("status");
    statusCell.style.color = "#ff3333"; // Red color for rejected status
    row.cells[5].innerHTML = ""; // Remove action buttons
}

// Payment Management
function handlePayment(method) {
    alert("Handling payment via " + method);
}

// Review Management - Dummy data
var reviews = [
    { user: "Ynw Melly", rating: 4, comment: "Great service, very professional!" },
    { user: "Michael Smith", rating: 5, comment: "Excellent experience, highly recommend!" },
    { user: "Jane Samita", rating: 3, comment: "Good service, but a bit slow." }
];

// Populate reviews
var reviewsContainer = document.getElementById('reviews');
reviews.forEach(function(review) {
    var reviewDiv = document.createElement('div');
    reviewDiv.classList.add('review');
    reviewDiv.innerHTML = "<p><strong>" + review.user + " - Rating: " + review.rating + "</strong></p><p>" + review.comment + "</p><div class='response'>Admin Response: Thank you for your feedback!</div><div class='action-buttons'><button onclick='flagReview(this)'>Flag as Inappropriate</button></div>";
    reviewsContainer.appendChild(reviewDiv);
});

// Flag review as inappropriate
function flagReview(button) {
    button.textContent = "Flagged";
    button.disabled = true;
    button.style.backgroundColor = "#ff3333"; // Red color for flagged button
}

// Generate Service Report
function generateServiceReport() {
    alert("Generating Service Report...");
    // Add your report generation logic here
}

// Generate Revenue Report
function generateRevenueReport() {
    alert("Generating Revenue Report...");
    // Add your report generation logic here
}

// Generate Feedback Report
function generateFeedbackReport() {
    alert("Generating Feedback Report...");
    // Add your report generation logic here
}

// Notification System
document.getElementById('notificationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var message = document.getElementById('notificationMessage').value;
    var recipientType = document.getElementById('recipientType').value;

    sendNotification(message, recipientType);

    // Clear input field
    document.getElementById('notificationMessage').value = '';
});

function sendNotification(message, recipientType) {
    var notificationDiv = document.createElement('div');
    notificationDiv.classList.add('notification');
    notificationDiv.textContent = "Notification sent to " + recipientType + ": " + message;
    document.getElementById('notifications').appendChild(notificationDiv);
}

// Content Management Forms
// Update Homepage Form
document.getElementById('homepageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var content = document.getElementById('homepageContent').value;
    // Process the update
    alert("Homepage content updated:\n" + content);
});

// Create Blog Post/Article Form
document.getElementById('blogForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var title = document.getElementById('blogTitle').value;
    var content = document.getElementById('blogContent').value;
    // Process the creation
    alert("Blog Post/Article created:\nTitle: " + title + "\nContent: " + content);
});

// Manage FAQs Form
document.getElementById('faqForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var question = document.getElementById('faqQuestion').value;
    var answer = document.getElementById('faqAnswer').value;
    // Process the addition
    alert("FAQ added:\nQuestion: " + question + "\nAnswer: " + answer);
});

// Configuration Form
document.getElementById('configForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var systemName = document.getElementById('systemName').value;
    var adminEmail = document.getElementById('adminEmail').value;
    var supportEmail = document.getElementById('supportEmail').value;
    // Process configuration update
    alert("System Configuration Updated:\nSystem Name: " + systemName + "\nAdmin Email: " + adminEmail + "\nSupport Email: " + supportEmail);
});

// Reset System Function
function resetSystem() {
    if (confirm("Are you sure you want to reset the system? This action cannot be undone.")) {
        // Perform system reset
        alert("System reset successful!");
    }
}