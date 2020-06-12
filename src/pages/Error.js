import errorImage from '../../public/error.svg'
const Error = () => {
  const view = `
    <div class=u-wrapper>
      <div class="error">
        <img src="${errorImage}">
        <h2>Error 404</h2>
      </div>
    </div>
  `
  return view
}

export default Error