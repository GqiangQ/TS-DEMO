{
  let list:Array<Array<number|string>> = [
    ['C', 'N', '%' ,'÷'],
    [7,8,9,'x'],
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
  buttonBox?.addEventListener('click', (event) => {
    if(event.target instanceof HTMLButtonElement) {
      console.log(event.target.textContent)
    }
  })
}