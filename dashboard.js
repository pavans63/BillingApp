// Event listener for the form submission (Generate Invoice button)
document.getElementById('invoice-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from reloading the page

    // Get input values from the form
    const customerName = document.getElementById('customer-name').value;
    const customerContact = document.getElementById('customer-contact').value;
    const customerLocation = document.getElementById('customer-location').value;
    const quantity = parseFloat(document.getElementById('product-quantity').value);
    const pricePerUnit = parseFloat(document.getElementById('product-price').value);
    const gstRate = 0.18; // GST rate of 18%

    // Check if inputs are valid
    if (!customerName || !customerContact || !customerLocation || !quantity || !pricePerUnit) {
        alert('Please fill in all required fields.');
        return;
    }

    // Calculate the amount, GST, and total
    const amount = quantity * pricePerUnit;
    const gstAmount = amount * gstRate;
    const totalAmount = amount + gstAmount;

    // Invoice data
    const invoiceData = {
        customerName,
        customerContact,
        customerLocation,
        quantity,
        pricePerUnit,
        amount: amount.toFixed(2),
        gstAmount: gstAmount.toFixed(2),
        totalAmount: totalAmount.toFixed(2),
        date: new Date().toLocaleString()
    };

    // Display the invoice details in the invoice-output section
    const invoiceOutput = document.getElementById('invoice-output');
    invoiceOutput.innerHTML = `
        <h3>Invoice Details</h3>
        <p><strong>Customer Name:</strong> ${invoiceData.customerName}</p>
        <p><strong>Contact:</strong> ${invoiceData.customerContact}</p>
        <p><strong>Location:</strong> ${invoiceData.customerLocation}</p>
        <p><strong>Quantity:</strong> ${invoiceData.quantity} kg</p>
        <p><strong>Price per Unit:</strong> ₹${invoiceData.pricePerUnit.toFixed(2)}</p>
        <p><strong>Amount:</strong> ₹${invoiceData.amount}</p>
        <p><strong>GST (18%):</strong> ₹${invoiceData.gstAmount}</p>
        <p><strong>Total Amount:</strong> ₹${invoiceData.totalAmount}</p>
        <p><strong>Date:</strong> ${invoiceData.date}</p>
    `;

    // Show the print button
    document.getElementById('print-btn').style.display = 'inline-block';

    // Clear the form fields after generating the invoice
    document.getElementById('invoice-form').reset();
});

// Event listener for the Print Invoice button
document.getElementById('print-btn').addEventListener('click', function() {
    const invoiceContent = document.getElementById('invoice-output').innerHTML;
    const printWindow = window.open('', '_blank', 'width=800,height=600');
    printWindow.document.write('<html><head><title>Print Invoice</title></head><body>');
    printWindow.document.write('<h1>Invoice</h1>');
    printWindow.document.write(invoiceContent);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
});

// Event listener for the Logout button
document.getElementById('logout-btn').addEventListener('click', function() {
    window.location.href = 'login.html'; // Redirect to the login page
});
