let recipes = {};

function addRecipe() {
    const recipeName = document.getElementById('recipeName').value.trim();
    if (recipeName) {
        if (!recipes[recipeName]) {
            recipes[recipeName] = [];
            renderTable();
        } else {
            alert('Recipe already exists!');
        }
        document.getElementById('recipeName').value = '';
    } else {
        alert('Please enter a recipe name.');
    }
}

function addIngredient() {
    const recipeName = document.getElementById('recipeName').value.trim();
    const ingredient = document.getElementById('ingredient').value.trim();
    if (recipeName && ingredient) {
        if (recipes[recipeName]) {
            recipes[recipeName].push(ingredient);
            renderTable();
        } else {
            alert('Recipe does not exist. Add the recipe first.');
        }
        document.getElementById('ingredient').value = '';
    } else {
        alert('Please fill out both fields.');
    }
}

function renderTable() {
    const tableBody = document.querySelector('#recipeTable tbody');
    tableBody.innerHTML = '';
    for (const recipeName in recipes) {
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        nameCell.textContent = recipeName;
        const ingredientCell = document.createElement('td');
        ingredientCell.textContent = recipes[recipeName].join(', ');
        row.appendChild(nameCell);
        row.appendChild(ingredientCell);
        tableBody.appendChild(row);
    }
}

function clearAll() {
    recipes = {};
    renderTable();
}
