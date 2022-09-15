function setUp(){
    board = [];
    pieceStack = [5,5,5,5,5,5,5];
    for (let i = 0; i < 6; i++) {
        let row=[];
        for (let j = 0; j < 7; j++) {
            board.push(' ');
            $("#gameBoard").append(`<div  class="tile"  id="${i}-${j}"> ${i},${j} </div>`);
        }

        board.push(row);
    }
    
 

}

function addingColor(gameOver,currentPlayer){
    if(gameOver)
        return;
    $(".tile").on('click', function(){
    
        var splitId  =  this.id.split("-");
        var x= splitId[0];
        var y= splitId[1];
        var z = pieceStack[y];

        if(z <0)
            return false;

        
        board[z][y] = currentPlayer;

      
        let color;
        if(currentPlayer=='red'){
            color = 'red';
            currentPlayer =1;
        }else{
            color = 'yellow';
            currentPlayer =0;
        }
            
         // alert(z.toString() + "-" + y.toString() );
         $('#' +z.toString() + "-" + y.toString() ).css('background-color', color);
       
        z=z-1;
        pieceStack[y] =z;

     
        
        check();
       
    });
}

function check(){
    
    
     for (let x = 0; x < 6; x++) {
       for(let  y= 0; y < 3; y++){   //3 times
            if(board[y][x] !== '') 
                if(board[y][x] == board[y+1][x] && board[y+1][x] == board[y+2][x] && board[y+2][x] == board[y+3][x]){
                //    alert ("meron");
                }
       }
     }
    
    
}



$(function() {
    
    var board;
    var gameOver = false;
    var playerRed =0;
    var playerYellow =1;
    var pieceStack ;
    var currentPlayer='red';
    
    setUp();
    addingColor(gameOver,currentPlayer);
     

});