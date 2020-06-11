// location.hash return the value followed of #, for instance: "#/1/"
const getHash = () => location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/'

export default getHash