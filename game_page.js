var player1_score = 0;
var player2_score = 0;
var player1_name = localStorage.getItem("player1_name");
var player2_name = localStorage.getItem("player2_name");

document.getElementById("player1_name").innerHTML = player1_name + " : " ;
document.getElementById("player2_name").innerHTML = player2_name + " : " ;

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML ="question turn-" + player1_name;
document.getElementById("player_answer").innerHTML ="answer turn-" + player2_name;

function send(){
    get_number1 = document.getElementById("number1").value;
    get_number2 = document.getElementById("number2").value;
    actual_answer = parseInt(get_number1) * parseInt(get_number2);

    a = "<h4 id = 'word_display'>Q." + get_number1 +"+"+ get_number2 + "</h4>";
    b = "<br> answer: <input type = 'text' id = 'answer_box'>";
    c = "<br> <button onclick = 'check()' class ='btn btn-info'> check </button>";

    row = a + b + c;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

question_turn = "player_1";
answer_turn = "player_2";

function check(){
    get_answer = document.getElementById("answer_box").value;
    answer = parseInt(get_answer);
    if(answer==actual_answer) {
        if(answer_turn=="player_1"){
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }

    if(answer!=actual_answer) {
        if(answer_turn=="player_1"){
            player1_score = player1_score - 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else {
            player2_score = player2_score - 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }

    if(answer_turn=="player_1") {
        answer_turn = "player_2";
        document.getElementById("player_answer").innerHTML ="answer turn-" + player2_name;
    }
    else{
        answer_turn = "player_1";
        document.getElementById("player_answer").innerHTML ="answer turn-" + player1_name;
    }

    if(question_turn=="player_1") {
        question_turn = "player_2";
        document.getElementById("player_question").innerHTML ="question turn-" + player2_name;
    }
    else{
        question_turn = "player_1";
        document.getElementById("player_question").innerHTML ="question turn-" + player1_name;
    }
    document.getElementById("output").innerHTML = "";
}