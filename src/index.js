import router from './routes'

// call the callback when the DOM is loaded
window.addEventListener('DOMContentLoaded', router)
// call the callback when the hash of url changed
window.addEventListener('hashchange', router)