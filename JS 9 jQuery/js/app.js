// TABS

$( function() {
    $( "#tabs" ).tabs();
} );


// RATING stars

$("#basic").rating({
        "click": function (e) {
            console.log(e);
            $("#basicInput").val(e.stars);
        }
    });

$("#half").rating({
"half": true,
    "click": function (e) {
        console.log(e);
        $("#halfInput").val(e.stars);
    }
});

$("#custom").rating({
    stars: 7,
    emptyStar: "far fa-arrow-alt-circle-left",
    halfStar: "far fa-angry",
    filledStar: "fas fa-arrow-alt-circle-right",
    color: "#ff3ef9",
    half: true,
    "click": function (e) {
        console.log(e);
        $("#customInput").val(e.stars);
    }
});


// PIE Chart

$(function() {
    $('.chart').easyPieChart({
        easing: 'easeOutBounce',
        onStep: function(from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });
    var chart = window.chart = $('.chart').data('easyPieChart');
    $('.js_update').on('click', function() {
        chart.update(Math.random()*200-100);
    });
});
	
$(function() {
    $(function() {
        $('.chart').easyPieChart();
    });
});

$(function() {
    $('.chart').easyPieChart({
        barColor:'#ef1e25',
        trackColor:'#f9f9f9',
        scaleColor:'#dfe0e0',
        scaleLength: 5,
        lineCap:'round',
        lineWidth: 3,
        trackWidth: undefined,
        size: 110,
        rotate: 0,
        animate: {
        duration: 1000,
        enabled:true
    },
    easing:function (x, t, b, c, d) {
        t = t / (d/2);
        if (t < 1) {
            return c / 2 * t * t + b;
        }
        return -c/2 * ((--t)*(t-2) - 1) + b;
        }
    });
});