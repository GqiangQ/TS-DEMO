{
    var list = [
        ['C', 'N', '%', '÷'],
        [7, 8, 9, '×'],
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
    var types_1 = 'options';
    buttonBox === null || buttonBox === void 0 ? void 0 : buttonBox.addEventListener('click', function (event) {
        var _a;
        if (event.target instanceof HTMLButtonElement) {
            var text = event.target.textContent;
            if (text === null)
                return;
            var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
            var options = ['%', '÷', '×', '-', '+'];
            var view = document.querySelector("#view");
            if (view === null)
                return;
            if (((_a = view.lastElementChild) === null || _a === void 0 ? void 0 : _a.className) === 'res')
                view.lastElementChild.remove();
            if (numbers.includes(text)) {
                if (types_1 === 'numbers') {
                    if (view.lastElementChild === null)
                        return;
                    var t = view.lastElementChild.textContent;
                    if ((t === null || t === void 0 ? void 0 : t.includes('.')) && text === '.')
                        return;
                    view.lastElementChild.textContent = t + text;
                }
                else {
                    if (text === '.')
                        return;
                    var span = document.createElement('span');
                    span.textContent = text;
                    span.className = 'numbers';
                    view.appendChild(span);
                }
                // view.textContent = view.textContent + text
                types_1 = 'numbers';
            }
            else if (options.includes(text)) {
                if (types_1 === 'options')
                    return;
                var span = document.createElement('span');
                span.textContent = text;
                span.className = 'options';
                view.appendChild(span);
                types_1 = 'options';
            }
            else if (text === 'N') {
                if (view.lastElementChild === null)
                    return;
                var textContent = view.lastElementChild.textContent;
                if (textContent && textContent.length > 1 && view.lastElementChild.className !== 'res') {
                    view.lastElementChild.textContent = textContent.substring(0, textContent.length - 1);
                }
                else {
                    view.lastElementChild.remove();
                }
                if (view.lastElementChild === null) {
                    types_1 = 'options';
                    return;
                }
                types_1 = view.lastElementChild.className;
            }
            else if (text === 'C') {
                view.innerHTML = '';
                types_1 = 'options';
            }
            else {
                if (view.lastElementChild === null)
                    return;
                if (view.lastElementChild.className === 'options')
                    return;
                var list_1 = [];
                var ch = view.children;
                for (var index = 0; index < ch.length; index++) {
                    var c = ch[index];
                    if (c == null)
                        return;
                    if (c.className === 'numbers')
                        list_1.push(Number(ch[index].textContent));
                    else {
                        c.textContent && list_1.push(c.textContent);
                    }
                }
                for (var index = 0; index < list_1.length - 2; index = index + 2) {
                    if (list_1[index + 1] === '×')
                        list_1[index + 1] = '*';
                    if (list_1[index + 1] === '÷')
                        list_1[index + 1] = '/';
                }
                // ch.map((item:HTMLElement)=>{
                // })
                var res = void 0;
                try {
                    res = eval(list_1.join(''));
                }
                catch (err) {
                    res = '错误';
                }
                var div = document.createElement('div');
                div.className = 'res';
                div.textContent = res.toString();
                view.appendChild(div);
            }
        }
    });
}
