const readXlsxFile = require('read-excel-file/node');
const path = require('path')

window.addEventListener('DOMContentLoaded', () => {
  let test = document.getElementById('test');
  let ePath = path.join(__dirname, '/asset/asset/test.xlsx')
  readXlsxFile(ePath).then( (rows) => {
  for (let cell in rows) {
    let column = rows[cell];
      for (let num in column) {     
	  if (column[num]) {    
          test.innerHTML = test.innerHTML + `<span>${column[num]} </span>`;
	  }
    }
      test.innerHTML = test.innerHTML +' <br/>';	  
  }
  })
})

