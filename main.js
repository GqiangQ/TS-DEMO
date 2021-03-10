{
    var list = [
        ['C', 'N', '%', '÷'],
        [7, 8, 9, 'x'],
        [4, 5, 6, '-'],
        [1, 2, 3, '+'],
        [0, '.', '=']
    ];
    function creat(text) {
        var button = document.createElement('button');
        button.textContent = text;
        button.className = "bt-" + (text === '%' ? 'B' : text);
        return button;
    }
    list.map(function (item) {
        var div = document.createElement('div');
        div.className = 'flex';
        item.forEach(function (bt) {
            div.appendChild(creat(bt + ''));
        });
        var buttonBox = document.querySelector('#button-box');
        buttonBox === null || buttonBox === void 0 ? void 0 : buttonBox.appendChild(div);
    });
    var buttonBox = document.querySelector('#button-box');
    buttonBox === null || buttonBox === void 0 ? void 0 : buttonBox.addEventListener('click', function (event) {
        if (event.target instanceof HTMLButtonElement) {
            console.log(event.target.textContent);
        }
    });
}
