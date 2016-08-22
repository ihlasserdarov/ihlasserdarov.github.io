$(document).ready(function(){

	var pieChart = function() {
		$('.chart').easyPieChart({
			scaleColor: false,
			lineWidth: 10,
			lineCap: 'butt',
			barColor: '#17e7a4',
			trackColor:	"#000000",
			size: 160,
			animate: 1000
		});
	};

	$(".tab-menu a").click(function(event){
		event.preventDefault();
		var $this = $(this),
			pie = $this.data('pie');

		$(".tab-menu a.active").removeClass('active');
		$(this).addClass('active');
		var tab = $(this).attr('href');
		$('.tab').not(tab).css({'display':'none'});
		$(tab).fadeIn(700);

		if ( pie === 'yes' ) {
			setTimeout(function(){
				pieChart();
			}, 300);
		}
	});
});