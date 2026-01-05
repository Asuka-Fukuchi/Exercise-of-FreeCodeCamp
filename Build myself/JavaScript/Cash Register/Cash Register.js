let price = 1.87;
let cid = [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100]
];

const cashInput = document.getElementById("cash");
const changeDue = document.getElementById("change-due");
const purchaseBtn = document.getElementById("purchase-btn");

purchaseBtn.addEventListener("click", () => {
    const cashValue = Number(cashInput.value);

    if (cashValue < price) {
        alert("Customer does not have enough money to purchase the item")
        cashInput.value = '';
        return
    }

    if (cashValue === price) {
        changeDue.innerHTML = "No change due - customer paid with exact cash";
        cashInput.value = '';
        return;
    }

    if (cashValue > price) {
        let change = Math.round((cashValue - price) * 100);
        const denominations = [10000, 2000, 1000, 500, 100, 25, 10, 5, 1];
        const reverseCid = cid.reverse().map(([denominationName, amount]) => [
            denominationName,
            Math.round(amount * 100)
        ]);

        const changeArr = [];

        for (let i = 0; i < denominations.length; i++) {
            const denomValue = denominations[i];
            const denomName = reverseCid[i][0];
            let denomAmountInDrawer = reverseCid[i][1];
            let amountToReturn = 0;

            while (change >= denomValue && denomAmountInDrawer >= denomValue) {
                change -= denomValue;
                denomAmountInDrawer -= denomValue;
                amountToReturn += denomValue
            }

            if (amountToReturn > 0) {
                changeArr.push([denomName, amountToReturn / 100]);
            }
        }

        if (change > 0) {
            changeDue.innerHTML = "Status: INSUFFICIENT_FUNDS";
            return;
        }

        const totalInDrawer = reverseCid.reduce((sum, curr) => sum + curr[1], 0);
        const totalUsed = changeArr.reduce((sum, curr) => sum + Math.round(curr[1] * 100), 0);

        if (totalUsed === totalInDrawer) {
            changeDue.innerHTML = `Status: CLOSED ` + changeArr.map(
                ([name, amount]) => `${name}: $${amount.toFixed(2)}`
            ).join(" ");
        } else {
            changeDue.innerHTML = `Status: OPEN ` + changeArr.map(
                ([name, amount]) => `${name}: $${amount.toFixed(2)}`
            ).join(" ");
        }
    }
})