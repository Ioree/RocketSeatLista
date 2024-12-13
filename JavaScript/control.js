const addItemBtn = document.getElementById('addItemBtn');
    const itemInput = document.getElementById('itemInput');
    const itemList = document.getElementById('itemList');
    const alertBox = document.getElementById('alertBox');

    // Adicionar item à lista
addItemBtn.addEventListener('click', () => {
    const itemText = itemInput.value.trim();
    if (itemText !== '') {
    const li = document.createElement('li');
    li.innerHTML = `<div><input type="checkbox" class="mark-btn"><label for="">${itemText}</label></div><i><img src="../img/delete-02-stroke-rounded.svg" alt="" class="delete-btn"></i>`;
    itemList.appendChild(li);
    itemInput.value = '';
    attachEventHandlers(li);
    }
});

    // Excluir item e marcar item
function attachEventHandlers(li) {
    const deleteButton = li.querySelector('.delete-btn');
    const markButton = li.querySelector('.mark-btn');

    deleteButton.addEventListener('click', () => {
        li.remove();
        showAlert();
    });

    markButton.addEventListener('click', () => {
        li.classList.toggle('marked');
    });
}

    document.querySelectorAll('li').forEach(attachEventHandlers);

    // Mostrar alerta
    function showAlert() {
        alertBox.style.display = 'flex';
    setTimeout(() => {
        alertBox.style.display = 'none';
    }, 2000);
}