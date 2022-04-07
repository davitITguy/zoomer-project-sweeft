const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

const img = document.querySelectorAll('#imgs img')

let idx = 1

let interval = setInterval(run, 2000)

function run() {
    idx++
    changeImage()
}

function changeImage() {
    if(idx > img.length - 1) {
        idx = img.length - 1

        imgs.style.transition = 'all, linear, 1s';
        imgs.style.transform = `translateX(${-idx * 500}px)`

        setTimeout(function() {
            idx = 1;  
            imgs.style.transition = ''; 
            imgs.style.transform = `translateX(${-500}px)`
        },0)
    } 
    else if(idx < 0){
        idx = 0

        imgs.style.transition = 'all, linear, 1s';
        imgs.style.transform = `translateX(${-idx * 500}px)`

        setTimeout(function() {
            idx = img.length - 2;  
            imgs.style.transition = ''; 
            imgs.style.transform = `translateX(${-idx * 500}px)`
        },0)
    }
    else{
        imgs.style.transition = 'all, linear, 1s';
        imgs.style.transform = `translateX(${-idx * 500}px)`
    }
    
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

rightBtn.addEventListener('click', () => {
    idx++
    changeImage()
    resetInterval()
})

leftBtn.addEventListener('click', () => {
    idx--
    changeImage()
    resetInterval()
})

// ------------------------------
jQuery(document).ready(function ($) {

  $('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  });
  
	var slideCount = $('#slider ul li').length;
	var slideWidth = $('#slider ul li').width();
	var slideHeight = $('#slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	$('#slider').css({ width: slideWidth, height: slideHeight });
	
	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

});    
// -------------------------------------