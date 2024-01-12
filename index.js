document.addEventListener('DOMContentLoaded', function () {
    const expenseList = document.getElementById('expense-list');
    const expenseForm = document.getElementById('expense-form');
  
    function addExpense() {
      const amount = document.getElementById('expense-amount').value;
      const description = document.getElementById('expense-description').value;
      const category = document.getElementById('expense-category').value;
  
      const expenseItem = document.createElement('div');
      expenseItem.classList.add('expense-item');
  
      const details = document.createElement('div');
      details.textContent = `Amount: $${amount} | Description: ${description} | Category: ${category}`;
      expenseItem.appendChild(details);
  
      const buttons = document.createElement('div');
      buttons.classList.add('edit-delete-buttons');
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => expenseList.removeChild(expenseItem));
      buttons.appendChild(deleteButton);
  
      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.addEventListener('click', () => editExpense(expenseItem));
      buttons.appendChild(editButton);
  
      expenseItem.appendChild(buttons);
  
      expenseList.appendChild(expenseItem);
  
      // Clear input fields
      expenseForm.reset();
    }
  
    function editExpense(expenseItem) {
      const details = expenseItem.querySelector('div');
      const [amount, description, category] = details.textContent.split(' | ');
  
      // Set input fields with existing values
      document.getElementById('expense-amount').value = amount.split(':')[1].trim();
      document.getElementById('expense-description').value = description.split(':')[1].trim();
      document.getElementById('expense-category').value = category.split(':')[1].trim();
  
      // Remove the existing expense item from the list
      expenseList.removeChild(expenseItem);
    }
  });
  