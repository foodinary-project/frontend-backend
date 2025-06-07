export default class NotFoundPage {
    async render() {
        return `
      <section class="notfound-container">
        <div class="notfound-content">
          <h1 class="notfound-title">404</h1>
          <p class="notfound-subtitle">Page Not Found</p>
          <p class="notfound-message">Sorry, the page you are looking for doesn't exist or has been moved.</p>
          <a href="#/" class="notfound-link">← Back to Home</a>
        </div>
      </section>
    `;
    }

    async afterRender() {
        // Optional animation or effects
    }
}
