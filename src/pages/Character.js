import getHash from '../utils/getHash'
import getData from '../utils/getData'

const Character = async () => {
  const id = getHash()
  const character = await getData(id)
  const view = `
    <section class="character">
      <div class="u-wrapper">
        <div class="character-content">
          <div class="character-card">
            <figure class="character-image">
              <img src="${character.image}" alt="${character.name}">
            </figure>
            <h2>${character.name}</h2>
          </div>
          <div class="character-card">
            <h3>Episodes: <span>${character.episode.length}</span></h3>
            <h3>Status:  <span>${character.status}</span></h3>
            <h3>Species: <span>${character.species}</span></h3>
            <h3>Gender: <span>${character.gender}</span></h3>
            <h3>Origin: <span>${character.origin.name}</span></h3>
            <h3>Last Location:  <span>${character.origin.name}</span></h3>
          </div>
        </div>
      </div>
    </section>
  `
  return view
}

export default Character