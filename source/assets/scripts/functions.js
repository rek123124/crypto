const isMobile = {
   Android() {
      return navigator.userAgent.match(/Android/i)
   },
   BlackBerry() {
      return navigator.userAgent.match(/BlackBerry/i)
   },
   IOS() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i)
   },
   Opera() {
      return navigator.userAgent.match(/Opera Mini/i)
   },
   Windows() {
      return navigator.userAgent.match(/IEMobile/i)
   },
   any() {
      return (
         isMobile.Android() ||
         isMobile.BlackBerry() ||
         isMobile.IOS() ||
         isMobile.Opera() ||
         isMobile.Windows())
   }
}

function removeClasses(selector, className) {
   selector.forEach((item) => {
      item.classList.remove(className)
   })
}
function _slideUp(target, duration = 500) {
   if (!target.classList.contains('_slide')) {
      target.classList.add('_slide')
      target.style.transitionProperty = 'height, margin, padding'
      target.style.transitionDuration = duration + 'ms'
      target.style.height = target.offsetHeight + 'px'
      target.offsetHeight
      target.style.overflow = 'hidden'
      target.style.height = 0
      target.style.paddingTop = 0
      target.style.paddingBottom = 0
      target.style.marginTop = 0
      target.style.marginBottom = 0
      window.setTimeout(() => {
         target.hidden = true
         target.style.removeProperty('height')
         target.style.removeProperty('padding-top')
         target.style.removeProperty('padding-bottom')
         target.style.removeProperty('margin-top')
         target.style.removeProperty('margin-bottom')
         target.style.removeProperty('overflow')
         target.style.removeProperty('transition-duration')
         target.style.removeProperty('transition-property')
         target.classList.remove('_slide')
      }, duration)
   }
}
function _slideDown(target, duration = 500) {
   if (!target.classList.contains('_slide')) {
      target.classList.add('_slide')
      if (target.hidden) {
         target.hidden = false
      }
      let height = target.offsetHeight
      target.style.overflow = 'hidden'
      target.style.height = 0
      target.style.paddingTop = 0
      target.style.paddingBottom = 0
      target.style.marginTop = 0
      target.style.marginBottom = 0
      target.offsetHeight
      target.style.transitionProperty = 'height, margin, padding'
      target.style.transitionDuration = duration + 'ms'
      target.style.height = height + 'px'
      target.style.removeProperty('padding-top')
      target.style.removeProperty('padding-bottom')
      target.style.removeProperty('margin-top')
      target.style.removeProperty('margin-bottom')
      window.setTimeout(() => {
         target.style.removeProperty('height')
         target.style.removeProperty('overflow')
         target.style.removeProperty('transition-duration')
         target.style.removeProperty('transition-property')
         target.classList.remove('_slide')
      }, duration)
   }
}
function _slideToggle(target, duration = 500) {
   if (target.hidden) {
      return _slideDown(target, duration)
   } else {
      return _slideUp(target, duration)
   }
}