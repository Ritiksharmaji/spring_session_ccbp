document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('expense-form');
    const expenseList = document.getElementById('expense-list');
    const totalAmountElem = document.getElementById('total-amount');
    const filterCategory = document.getElementById('filter-category');

    let expenses = [];

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('expense-name').value;
        const amount = parseFloat(document.getElementById('expense-amount').value);
        const category = document.getElementById('expense-category').value;
        const date = document.getElementById('expense-date').value;

        if (name && amount && category && date) {
            const expense = { name, amount, category, date };
            expenses.push(expense);
            addExpenseToTable(expense);
            updateTotalAmount();
            form.reset();
        }
    });

    filterCategory.addEventListener('change', () => {
        const selectedCategory = filterCategory.value;
        expenseList.innerHTML = '';
        expenses
            .filter(expense => selectedCategory === 'All' || expense.category === selectedCategory)
            .forEach(expense => addExpenseToTable(expense));
    });

    function addExpenseToTable(expense) {
        const row = document.createElement('tr');
        row.classList.add('border-t', 'border-gray-200');
        row.innerHTML = `
            <td class="p-3">${expense.name}</td>
            <td class="p-3">$${expense.amount.toFixed(2)}</td>
            <td class="p-3">${expense.category}</td>
            <td class="p-3">${expense.date}</td>
            <td class="p-3">
                <button class="text-red-500 hover:text-red-700" onclick="removeExpense(this)">Remove</button>
            </td>
        `;
        expenseList.appendChild(row);
    }

    function updateTotalAmount() {
        const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
        totalAmountElem.textContent = total.toFixed(2);
    }

    window.removeExpense = (button) => {
        const row = button.closest('tr');
        const amount = parseFloat(row.children[1].textContent.replace('$', ''));
        expenses = expenses.filter(expense => expense.amount !== amount);
        row.remove();
        updateTotalAmount();
    };
});
