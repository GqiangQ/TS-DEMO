// {
//   let list:Array<Array<number|string>> = [
//     ['C', 'N', '%' ,'÷'],
//     [7,8,9,'×'],
//     [4,5,6,'-'],
//     [1,2,3,'+'],
//     [0,'.','=']
//   ]
//   function creat (text: string):HTMLElement {
//     let button:HTMLButtonElement = document.createElement('button');
//     button.textContent = text;
//     button.className = `bt-${text === '%'? 'B':text}`;
//     return button
//   }
//   list.map((item:Array<number|string>) => {
//     let div: HTMLDivElement = document.createElement('div');
//     div.className = 'flex'
//     item.forEach((bt:string|number) => {
//       div.appendChild(creat(bt+''));
//     })
//     const buttonBox:Element|null = document.querySelector('#button-box')
//     buttonBox?.appendChild(div)
//   })
//   const buttonBox:Element|null = document.querySelector('#button-box')
//   let types:string|any = 'options'
//   buttonBox?.addEventListener('click', (event) => {
//     if(event.target instanceof HTMLButtonElement) {
//       const text:string|null = event.target.textContent
//       if(text === null) return
//       const numbers:Array<string> = ['1','2','3','4','5','6','7','8','9','0','.']
//       const options:Array<string> = ['%' ,'÷','×','-','+']
//       let view:HTMLDivElement|null = document.querySelector("#view")
//       if(view === null) return
//       if(view.lastElementChild?.className === 'res') view.lastElementChild.remove()
//       if(numbers.includes(text)) {
//         if (types === 'numbers') {
//           if(view.lastElementChild === null) return
//           let t = view.lastElementChild.textContent
//           if(t?.includes('.') && text === '.') return
//           view.lastElementChild.textContent = t + text
//         } else {
//           if(text === '.') return
//           const span = document.createElement('span')
//           span.textContent = text
//           span.className = 'numbers'
//           view.appendChild(span)
//         }
//         // view.textContent = view.textContent + text
//         types = 'numbers'
//       } else if(options.includes(text)) {
//         if(types === 'options') return
//         const span = document.createElement('span')
//         span.textContent = text
//         span.className = 'options'
//         view.appendChild(span)
//         types = 'options'
//       } else if(text === 'N'){
//         if(view.lastElementChild === null) return
//         let textContent = view.lastElementChild.textContent
//         if(textContent && textContent.length > 1 && view.lastElementChild.className !== 'res') {
//           view.lastElementChild.textContent = textContent.substring(0,textContent.length-1)
//         } else {
//           view.lastElementChild.remove()
//         }
//         if(view.lastElementChild === null){
//           types = 'options'
//           return
//         }
//         types  =  view.lastElementChild.className
//       } else if(text === 'C') {
//         view.innerHTML = ''
//         types = 'options'
//       } else {
//         if(view.lastElementChild === null) return
//         if(view.lastElementChild.className === 'options') return
//         let list:Array<string|number> = []
//         const ch:HTMLCollection = view.children
//         for(let index = 0;index<ch.length;index++){
//           let c = ch[index]
//           if(c == null) return
//           if(c.className === 'numbers')
//             list.push(Number(ch[index].textContent))
//           else{
//             c.textContent && list.push(c.textContent)
//           }
//         }
//         for(let index = 0;index<list.length-2;index = index+2) {
//           if(list[index+1] === '×') list[index+1] = '*'
//           if(list[index+1] === '÷') list[index+1] = '/'
//         }
//         // ch.map((item:HTMLElement)=>{
//         // })
//         let res:number|string
//         try {
//           res = eval(list.join('')
//         } catch(err) {
//           res = '错误'
//         }
//         if (res === Infinity) res = '错误'
//         const div = document.createElement('div')
//         console.log(res === Infinity)
//         div.className = 'res'
//         div.textContent = res.toString()
//         view.appendChild(div)
//       }
//     }
//   })
// }
var Calculator = /** @class */ (function () {
    function Calculator() {
        var _this = this;
        this.types = 'options';
        //  键位初始化
        this.init = function () {
            // 键盘的键位
            var list = [
                ['C', 'N', '%', '÷'],
                [7, 8, 9, '×'],
                [4, 5, 6, '-'],
                [1, 2, 3, '+'],
                [0, '.', '=']
            ];
            // 渲染键位
            list.map(function (item) {
                var div = document.createElement('div');
                div.className = 'flex';
                item.forEach(function (bt) {
                    div.appendChild(_this.createButton(bt + ''));
                });
                var buttonBox = document.querySelector('#button-box');
                buttonBox === null || buttonBox === void 0 ? void 0 : buttonBox.appendChild(div);
            });
        };
        //  创建一个button HTMLElement
        this.createButton = function (text) {
            var button = document.createElement('button');
            button.textContent = text;
            button.className = "bt-" + (text === '%' ? 'B' : text);
            return button;
        };
        this.buttonAddListenter = function () {
            var _a;
            (_a = _this.buttonBox) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function (event) {
                var _a;
                if (!(event.target instanceof HTMLButtonElement))
                    return;
                var text = event.target.textContent;
                if (text === null)
                    return;
                var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
                var options = ['%', '÷', '×', '-', '+'];
                if (_this.view === null)
                    return;
                if (((_a = _this.view.lastElementChild) === null || _a === void 0 ? void 0 : _a.className) === 'res')
                    _this.view.lastElementChild.remove();
                if (numbers.includes(text))
                    _this.numberButtonClick(text);
                else if (options.includes(text))
                    _this.optionsButtonClick(text);
                else if (text === 'N')
                    _this.NButtonClick(text);
                else if (text === 'C')
                    _this.clestButtonClick(text);
                else
                    _this.relButtonClick();
            });
        };
        this.buttonBox = document.querySelector('#button-box');
        this.view = document.querySelector("#view");
        this.init();
        this.buttonAddListenter();
    }
    Calculator.prototype.numberButtonClick = function (text) {
        if (!this.view)
            return;
        if (this.types === 'numbers') {
            if (this.view.lastElementChild === null)
                return;
            var t = this.view.lastElementChild.textContent;
            if (!t)
                return;
            if (t.includes('.') && text === '.')
                return;
            this.view.lastElementChild.textContent = t + text;
        }
        else {
            if (text === '.')
                return;
            var span = document.createElement('span');
            span.textContent = text;
            span.className = 'numbers';
            this.view.appendChild(span);
        }
        // view.textContent = view.textContent + text
        this.types = 'numbers';
    };
    Calculator.prototype.optionsButtonClick = function (text) {
        if (!this.view)
            return;
        if (this.types === 'options')
            return;
        var span = document.createElement('span');
        span.textContent = text;
        span.className = 'options';
        this.view.appendChild(span);
        this.types = 'options';
    };
    Calculator.prototype.NButtonClick = function (text) {
        if (this.view === null)
            return;
        if (this.view.lastElementChild === null)
            return;
        var textContent = this.view.lastElementChild.textContent;
        if (textContent && textContent.length > 1 && this.view.lastElementChild.className !== 'res') {
            this.view.lastElementChild.textContent = textContent.substring(0, textContent.length - 1);
        }
        else {
            this.view.lastElementChild.remove();
        }
        if (this.view.lastElementChild === null) {
            this.types = 'options';
            return;
        }
        this.types = this.view.lastElementChild.className;
    };
    Calculator.prototype.clestButtonClick = function (text) {
        if (!this.view)
            return;
        this.view.innerHTML = '';
        this.types = 'options';
    };
    Calculator.prototype.relButtonClick = function () {
        if (!this.view || this.view.lastElementChild === null)
            return;
        if (this.view.lastElementChild.className === 'options')
            return;
        var str = '';
        //         let list:Array<string|number> = []
        var ch = this.view.children;
        for (var index = 0; index < ch.length; index++) {
            var c = ch[index];
            if (c == null)
                return;
            var text = ch[index].textContent;
            if (text === '×')
                text = '*';
            if (text === '÷')
                text = '/';
            str += text;
        }
        var res;
        try {
            res = eval(str);
        }
        catch (err) {
            res = '错误';
        }
        if (res === Infinity)
            res = '错误';
        var div = document.createElement('div');
        console.log(res === Infinity);
        div.className = 'res';
        div.textContent = res.toString();
        this.view.appendChild(div);
    };
    return Calculator;
}());
new Calculator();
