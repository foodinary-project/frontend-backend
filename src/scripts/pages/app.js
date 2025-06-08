import routes from '../routes/routes';

class App {
  #content = null;

  constructor({ content }) {
    this.#content = content;
  }

  #getActivePath() {
    const hash = window.location.hash.slice(1); // hilangkan tanda '#'
    const [path] = hash.split("?");             // ambil hanya path tanpa query
    return path || "/";
  }

  async renderPage() {
    const url = this.#getActivePath();
    const page = routes[url] || routes["*"]; // fallback ke NotFoundPage

    this.#content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
