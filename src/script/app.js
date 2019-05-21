const http = new HTTP;

const ui = new UI();


document.querySelector('#searchBtn').addEventListener('click', () => {
  let txtInput = document.querySelector('#textInput');
  if(txtInput.value !== '') { 
    getSearch();
    console.log('proceed boss');
    ui.close();
  } else {
    ui.showAlert('fill the search box to proceed', 'error');
    console.log('error');
  }

  
})



function getSearch() {
  /* http.get()
  .then(data => {
    ui.paint(data);
  })
  .catch(err => console.log(err)); */
  ui.paint();
}


