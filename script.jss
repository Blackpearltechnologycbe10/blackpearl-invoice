```javascript
function generateInvoice(){

let customer=document.getElementById("customer").value;

let service=document.getElementById("service").value;

let amount=document.getElementById("amount").value;

let invoiceNo="BP-"+Date.now();

document.getElementById("output").innerHTML=

`

<h2>Invoice</h2>

<p><b>Invoice No:</b> ${invoiceNo}</p>

<p><b>Customer:</b> ${customer}</p>

<p><b>Service:</b> ${service}</p>

<p><b>Amount:</b> ₹${amount}</p>

<hr>

<p>Black Pearl Technology</p>

`;

}
```
