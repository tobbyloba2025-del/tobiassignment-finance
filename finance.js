const transactions = [
    { id: 1, type: "income", amount: 7000 },
    { id: 2, type: "expense", amount: 1500 },
    { id: 3, type: "income", amount: 3000 },
    { id: 4, type: "expense", amount: 2000 }
];

async function generateAuditReport(txArray) {
    let totalIncome = 0;
    let totalExpense = 0;

    for (let transaction of txArray) {
        if (transaction.type === "income") {
            totalIncome += transaction.amount;
        } else if (transaction.type === "expense") {
            totalExpense += transaction.amount;
        }
    }

    const netBalance = totalIncome - totalExpense;

    await new Promise((resolve) => {
        setTimeout(resolve, 2000);
    });

    return {
        totalIncome,
        totalExpense,
        netBalance
    };
}

// Async Immediately Invoked Arrow Function
(async () => {
    const report = await generateAuditReport(transactions);

    console.log("Financial Audit Report:");
    console.log(report);
})();