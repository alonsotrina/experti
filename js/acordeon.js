const dropdownlink = document.querySelectorAll('.dropdownlink');

for (var i = 0; i < dropdownlink.length; i++) {

    dropdownlink[i].addEventListener('click', function () {


        for (var i = 0; i < dropdownlink.length; i++) {
        	dropdownlink[i].classList.remove('active');
        }	



        const submenuItems = document.querySelectorAll('.submenuItems');

        for (var i = 0; i < submenuItems.length; i++) {
        	submenuItems[i].style.height = 0 + 'px';
        }

        const submenu = this.nextElementSibling;
        submenuHeight = this.nextElementSibling.clientHeight;
        const height = submenu.querySelector('.submenuItems div').clientHeight;

        if (submenuHeight == 0) {
        	submenu.style.height = height + 'px';
        	this.classList.add('active');
        }else {
        	submenu.style.height = 0 + 'px';
        	this.classList.remove('active');
        }
    });
}