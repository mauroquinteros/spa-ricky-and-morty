const resolveRoutes = (route) => {
  // this will work when the route will be an id or home path
  if(route.length <=3) {
    let validRoute = route === '/' ? route : '/:id'
    return validRoute
  }
  // when the route will be a section like about, contant or etc...
  return `/${route}`
}

export default resolveRoutes