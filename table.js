const readXlsxFile = require('read-excel-file/node');
const path = require('path')

window.addEventListener('DOMContentLoaded', () => {
  let test = document.getElementById('test');
  let ePath = path.join(__dirname, '/asset/table.xlsx');	
  readXlsxFile(ePath).then( (rows) => {

  /* rows expectation
11	21	31	41	51	61	71	81	91	101	111	121
12	22	32	42	52	62	72	82	92	102	112	122
13	23	33	43	53	63	73	83	93	103	113	123
14	24	34	44	54	64	74	84	94	104	114	124
15	25	35	45	55	65	75	85	95	105	115	125
16	26	36	46	56	66	76	86	96	106	116	126
17	27	37	47	57	67	77	87	97	107	117	127
18	28	38	48	58	68	78	88	98	108	118	128
19	29	39	49	59	69	79	89	99	109	119	129
20	30	40	50	60	70	80	90	100	110	120	130
21	31	41	51	61	71	81	91	101	111	121	131
22	32	42	52	62	72	82	92	102	112	122	132
23	33	43	53	63	73	83	93	103	113	123	133
24	34	44	54	64	74	84	94	104	114	124	134
25	35	45	55	65	75	85	95	105	115	125	135
26	36	46	56	66	76	86	96	106	116	126	136
27	37	47	57	67	77	87	97	107	117	127	137
28	38	48	58	68	78	88	98	108	118	128	138
29	39	49	59	69	79	89	99	109	119	129	139
30	40	50	60	70	80	90	100	110	120	130	140
*/
  for (let rNum in rows) {
  /*row example
  11	21	31	41	51	61	71	81	91	101	111	121
  */
    let row = document.createElement('tr');	 
    let column = rows[rNum];

      for (let num in column) {    
	  /*cell example
	   11
	  */
          let aCell = document.createElement('td');
	  if (column[num]) {    
          aCell.innerHTML =  `${column[num]}`;
          row.appendChild(aCell);	  
	  }
    }

    test.appendChild(row);	  
  }
  })
})

