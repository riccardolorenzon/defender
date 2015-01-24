// among all rocks returns the y offset(related to paddle postion) of the nearest to the earth in linear time
function get_nearest_rock_offset_y(rocks){
    var n = rocks.length;
    var min_distance = 1000;
    var offset_y = null;
    for (var i = 0; i < n; i++)
    {  
        // retrieve y using a trigonometry function
        var y = Math.round(rocks[i].distance * Math.sin(rocks[i].radians));
        if (rocks[i].distance <= min_distance){
            min_distance = rocks[i].distance;
            offset_y = y;
        }
    }
    return offset_y;
}

defender.start(
  function notify_player(rocks, paddle_y){
    nearest_rock_offset_y = get_nearest_rock_offset_y(rocks);
    var moves = [];
    // the nearest rock is announced when it's in position with x = 66 so a total number of 14 moves are necessary to block it
    for( var i = 0; i < 22; i++ ){
        if (nearest_rock_offset_y == 0){
            moves.push(0);
        }
        if (nearest_rock_offset_y > 0){
            moves.push(-1);
            nearest_rock_offset_y -=1;
        }
        if (nearest_rock_offset_y < 0){
            moves.push(+1);
            nearest_rock_offset_y +=1;
        }
    }
    return moves;
  }
);
