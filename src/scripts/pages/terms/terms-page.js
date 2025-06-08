export default class TermsPage {
  async render() {
    return `
      <div class="terms-of-service-page">
        <!-- Navigation placeholder -->
        <div id="navigation-placeholder"></div>
        
        <!-- Terms of Service Content -->
        <div class="terms-container">
          <div class="terms-content">
            <!-- Header Section -->
            <div class="terms-header">
              <h1 class="terms-title">Terms of Service</h1>
              <p class="terms-subtitle">Effective Date: June 9, 2025</p>
              <div class="terms-divider"></div>
            </div>

            <!-- Content Sections -->
            <div class="terms-body">
              <section class="terms-section">
                <h2 class="terms-section-title">1. Acceptance of Terms</h2>
                <p class="terms-text">
                  By accessing and using Foodinary ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section class="terms-section">
                <h2 class="terms-section-title">2. Description of Service</h2>
                <p class="terms-text">
                  Foodinary is a digital platform that provides recipe recommendations, food discovery services, and culinary content. Our services include:
                </p>
                <ul class="terms-list">
                  <li>Recipe search and discovery features</li>
                  <li>Personalized food recommendations based on preferences and dietary restrictions</li>
                  <li>User account management and profile customization</li>
                  <li>Recipe saving and organization tools</li>
                  <li>Community features and content sharing</li>
                </ul>
              </section>

              <section class="terms-section">
                <h2 class="terms-section-title">3. User Accounts and Registration</h2>
                <p class="terms-text">
                  To access certain features of our Service, you may be required to create an account. When creating an account, you agree to:
                </p>
                <ul class="terms-list">
                  <li>Provide accurate, current, and complete information during registration</li>
                  <li>Maintain and promptly update your account information</li>
                  <li>Maintain the security of your password and accept responsibility for all activities under your account</li>
                  <li>Immediately notify us of any unauthorized use of your account</li>
                </ul>
              </section>

              <section class="terms-section">
                <h2 class="terms-section-title">4. User Conduct and Prohibited Activities</h2>
                <p class="terms-text">
                  You agree not to use the Service to:
                </p>
                <ul class="terms-list">
                  <li>Upload, post, or transmit any content that is illegal, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable</li>
                  <li>Impersonate any person or entity or falsely state your affiliation with a person or entity</li>
                  <li>Interfere with or disrupt the Service or servers or networks connected to the Service</li>
                  <li>Attempt to gain unauthorized access to any portion of the Service</li>
                  <li>Use the Service for any commercial purpose without our express written consent</li>
                  <li>Violate any applicable local, state, national, or international law</li>
                </ul>
              </section>

              <section class="terms-section">
                <h2 class="terms-section-title">5. Content and Intellectual Property</h2>
                <p class="terms-text">
                  The Service and its original content, features, and functionality are and will remain the exclusive property of Foodinary and its licensors. The Service is protected by copyright, trademark, and other laws.
                </p>
                <h3 class="terms-subsection-title">User-Generated Content</h3>
                <p class="terms-text">
                  By posting content on our Service, you grant us a non-exclusive, worldwide, royalty-free license to use, modify, publicly display, and distribute such content in connection with the Service.
                </p>
              </section>

              <section class="terms-section">
                <h2 class="terms-section-title">6. Privacy Policy</h2>
                <p class="terms-text">
                  Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use our Service. By using our Service, you agree to the collection and use of information in accordance with our Privacy Policy.
                </p>
              </section>

              <section class="terms-section">
                <h2 class="terms-section-title">7. Disclaimers and Warranties</h2>
                <p class="terms-text">
                  The information on this Service is provided on an "as is" basis. To the fullest extent permitted by law, this Company:
                </p>
                <ul class="terms-list">
                  <li>Excludes all representations and warranties relating to this Service and its contents</li>
                  <li>Makes no warranties regarding the accuracy, completeness, or nutritional information of recipes</li>
                  <li>Does not guarantee that the Service will be available, uninterrupted, or error-free</li>
                  <li>Is not responsible for any food allergies, dietary restrictions, or health issues that may result from following recipes</li>
                </ul>
              </section>

              <section class="terms-section">
                <h2 class="terms-section-title">8. Limitation of Liability</h2>
                <p class="terms-text">
                  In no event shall Foodinary, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.
                </p>
              </section>

              <section class="terms-section">
                <h2 class="terms-section-title">9. Indemnification</h2>
                <p class="terms-text">
                  You agree to defend, indemnify, and hold harmless Foodinary and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees).
                </p>
              </section>

              <section class="terms-section">
                <h2 class="terms-section-title">10. Termination</h2>
                <p class="terms-text">
                  We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever including but not limited to a breach of the Terms.
                </p>
                <p class="terms-text">
                  If you wish to terminate your account, you may simply discontinue using the Service or contact us to request account deletion.
                </p>
              </section>

              <section class="terms-section">
                <h2 class="terms-section-title">11. Governing Law</h2>
                <p class="terms-text">
                  These Terms shall be interpreted and governed by the laws of the State of California, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
                </p>
              </section>

              <section class="terms-section">
                <h2 class="terms-section-title">12. Changes to Terms</h2>
                <p class="terms-text">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                </p>
              </section>

              <section class="terms-section">
                <h2 class="terms-section-title">13. Contact Information</h2>
                <p class="terms-text">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div class="terms-contact">
                  <p><strong>Email:</strong> foodinary.project@gmail.com</p>
                  <p><strong>Address:</strong> Indonesia</p>              
                </div>
              </section>
            </div>

            <!-- Footer Link -->
            <div class="terms-footer">
              <p class="terms-footer-text">
                For our Privacy Policy, please visit 
                <a href="/#/privacy" class="terms-link">Privacy Policy</a>
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