{
  let list:Array<Array<number|string>> = [
    ['C', 'N', '%' ,'÷'],
    [7,8,9,'×'],
    [4,5,6,'-'],
    [1,2,3,'+'],
    [0,'.','=']
  ]
  function creat (text: string):HTMLElement {
    let button:HTMLButtonElement = document.createElement('button');
    button.textContent = text;
    button.className = `bt-${text === '%'? 'B':text}`;
    return button
  }
  list.map((item:Array<number|string>) => {
    let div: HTMLDivElement = document.createElement('div');
    div.className = 'flex'
    item.forEach((bt:string|number) => {
      div.appendChild(creat(bt+''));
    })
    const buttonBox:Element|null = document.querySelector('#button-box')
    buttonBox?.appendChild(div)
  })
  const buttonBox:Element|null = document.querySelector('#button-box')
  let types:string|any = 'options'
  buttonBox?.addEventListener('click', (event) => {
    if(event.target instanceof HTMLButtonElement) {
      const text:string|null = event.target.textContent
      if(text === null) return
      const numbers:Array<string> = ['1','2','3','4','5','6','7','8','9','0','.']
      const options:Array<string> = ['%' ,'÷','×','-','+']
      let view:HTMLDivElement|null = document.querySelector("#view")
      if(view === null) return
      if(view.lastElementChild?.className === 'res') view.lastElementChild.remove()
      if(numbers.includes(text)) {
        if (types === 'numbers') {
          if(view.lastElementChild === null) return
          let t = view.lastElementChild.textContent
          if(t?.includes('.') && text === '.') return
          view.lastElementChild.textContent = t + text
        } else {
          if(text === '.') return
          const span = document.createElement('span')
          span.textContent = text
          span.className = 'numbers'
          view.appendChild(span)
        }
        // view.textContent = view.textContent + text
        types = 'numbers'
      } else if(options.includes(text)) {
        if(types === 'options') return
        const span = document.createElement('span')
        span.textContent = text
        span.className = 'options'
        view.appendChild(span)
        types = 'options'
      } else if(text === 'N'){
        if(view.lastElementChild === null) return
        let textContent = view.lastElementChild.textContent
        if(textContent && textContent.length > 1 && view.lastElementChild.className !== 'res') {
          view.lastElementChild.textContent = textContent.substring(0,textContent.length-1)
        } else {
          view.lastElementChild.remove()
        }
        if(view.lastElementChild === null){
          types = 'options'
          return
        }
        types  =  view.lastElementChild.className
      } else if(text === 'C') {
        view.innerHTML = ''
        types = 'options'
      } else {
        if(view.lastElementChild === null) return
        if(view.lastElementChild.className === 'options') return
        let list:Array<string|number> = []
        const ch:HTMLCollection = view.children
        for(let index = 0;index<ch.length;index++){
          let c = ch[index]
          if(c == null) return
          if(c.className === 'numbers')
            list.push(Number(ch[index].textContent))
          else{
            c.textContent && list.push(c.textContent)
          }
        }
        for(let index = 0;index<list.length-2;index = index+2) {
          if(list[index+1] === '×') list[index+1] = '*'
          if(list[index+1] === '÷') list[index+1] = '/'
        }
        // ch.map((item:HTMLElement)=>{

        // })
        let res:number|string
        try {
          res = eval(list.join('')
        } catch(err) {
          res = '错误'
        }
        const div = document.createElement('div')
        div.className = 'res'
        div.textContent = res.toString()
        view.appendChild(div)
      }
    }
  })
}