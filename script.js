let total = 0;

// 1. HTML elements ko JS mein pakadna (DOM Selection)
const addBtn = document.getElementById("addBtn");
const expenseList = document.getElementById("expenseList");
const totalDisplay = document.getElementById("totalAmount");

// 2. Button click par action lagana (Event Listener)
addBtn.addEventListener("click", function () {
  const nameInput = document.getElementById("expName");
  const amountInput = document.getElementById("expAmount");

  const name = nameInput.value;
  const amount = Number(amountInput.value); // String ko Number me badla

  // 3. Form Validation (Exam me puchte hain)
  if (name === "" || amount <= 0) {
    alert("Please enter valid name and amount!");
    return;
  }

  // 4. Total update karna
  total += amount;
  totalDisplay.innerText = total;

  // 5. Naya list item (<li>) dynamically create karke screen par dikhana
  const li = document.createElement("li");
  li.innerText = name + " - ₹" + amount;
  expenseList.appendChild(li);

  // Input boxes khali karna
  nameInput.value = "";
  amountInput.value = "";
});
