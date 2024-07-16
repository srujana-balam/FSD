
let tableData = {
    headers: ['Name', 'Age', 'Gender', 'Actions'],
    rows: [
        ['Srujana', '20', 'Female'],
        ['Lahari', '19', 'Female'],
        ['Gana', '20', 'Male']
    ]
};

function createTable(headers, rows) {
    const tableContainer = document.getElementById('table');
    tableContainer.innerHTML = ''; 

    
    headers.forEach(headerText => {
        const headerCell = document.createElement('div');
        headerCell.classList.add('cell', 'header');
        headerCell.textContent = headerText;
        tableContainer.appendChild(headerCell);
    });

    
    rows.forEach((row, rowIndex) => {
        row.forEach((cellText, cellIndex) => {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.textContent = cellText;
            tableContainer.appendChild(cell);
        });

        
        const actionsCell = document.createElement('div');
        actionsCell.classList.add('cell');
        actionsCell.innerHTML = `
            <button onclick="editRow(${rowIndex})">Edit</button>
            <button onclick="deleteRow(${rowIndex})">Delete</button>
        `;
        tableContainer.appendChild(actionsCell);
    });
}

function editRow(rowIndex) {
    const newRowData = prompt("Enter new data (comma separated):", tableData.rows[rowIndex].join(','));
    if (newRowData) {
        tableData.rows[rowIndex] = newRowData.split(',');
        createTable(tableData.headers, tableData.rows);
    }
}

function deleteRow(rowIndex) {
    tableData.rows.splice(rowIndex, 1);
    createTable(tableData.headers, tableData.rows);
}

function addRow() {
    const newRowData = prompt("Enter new row data (comma separated):");
    if (newRowData) {
        tableData.rows.push(newRowData.split(','));
        createTable(tableData.headers, tableData.rows);
    }
}

document.getElementById('toggleTableBtn').addEventListener('click', () => {
    const tableContainer = document.getElementById('table');
    if (tableContainer.style.display === 'none' || !tableContainer.style.display) {
        createTable(tableData.headers, tableData.rows);
        tableContainer.style.display = 'grid';
    } else {
        addRow();
    }
});


document.getElementById('table').style.display = 'none';