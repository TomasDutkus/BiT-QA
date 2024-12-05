fetch("https://in3.dev/inv/")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const invoiceContainer = document.getElementById("invoice-container");
    const invoiceTitle = document.getElementById("invoice-title");
    const invoiceNumber = document.getElementById("invoice-number");
    const sellerInfo = document.getElementById("seller-info");
    const buyerInfo = document.getElementById("buyer-info");
    const invoiceDate = document.getElementById("invoice-date");
    const paymentDueDate = document.getElementById("payment-due-date");
    const invoiceTableBody = document.getElementById("invoice-table-body");
    const transportation_cost = document.getElementById("transportation-cost");
    const vatAmount = document.getElementById("vat-amount");
    const totalAmount = document.getElementById("total-amount");
    const subtotal = document.getElementById("sub-total");

    invoiceContainer.style.display = "block";

    invoiceTitle.textContent = "PVM SĄSKAITA FAKTŪRA";
    invoiceNumber.textContent = `SĄSKAITOS NR: ${data.number}`;
    sellerInfo.textContent = `Pardavėjo duomenys: ${data.company.seller.name}, ${data.company.seller.address}, ${data.company.seller.code}, ${data.company.seller.vat}, ${data.company.seller.phone}`;
    buyerInfo.textContent = `Pirkėjo duomenys: ${data.company.buyer.name}, ${data.company.buyer.address}, ${data.company.buyer.code}, ${data.company.buyer.vat}, ${data.company.buyer.phone}`;
    invoiceDate.textContent = `Sąskaitos data: ${data.date}`;
    paymentDueDate.textContent = `Mokėjimo termino data: ${data.due_date}`;

    data.items.forEach((item) => {
      const row = document.createElement("tr");
      const discountAmount = calculateDiscountAmount(item.price, item.discount);
      const totalPrice = (item.price - discountAmount) * item.quantity;
      const discountText =
        item.discount.type === "percentage"
          ? `${item.discount.value}% (-${discountAmount.toFixed(2)})`
          : discountAmount === 0
          ? "0"
          : `-${discountAmount.toFixed(2)}`;
      row.innerHTML = `
        <td>${item.description}</td>
        <td>${item.quantity}</td>
        <td>${item.price}</td>
        <td>${discountText}</td>
        <td>${totalPrice.toFixed(2)}</td>
      `;
      invoiceTableBody.appendChild(row);
    });
    function calculateDiscountAmount(price, discount) {
      if (discount.type === "fixed") {
        return discount.value;
      } else if (discount.type === "percentage") {
        return price * (discount.value / 100);
      } else {
        return 0;
      }
    }

    const totalPrice = data.items.reduce((acc, item) => {
      const discountAmount = calculateDiscountAmount(item.price, item.discount);
      return acc + (item.price - discountAmount) * item.quantity;
    }, 0);

    subtotal1 = totalPrice.toFixed(2);
    subtotal.textContent = subtotal1;
    transportation_cost1 = data.shippingPrice.toFixed(2);
    transportation_cost.textContent = transportation_cost1;
    vatAmount1 = (totalPrice * 0.21 + data.shippingPrice * 0.21).toFixed(2);
    vatAmount.textContent = vatAmount1;
    totalAmount1 =
      totalPrice +
      data.shippingPrice +
      totalPrice * 0.21 +
      data.shippingPrice * 0.21;
    totalAmount.textContent = totalAmount1.toFixed(2);
  });
const printButton = document.getElementById("print-button");

printButton.addEventListener("click", () => {
  const invoiceData = {
    /* your invoice data here */
  };
  const invoiceHtml = generateInvoiceHtml(invoiceData);
  const printWindow = window.open("", "_blank");
  printWindow.document.write(invoiceHtml);
  printWindow.print();
  printWindow.close();
});

function generateInvoiceHtml(invoiceData) {
  // generate the HTML for the invoice based on the invoice data
  // ...
}
