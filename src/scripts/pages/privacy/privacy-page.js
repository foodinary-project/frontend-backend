export default class PrivacyPage {
  async render() {
    return `
      <div class="privacy-policy-page">
        <!-- Navigation placeholder -->
        <div id="navigation-placeholder"></div>
        
        <!-- Privacy Policy Content -->
        <div class="privacy-container">
          <div class="privacy-content">
            <!-- Header Section -->
            <div class="privacy-header">
              <h1 class="privacy-title">Privacy Policy</h1>
              <p class="privacy-subtitle">Effective Date: June 9, 2025</p>
              <div class="privacy-divider"></div>
            </div>

            <!-- Content Sections -->
            <div class="privacy-body">
              <section class="privacy-section">
                <h2 class="privacy-section-title">1. Information We Collect</h2>
                <p class="privacy-text">
                  At Foodinary, we collect information to provide better services to our users. We collect information in the following ways:
                </p>
                <ul class="privacy-list">
                  <li><strong>Personal Information:</strong> When you create an account, we collect your name, email address, and password.</li>
                  <li><strong>Recipe Data:</strong> Information about your food preferences, saved recipes, and search history.</li>
                  <li><strong>Usage Information:</strong> Details about how you use our app, including features accessed and time spent.</li>
                  <li><strong>Device Information:</strong> Information about your device, including device type, operating system, and browser type.</li>
                </ul>
              </section>

              <section class="privacy-section">
                <h2 class="privacy-section-title">2. How We Use Your Information</h2>
                <p class="privacy-text">
                  We use the information we collect to:
                </p>
                <ul class="privacy-list">
                  <li>Provide, maintain, and improve our recipe recommendation services</li>
                  <li>Personalize your experience with relevant recipe suggestions</li>
                  <li>Communicate with you about updates, features, and promotional content</li>
                  <li>Analyze usage patterns to enhance our platform</li>
                  <li>Ensure security and prevent fraud</li>
                </ul>
              </section>

              <section class="privacy-section">
                <h2 class="privacy-section-title">3. Information Sharing</h2>
                <p class="privacy-text">
                  We do not sell, trade, or otherwise transfer your personal information to outside parties except in the following circumstances:
                </p>
                <ul class="privacy-list">
                  <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our platform.</li>
                  <li><strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights and safety.</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger or acquisition, user information may be transferred as part of the business assets.</li>
                </ul>
              </section>

              <section class="privacy-section">
                <h2 class="privacy-section-title">4. Data Security</h2>
                <p class="privacy-text">
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul class="privacy-list">
                  <li>Encryption of sensitive data in transit and at rest</li>
                  <li>Regular security audits and assessments</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Secure data storage and backup procedures</li>
                </ul>
              </section>

              <section class="privacy-section">
                <h2 class="privacy-section-title">5. Your Rights and Choices</h2>
                <p class="privacy-text">
                  You have the following rights regarding your personal information:
                </p>
                <ul class="privacy-list">
                  <li><strong>Access:</strong> You can request access to the personal information we have about you.</li>
                  <li><strong>Update:</strong> You can update or correct your personal information through your account settings.</li>
                  <li><strong>Delete:</strong> You can request deletion of your account and personal information.</li>
                  <li><strong>Opt-out:</strong> You can opt out of receiving promotional communications from us.</li>
                </ul>
              </section>

              <section class="privacy-section">
                <h2 class="privacy-section-title">6. Cookies and Tracking</h2>
                <p class="privacy-text">
                  We use cookies and similar tracking technologies to enhance your experience on our platform. These technologies help us:
                </p>
                <ul class="privacy-list">
                  <li>Remember your preferences and settings</li>
                  <li>Analyze usage patterns and improve our services</li>
                  <li>Provide personalized content and recommendations</li>
                  <li>Ensure security and prevent fraud</li>
                </ul>
                <p class="privacy-text">
                  You can control cookie settings through your browser preferences.
                </p>
              </section>

              <section class="privacy-section">
                <h2 class="privacy-section-title">7. Third-Party Services</h2>
                <p class="privacy-text">
                  Our platform may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any personal information.
                </p>
              </section>

              <section class="privacy-section">
                <h2 class="privacy-section-title">8. Children's Privacy</h2>
                <p class="privacy-text">
                  Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it promptly.
                </p>
              </section>

              <section class="privacy-section">
                <h2 class="privacy-section-title">9. Changes to This Policy</h2>
                <p class="privacy-text">
                  We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page and updating the effective date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
                </p>
              </section>

              <section class="privacy-section">
                <h2 class="privacy-section-title">10. Contact Us</h2>
                <p class="privacy-text">
                  If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
                </p>
                <div class="privacy-contact">
                 <p><strong>Email:</strong> foodinary.project@gmail.com</p>
                  <p><strong>Address:</strong> Indonesia</p>
                </div>
              </section>
            </div>

            <!-- Footer Link -->
            <div class="privacy-footer">
              <p class="privacy-footer-text">
                For our Terms of Service, please visit 
                <a href="/#/terms" class="privacy-link">Terms of Service</a>
              </p>
            </div>
          </div>
        </div>

        <!-- Footer placeholder -->
        <div id="footer-placeholder"></div>
      </div>
    `;
  }
  async afterRender() {
    // Smooth scroll to sections
    this.initSmoothScroll();
  }

  initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }
}