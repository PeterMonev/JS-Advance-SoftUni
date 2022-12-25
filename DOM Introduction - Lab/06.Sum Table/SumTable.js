function sumTable() {
    const rows = document.querySelectorAll('table tr');
    let result = 0;

    for(let i = 1;i < rows.length - 1; i++){
        const cell = rows[i].lastElementChild;
        console.log(cell)
        result += Number(cell.textContent);
    }

    document.getElementById('sum').textContent = result;
  
}