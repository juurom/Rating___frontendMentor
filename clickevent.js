console.log("Connected");

$(".num").click(function(){
    $(".num").removeClass("on");
    $(".num").addClass("off");
    $(this).addClass("on");
    $(this).removeClass("off");
    var userrate=$(".on")[0].id;
    console.log(userrate);
    $(".userrate").text(userrate);

});

$(".submit").click(function(){
    $(".card").removeClass("hidden");
    $(this).addClass("hidden");
    console.log("show next card");
});



/* button click 색상 바꾸기: 참조 블로그
https://orange056.tistory.com/29   */