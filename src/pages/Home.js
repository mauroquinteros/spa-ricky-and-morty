import getData from '../utils/getData'
const Home = async () => {
  const {results} = await getData()
  const view = `
    <section class="list">
      <div class="u-wrapper">
        <div class="list-content">
        ${results.map(character => `
          <article class="list-item">
            <a href="#/${character.id}/" class="list-item-image">
              <img src="${character.image}" alt="${character.name}">
            </a>
            <h2 class="list-item-title">${character.name}</h2>
          </article>
        `).join('')}
        </div>
      </div>
    </section>
  `
  return view
}

export default Home