//Example fetch using pokemonapi.co
// document.querySelector('button').addEventListener('click', getFetch)

// function getFetch(){
//   const choice = document.querySelector('input').value
//   console.log(choice)
//   const url = ``

//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)     
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }


initCatRow()
initBoard()

function initCatRow(){
    let catRow = document.getElementById('category-row')
    for(let j =0; j<6; j++){
        let box = document.createElement('div')
        box.className= 'clue-box category-box'
        catRow.appendChild(box)
    }
}

function initBoard() {
    let board = document.getElementById('clue-board')
    //generate 5 rows, then place 6 boxes in each row 

    for(let i=0; i < 5; i++) {
        let row = document.createElement("div")
        let boxValue = 200 * (i+1)
        row.className = 'clue-row'

        for(let j =0; j<6; j++){
            let box = document.createElement('div')
            box.className= 'clue-box'
            box.textContent = "$" + boxValue
            box.addEventListener('click',getClue,false)
            row.appendChild(box)
           
        } 
        board.appendChild(row)
    }
}
function getClue(){
                
}