import getData from '../utils/getData'
const Home = async () => {
  const {results} = await getData()
  const view = `
    <section class="character">
      ${results.map(character => `
        <article class="character-item">
          <a href="#/${character.id}/">
            <img src="${character.image}" alt="${character.name}">
            <h2 class="">${character.name}</h2>
          </a>
        </article>
      `).join('')}
    </section>
  `
  return view
}

export default Home