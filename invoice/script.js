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

    invoiceContainer.style.display = "block";

    invoiceTitle.textContent = "PVM SĄSKAITA FAKTŪRA";
    invoiceNumber.textContent = data.number;
    sellerInfo.textContent = `Pardavėjo duomenys: ${data.company.seller.name}, ${data.company.seller.address}, ${data.company.seller.code}, ${data.company.seller.vat}, ${data.company.seller.phone}`;
    buyerInfo.textContent = `Pirkėjo duomenys: ${data.company.buyer.name}, ${data.company.buyer.address}, ${data.company.buyer.code}, ${data.company.buyer.vat}, ${data.company.buyer.phone}`;
    invoiceDate.textContent = `Sąskaitos data: ${data.date}`;
    paymentDueDate.textContent = `Mokėjimo termino data: ${data.due_date}`;

    data.items.slice(0, -1).forEach((item) => {
      const row = document.createElement("tr");
      const discountAmount = calculateDiscountAmount(item.price, item.discount);
      const totalPrice = item.price - discountAmount;
      row.innerHTML = `
        <td>${item.description}</td>
        <td>${item.quantity}</td>
        <td>${item.price}</td>
        <td>${discountAmount}</td>
        <td>${totalPrice}</td>
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

    transportation_cost.textContent = data.shippingPrice;
    vatAmount.textContent = data.vat_amount;
    totalAmount.textContent = data.total_amount;
  })
  .catch((error) => console.error(error));
