const PrivacyPage = () => {
  return (
    <section className="narrow max-w w-full my-40">
      <h1 class="text-3xl font-semibold mb-4">Privacy & Cookie Policy</h1>
      <p>
        <strong>Last updated:</strong> 29 July 2025
      </p>

      <p class="mt-4">
        At <strong>Studio Maureen</strong>, I respect your privacy. This page
        explains what data is collected when you visit my website and how it’s
        used.
      </p>

      <h2 class="text-2xl font-semibold mt-8">1. What data is collected?</h2>
      <p class="mt-2">
        When you browse this website, some basic information is collected to
        help me understand how people interact with the site. This includes:
      </p>
      <ul class="list-disc list-inside mt-2 mb-4">
        <li>Which pages are visited</li>
        <li>What type of device or browser is used</li>
        <li>General location (based on IP, not exact address)</li>
      </ul>
      <p>
        This data is <strong>not</strong> personally identifiable and is only
        used to improve the site.
      </p>

      <h2 class="text-2xl font-semibold mt-8">2. Cookies</h2>
      <p class="mt-2">
        This website uses <strong>third-party cookies</strong> — small text
        files stored on your device — for the following purpose:
      </p>

      <h3 class="text-xl font-semibold mt-6">Google Analytics (GA4)</h3>
      <ul class="list-disc list-inside mt-2 mb-4">
        <li>Tracks anonymous usage statistics (like pageviews)</li>
        <li>Helps improve the website’s performance and design</li>
        <li>IP addresses are anonymized</li>
      </ul>
      <p>
        These cookies are only set <strong>after you accept</strong> the cookie
        banner.
      </p>

      <h2 class="text-2xl font-semibold mt-8">3. Your choices</h2>
      <p class="mt-2">You can:</p>
      <ul class="list-disc list-inside mt-2 mb-4">
        <li>Accept or decline cookies via the banner when you first visit</li>
        <li>Clear or block cookies in your browser at any time</li>
      </ul>

      <h2 class="text-2xl font-semibold mt-8">
        4. No personal data is sold or shared
      </h2>
      <p class="mt-2">
        I do not sell, rent, or share your personal information with third
        parties.
      </p>

      <h2 class="text-2xl font-semibold mt-8">5. Contact</h2>
      <p class="mt-2">
        If you have any questions about this privacy policy, feel free to reach
        out via the contact form or by email.
      </p>
    </section>
  );
};

export default PrivacyPage;
