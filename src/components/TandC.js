import React from "react";
const mail = "tejasjagadale25@gmail.com";
const siteName = "YourWebsite";
const siteUrl = "yourwebsite.com";
const lastUpdated = new Date().toLocaleDateString();
const TandC = () => {
  return (
    <div className="legal-root">
      <article>
        <h1>Terms of Service</h1>
        <p className="muted">Last updated: {lastUpdated}</p>

        <p>
          These Terms of Service ("Terms") govern your use of the website
          operated by <strong>{siteName}</strong> located at
          <a href={siteUrl}> {siteUrl}</a>. By accessing or using the site, you
          agree to these Terms.
        </p>

        <h2>1. Use of Content</h2>
        <p>
          All tutorials, articles, and resources are provided for educational
          and informational purposes only. You may use the content for personal
          learning but may not sell, redistribute, or republish our content
          without prior written permission.
        </p>

        <h2>2. Accounts</h2>
        <p>
          If the site allows account creation, you are responsible for
          maintaining the confidentiality of your account credentials and for
          all activities that occur under your account.
        </p>

        <h2>3. Prohibited Conduct</h2>
        <ul>
          <li>Using the site for unlawful activities.</li>
          <li>Attempting to gain unauthorized access to systems or data.</li>
          <li>
            Uploading malicious content or interfering with site operations.
          </li>
        </ul>

        <h2>4. Disclaimers & Limitation of Liability</h2>
        <p>
          Content is provided "as is" without warranties of any kind. We are not
          responsible for any direct, indirect, or consequential damages arising
          from your use of the site.
        </p>

        <h2>5. External Links</h2>
        <p>
          The site may include links to third-party websites. We are not
          responsible for the content or practices of those sites.
        </p>

        <h2>6. Termination</h2>
        <p>
          We may suspend or terminate access to the site at our discretion, with
          or without notice, for any violation of these Terms.
        </p>

        <h2>7. Governing Law</h2>
        <p>
          These Terms shall be governed by the laws of the jurisdiction where{" "}
          operates, unless otherwise required by applicable law.
        </p>

        <footer className="legal-footer">
          <p>
            If you have questions about these Terms, contact{" "}
            <a href={`mailto:${mail}`}>tejasjagadale25@gmail.com</a>.
          </p>
        </footer>
      </article>
    </div>
  );
};

export default TandC;
