// pages and templates
import Home from '../pages/Home'
import Character from '../pages/Character'
import Error from '../pages/Error'
import Header from '../templates/Header'

// styles
import '../styles/style.scss'

// utilities
import getHash from '../utils/getHash'
import resolveRoutes from '../utils/resolveRoutes'

const routes = {
  '/': Home,
  '/:id': Character,
  '/contact': 'Contact'
}

// main function
const router = async () => {
  const app = null || document.querySelector('#app')

  app.innerHTML = Header()

  let hash = getHash()
  let route = await resolveRoutes(hash)
  console.log(route)

  // check if the route has a render function or display error 404
  let render = routes[route] ? routes[route] : Error
  app.innerHTML += await render()
}

export default router