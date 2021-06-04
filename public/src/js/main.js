(function () {
  const doc = document
  const rootEl = doc.documentElement
  const body = doc.body
  const lightSwitch = doc.getElementById('lights-toggle')
  /* global ScrollReveal */
  const sr = window.sr = ScrollReveal()

  rootEl.classList.remove('no-js')
  rootEl.classList.add('js')

  window.addEventListener('load', function () {
    body.classList.add('is-loaded')
    checkLights();
    
    setTimeout(()=> {
      alert("test");
    }, 500)
  })

  // Reveal animations
  function revealAnimations () {
    sr.reveal('.feature', {
      duration: 600,
      distance: '20px',
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      origin: 'right',
      viewFactor: 0.2
    })
  }

  if (body.classList.contains('has-animations')) {
    window.addEventListener('load', revealAnimations)
  }

  // Light switcher
  if (lightSwitch) {
    window.addEventListener('load', checkLights)
  }

  function checkLights () {
    
    let labelText = lightSwitch.parentNode.querySelector('.label-text')
    // if (lightSwitch.checked) {
    //   body.classList.remove('lights-off')

    // } else {
    //   body.classList.add('lights-off')
    //   if (labelText) {
    //     labelText.innerHTML = 'light'
    //   }
    // }
    if (labelText) {
      labelText.innerHTML = 'dark'
    }
  }
}())
