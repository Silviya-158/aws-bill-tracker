const API_URL = "https://rfih3jdyrl.execute-api.ap-southeast-1.amazonaws.com/r/upload";

let totalExpenses = 0;

/* Image Preview */
/* Image Preview Logic Moved to Bottom */

/* Save Expense */
async function uploadBill() {

    const fileInput = document.querySelector("#file");
    const amountInput = document.querySelector("#amount");
    const categoryInput = document.querySelector("#category");

    const file = fileInput.files[0];
    const amount = parseFloat(amountInput.value);
    const category = categoryInput.value;

    if (!amount) {
        alert("Enter amount");
        return;
    }

    if (file) {

        const reader = new FileReader();

        reader.onload = async function () {

            const base64Image = reader.result.split(',')[1];

            await sendToBackend(amount, base64Image, category);

            addToUI(amount, reader.result, category);
        };

        reader.readAsDataURL(file);

    } else {

        await sendToBackend(amount, "", category);

        addToUI(amount, "", category);
    }
}

/* Backend Call */
async function sendToBackend(amount, image, category) {

    try {

        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                amount: amount,
                image: image,
                category: category   // ✅ NEW FIELD (SAFE)
            })
        });

        const data = await response.json();
        console.log("SERVER RESPONSE:", data);

    } catch (error) {

        console.log("REAL ERROR:", error);
        alert("Network Error");
    }
}

/* UI Update */

/* Icon Mapping */
const categoryIcons = {
    Food: '<i class="fa-solid fa-utensils"></i>',
    Travel: '<i class="fa-solid fa-plane"></i>',
    Shopping: '<i class="fa-solid fa-bag-shopping"></i>',
    Bills: '<i class="fa-solid fa-file-invoice-dollar"></i>',
    Other: '<i class="fa-solid fa-circle-question"></i>'
};

/* UI Update */
function addToUI(amount, imageSrc, category) {

    totalExpenses += amount;

    document.querySelector("#total").innerText = totalExpenses;
    document.querySelector("#monthTotal").innerText = totalExpenses;

    const history = document.querySelector("#history");

    const div = document.createElement("div");
    div.classList.add("history-item", `cat-${category}`);

    const icon = categoryIcons[category] || categoryIcons.Other;
    const date = new Date().toLocaleDateString();

    div.innerHTML = `
        <div class="item-details">
            <div class="category-icon">
                ${icon}
            </div>
            <div class="item-info">
                <h4>${category}</h4>
                <small>${date}</small>
            </div>
        </div>
        <div class="item-right">
             <div class="item-amount">Rs. ${amount}</div>
             ${imageSrc ? `<small><a href="${imageSrc}" target="_blank" style="text-decoration:none; color: var(--primary-color);">View Bill</a></small>` : ""}
        </div>
    `;

    history.prepend(div);

    // Reset Inputs
    document.querySelector("#amount").value = "";
    document.querySelector("#file").value = ""; // Clear file input
    document.querySelector("#preview").src = "";
    document.querySelector("#preview-container").style.display = "none";
}

// Logic to show preview when file is selected
document.querySelector("#file").addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
        const preview = document.querySelector("#preview");
        preview.src = URL.createObjectURL(file);
        document.querySelector("#preview-container").style.display = "block";
    }
});
