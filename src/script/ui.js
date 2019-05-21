class UI {
  constructor () {
    this.textIput = document.querySelector('#textInput');
   /*  this.close = document.querySelector('.close'); */
    this.render = document.querySelector('#renderContainer');
  }

  paint(data) {
    console.log(data);
    document.getElementById('render').style.display = 'block';
  }

  getInput(){

  }

  showAlert(msg, msgClass){
    // create element
    const div = document.createElement('div');
    div.className = msgClass;

    const txt = document.createTextNode(msg);
    div.appendChild(txt);

    let msgAlert = document.getElementById('msgAlert');
    msgAlert.appendChild(div);
    /* console.log(txt); */
    
    setTimeout(() => {
      document.querySelector('.error').remove();
    }, 3000);
  }

  

  close() {
    const close = document.querySelector('.close');
    close.addEventListener('click', () => {
      console.log('close');
      document.getElementById('render').style.display = 'none';
    })
  }

}