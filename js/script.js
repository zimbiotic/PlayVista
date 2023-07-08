window.addEventListener('scroll', function() {
    var menuContainer = document.querySelector('.header-mid');
    var headVar = document.querySelector('.header-bot');
    var floatingVideo = document.querySelector('.hero');
    var scrollTop = menuContainer.getBoundingClientRect();
  
    if(scrollTop.bottom <= 0) {
      if(!headVar.classList.contains('floating-bar')){
        headVar.classList.add('floating-bar');
        floatingVideo.classList.add('floating'); 
        console.log('Element is visible in screen');
      }
      }

    else{
      headVar.classList.remove('floating-bar');
      floatingVideo.classList.remove('floating');
    }
  });