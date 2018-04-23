window.onload = function () {
  (function () {
    var animenuToggle = document.querySelector('.animenu__toggle')
    var animenuNav = document.querySelector('.animenu__nav')
    var hasClass = function (elem, className) {
      return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ')
    }
    var toggleClass = function (elem, className) {
      var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' '
      if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0) {
          newClass = newClass.replace(' ' + className + ' ', ' ')
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '')
      } else {
        elem.className += ' ' + className
      }
    }
    var animenuToggleNav = function () {
      toggleClass(animenuToggle, 'animenu__toggle--active')
      toggleClass(animenuNav, 'animenu__nav--open')
    }
    if (!animenuToggle.addEventListener) {
      animenuToggle.attachEvent('onclick', animenuToggleNav)
    } else {
      animenuToggle.addEventListener('click', animenuToggleNav)
    }
  })()
}
