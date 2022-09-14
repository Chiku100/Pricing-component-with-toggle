function toggle() {
    if ($(".circle").css("margin-left") == "18px") {
        $(".yearly-rates").toggle("viz");
        $(".monthly-rates").toggle("viz");
        $(".circle").css("margin-left", "0");
        $(".circle").css("margin-right", "18px");
    } else {
        $(".circle").css("margin-left", "18px");
        $(".circle").css("margin-right", "0");
        $(".yearly-rates").toggle("viz");
        $(".monthly-rates").toggle("viz");
    }
}
$(".toggle").click(function () {
    toggle();
})
$("body").keypress(function () {
    toggle();
});