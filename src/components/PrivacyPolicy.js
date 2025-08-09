import React from "react";

export default function LegalPages({
  siteName = "YourWebsite",
  siteUrl = "yourwebsite.com",
  contactEmail = "tejasjagadale25@gmail.com"
}) {
  const lastUpdated = new Date().toLocaleDateString();

  return (
    <div className="legal-root">
      <article>
        <h1>Privacy Policy</h1>
        <p className="muted">Last updated: {lastUpdated}</p>

        <p>
          Welcome to <strong>{siteName}</strong> ("we", "us", "our"). This
          Privacy Policy explains how we collect, use, disclose, and safeguard
          your information when you visit <a href={siteUrl}>{siteUrl}</a>.
        </p>

        <h2>1. Information We Collect</h2>
        <ul>
          <li>
            <strong>Personal Information:</strong> information you provide
            directly such as name, email address, and any other details
            submitted through contact forms or account registration.
          </li>
          <li>
            <strong>Non-Personal Information:</strong> usage data, browser type,
            device information, IP address, and cookies.
          </li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We may use information to:</p>
        <ul>
          <li>
            Provide, maintain and improve the website and educational content.
          </li>
          <li>Respond to your requests and communicate important updates.</li>
          <li>Analyze usage and trends to optimize the site.</li>
        </ul>

        <h2>3. Cookies & Tracking</h2>
        <p>
          We use cookies and similar tracking technologies to enhance your
          experience. You can disable cookies in your browser settings, but some
          functionality may be limited.
        </p>

        <h2>4. Third-Party Services</h2>
        <p>
          We may use third-party services (e.g., analytics, hosting,
          advertising) that have their own privacy policies. We encourage you to
          review those policies.
        </p>

        <h2>5. Data Security</h2>
        <p>
          We implement reasonable measures to protect your information. However,
          no method of transmission or storage is 100% secure — absolute
          security cannot be guaranteed.
        </p>

        <h2>6. Your Rights</h2>
        <p>
          Depending on your jurisdiction, you may have the right to access,
          correct, or delete your personal information. To exercise these
          rights, contact us at{" "}
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
        </p>

        <h2>7. Changes to This Policy</h2>
        <p>
          We may update this policy from time to time. We will post the updated
          policy on this page with a revised "Last updated" date.
        </p>

        <footer className="legal-footer">
          <p>
            If you have questions about this Privacy Policy, contact us at{" "}
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
          </p>
        </footer>
      </article>
    </div>
  );
}
