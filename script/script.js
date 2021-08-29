$('.small a').click(function (e) {
	if ($('.big img').attr('src') !== $(this).attr('href'))
		$('.big img').hide().attr('src', $(this).attr('href')).fadeIn(500)
	e.preventDefault()
})

$('.button').click(function (e) {
	$('.gallery').slideToggle(500)
	if ($('.button').text() == '-')
		$('.button').text('+')
	else $('.button').text('-')
})

$('.small a img').click(function (e) {
	$('.small a img').fadeTo(250, 1).css('border', 'none')
	$(this).fadeTo(250, .8).css('border', '1px solid #000')
})