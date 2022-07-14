//Etch-A-Sketch JavaScript//
$(document).ready(function() {

    var board = $('#board');
    var cBoard = 16;

    for (var i = 0; i < cBoard * cBoard; i++) {
      board.append('<div class="square"></div>');
    };

    var square = $('.square');

    square.width(600 / cBoard).height(400 / cBoard);

    square.on('mouseenter', function() {
      $(this).addClass('filler');
    });

    // Function with user input to create new board
    var boardSize = function() {

      var squareAmount = prompt('Enter a board dimension between 1-100!');
      if (isNaN(squareAmount) || squareAmount > 100 || squareAmount < 1) {
        var squareAmount = prompt('Invalid entry: you must pick a number between 1 and 100.');
      }

      $('#board').empty();

      for (i = 0; i < squareAmount * squareAmount; i++) {
        board.append('<div class="square"></div>');

      }
      var newSquare = $('.square')
      newSquare.width(600 / squareAmount).height(400 / squareAmount);
      newSquare.on('mouseenter', function() {
        $(this).addClass('color');
      });
    }
    $('#size').click(boardSize);

    /* Need functions that change board style according to corresponding buttons: black, rainbow, trail:
   */
    $('#black').click(function() {
      $('.square').hover(function() {
        $(this).css('background-color', 'black');
      });
    });

    $('#rainbow').click(function() {
      $('.square').hover(function() {
       $(this).css('background-color', 'rgb('+(Math.floor(Math.random() *256))+',' +(Math.floor(Math.random() *256))+','+(Math.floor(Math.random() *256))+')');
      });
    });

    //Not operational, need some fixes
    $('#trail').focusin(function() {
      $('.square').hover(function() {
        $(this).css('background-color', 'black');
      });
    });
    

    //clear button
    var clear = function() {
      //$('.square').removeClass('color');

      $('.square').css('background-color', 'inherit');
      $('.square')(square)
    }

    $('#reset').click(clear);

  });