import React from "react";
import "../styles/article.css";

const HtmlPage = () => {
  return (
    <div className="article">
      <h1>HTML: The Foundation of Web Development</h1>

      <div className="ad-container">
        <p>Advertisement</p>
        <div id="article-top-ad">
          <p>AdSense Ad Placeholder</p>
        </div>
      </div>

      <p>
        HTML (HyperText Markup Language) is the standard markup language for
        creating web pages and web applications. It provides the structure of a
        webpage and is the foundation upon which all web technologies are built.
      </p>

      <h2>History of HTML</h2>
      <p>
        HTML was created by Tim Berners-Lee in 1991. The first version had only
        18 elements. Since then, HTML has evolved through several versions:
      </p>
      <ul>
        <li>HTML 2.0 (1995)</li>
        <li>HTML 3.2 (1997)</li>
        <li>HTML 4.01 (1999)</li>
        <li>XHTML (2000)</li>
        <li>HTML5 (2014 - current)</li>
      </ul>

      <h2>Basic HTML Document Structure</h2>
      <p>
        Every HTML document follows a basic structure that includes the
        following elements:
      </p>

      <pre>{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Free Web tutorials">
  <meta name="keywords" content="HTML, CSS, JavaScript">
  <meta name="author" content="John Doe">
  <title>Document Title</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- Page content goes here -->
  <script src="script.js"></script>
</body>
</html>`}</pre>

      <h2>HTML Elements and Tags</h2>
      <p>
        HTML elements are the building blocks of HTML pages, represented by
        tags:
      </p>

      <div className="code-example">
        <div className="code-example-title">Basic Elements</div>
        <pre>{`<p>This is a paragraph</p>
<a href="https://example.com">This is a link</a>
<img src="image.jpg" alt="Description">
<br> <!-- line break -->
<hr> <!-- horizontal rule -->`}</pre>
      </div>

      <h2>HTML Attributes</h2>
      <p>Attributes provide additional information about elements:</p>
      <ul>
        <li>
          <code>href</code> - Specifies the URL for links
        </li>
        <li>
          <code>src</code> - Specifies the source for images
        </li>
        <li>
          <code>alt</code> - Alternative text for images
        </li>
        <li>
          <code>class</code> - Specifies one or more class names
        </li>
        <li>
          <code>id</code> - Specifies a unique id
        </li>
        <li>
          <code>style</code> - Specifies inline CSS
        </li>
      </ul>

      <h2>HTML Headings and Paragraphs</h2>

      <div className="code-example">
        <div className="code-example-title">Headings</div>
        <pre>{`<h1>Main Heading (most important)</h1>
<h2>Subheading</h2>
<h3>Third-level heading</h3>
<h4>Fourth-level heading</h4>
<h5>Fifth-level heading</h5>
<h6>Sixth-level heading (least important)</h6>`}</pre>
      </div>

      <div className="code-example">
        <div className="code-example-title">Text Formatting</div>
        <pre>{`<p>This is normal text</p>
<p><b>This text is bold</b></p>
<p><strong>This text is important (semantic bold)</strong></p>
<p><i>This text is italic</i></p>
<p><em>This text is emphasized (semantic italic)</em></p>
<p><small>This is smaller text</small></p>
<p><mark>This text is marked</mark></p>
<p><del>This text is deleted</del></p>
<p><ins>This text is inserted</ins></p>
<p><sub>subscript</sub> and <sup>superscript</sup></p>`}</pre>
      </div>

      <h2>HTML Lists</h2>

      <div className="code-example">
        <div className="code-example-title">Unordered List</div>
        <pre>{`<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>`}</pre>
      </div>

      <div className="code-example">
        <div className="code-example-title">Ordered List</div>
        <pre>{`<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>`}</pre>
      </div>

      <div className="code-example">
        <div className="code-example-title">Description List</div>
        <pre>{`<dl>
  <dt>Coffee</dt>
  <dd>- black hot drink</dd>
  <dt>Milk</dt>
  <dd>- white cold drink</dd>
</dl>`}</pre>
      </div>

      <div className="ad-container">
        <p>Advertisement</p>
        <div id="article-middle-ad">
          <p>AdSense Ad Placeholder</p>
        </div>
      </div>

      <h2>HTML Tables</h2>
      <p>Tables are used to display data in rows and columns:</p>

      <pre>{`<table>
  <caption>Monthly Savings</caption>
  <tr>
    <th>Month</th>
    <th>Savings</th>
  </tr>
  <tr>
    <td>January</td>
    <td>$100</td>
  </tr>
  <tr>
    <td>February</td>
    <td>$80</td>
  </tr>
</table>`}</pre>

      <h3>Table Attributes</h3>
      <ul>
        <li>
          <code>border</code> - Defines table borders
        </li>
        <li>
          <code>cellpadding</code> - Space between cell content and borders
        </li>
        <li>
          <code>cellspacing</code> - Space between cells
        </li>
        <li>
          <code>colspan</code> - Number of columns a cell should span
        </li>
        <li>
          <code>rowspan</code> - Number of rows a cell should span
        </li>
      </ul>

      <h2>HTML Forms</h2>
      <p>Forms are used to collect user input:</p>

      <pre>{`<form action="/action_page.php" method="post">
  <fieldset>
    <legend>Personal information:</legend>
    
    <label for="fname">First name:</label>
    <input type="text" id="fname" name="fname"><br><br>
    
    <label for="lname">Last name:</label>
    <input type="text" id="lname" name="lname"><br><br>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email"><br><br>
    
    <label for="birthday">Birthday:</label>
    <input type="date" id="birthday" name="birthday"><br><br>
    
    <label for="gender">Gender:</label>
    <input type="radio" id="male" name="gender" value="male">
    <label for="male">Male</label>
    <input type="radio" id="female" name="gender" value="female">
    <label for="female">Female</label><br><br>
    
    <label for="cars">Choose a car:</label>
    <select id="cars" name="cars">
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="fiat">Fiat</option>
    </select><br><br>
    
    <label for="message">Message:</label><br>
    <textarea id="message" name="message" rows="4" cols="50"></textarea><br><br>
    
    <input type="checkbox" id="subscribe" name="subscribe" value="yes">
    <label for="subscribe">Subscribe to newsletter</label><br><br>
    
    <input type="submit" value="Submit">
    <input type="reset" value="Reset">
  </fieldset>
</form>`}</pre>

      <h3>Form Input Types</h3>
      <ul>
        <li>
          <code>text</code> - Single-line text input
        </li>
        <li>
          <code>password</code> - Password input (masked)
        </li>
        <li>
          <code>submit</code> - Submit button
        </li>
        <li>
          <code>radio</code> - Radio buttons
        </li>
        <li>
          <code>checkbox</code> - Checkboxes
        </li>
        <li>
          <code>button</code> - Clickable button
        </li>
        <li>
          <code>color</code> - Color picker
        </li>
        <li>
          <code>date</code> - Date picker
        </li>
        <li>
          <code>datetime-local</code> - Date and time picker
        </li>
        <li>
          <code>email</code> - Email address field
        </li>
        <li>
          <code>file</code> - File upload
        </li>
        <li>
          <code>hidden</code> - Hidden input field
        </li>
        <li>
          <code>image</code> - Image as submit button
        </li>
        <li>
          <code>month</code> - Month and year picker
        </li>
        <li>
          <code>number</code> - Numeric input
        </li>
        <li>
          <code>range</code> - Slider control
        </li>
        <li>
          <code>search</code> - Search field
        </li>
        <li>
          <code>tel</code> - Telephone number
        </li>
        <li>
          <code>time</code> - Time picker
        </li>
        <li>
          <code>url</code> - URL field
        </li>
        <li>
          <code>week</code> - Week picker
        </li>
      </ul>

      <div className="ad-container">
        <p>Advertisement</p>
        <div id="article-middle-ad-2">
          <p>AdSense Ad Placeholder</p>
        </div>
      </div>

      <h2>HTML5 Semantic Elements</h2>
      <p>
        HTML5 introduced semantic elements that clearly describe their meaning:
      </p>

      <pre>{`<header>
  <h1>Website Title</h1>
  <nav>
    <a href="/html/">HTML</a> |
    <a href="/css/">CSS</a> |
    <a href="/js/">JavaScript</a>
  </nav>
</header>

<section>
  <h2>Section Heading</h2>
  <article>
    <h3>Article Heading</h3>
    <p>Article content...</p>
  </article>
  <aside>
    <p>Related content...</p>
  </aside>
</section>

<footer>
  <p>Author: John Doe</p>
  <p><a href="mailto:john@example.com">john@example.com</a></p>
</footer>`}</pre>

      <h3>Key Semantic Elements</h3>
      <ul>
        <li>
          <code>&lt;header&gt;</code> - Introductory content
        </li>
        <li>
          <code>&lt;nav&gt;</code> - Navigation links
        </li>
        <li>
          <code>&lt;main&gt;</code> - Main content
        </li>
        <li>
          <code>&lt;section&gt;</code> - Thematic grouping
        </li>
        <li>
          <code>&lt;article&gt;</code> - Independent content
        </li>
        <li>
          <code>&lt;aside&gt;</code> - Sidebar content
        </li>
        <li>
          <code>&lt;footer&gt;</code> - Footer content
        </li>
        <li>
          <code>&lt;figure&gt;</code> - Self-contained content
        </li>
        <li>
          <code>&lt;figcaption&gt;</code> - Caption for figure
        </li>
        <li>
          <code>&lt;mark&gt;</code> - Highlighted text
        </li>
        <li>
          <code>&lt;time&gt;</code> - Date/time
        </li>
      </ul>

      <h2>HTML Multimedia</h2>
      <p>HTML supports various multimedia elements:</p>

      <div className="code-example">
        <div className="code-example-title">Images</div>
        <pre>{`<img src="image.jpg" alt="Description" width="500" height="600">
<picture>
  <source media="(min-width: 650px)" srcset="img_pink_flowers.jpg">
  <source media="(min-width: 465px)" srcset="img_white_flower.jpg">
  <img src="img_orange_flowers.jpg" alt="Flowers">
</picture>`}</pre>
      </div>

      <div className="code-example">
        <div className="code-example-title">Audio</div>
        <pre>{`<audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>`}</pre>
      </div>

      <div className="code-example">
        <div className="code-example-title">Video</div>
        <pre>{`<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>`}</pre>
      </div>

      <h2>HTML Graphics</h2>

      <div className="code-example">
        <div className="code-example-title">Canvas</div>
        <pre>{`<canvas id="myCanvas" width="200" height="100"></canvas>
<script>
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(0, 0, 150, 75);
</script>`}</pre>
      </div>

      <div className="code-example">
        <div className="code-example-title">SVG</div>
        <pre>{`<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>`}</pre>
      </div>

      <div className="ad-container">
        <p>Advertisement</p>
        <div id="article-bottom-ad">
          <p>AdSense Ad Placeholder</p>
        </div>
      </div>

      <h2>HTML Meta Tags for SEO</h2>
      <p>Proper meta tags help search engines understand your content:</p>
      <pre>{`<!-- Primary Meta Tags -->
<title>Page Title - Important for SEO</title>
<meta name="description" content="A brief description of your page">
<meta name="keywords" content="HTML, CSS, JavaScript">
<meta name="author" content="Your Name">

<!-- Open Graph / Facebook Meta Tags -->
<meta property="og:title" content="Your Page Title">
<meta property="og:description" content="Description for social sharing">
<meta property="og:image" content="image.jpg">
<meta property="og:url" content="https://yourwebsite.com/page">

<!-- Twitter Meta Tags -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Your Page Title">
<meta name="twitter:description" content="Description for Twitter">
<meta name="twitter:image" content="image.jpg">`}</pre>

      <h2>HTML Accessibility (a11y)</h2>
      <p>Make your content accessible to all users:</p>
      <div className="code-example">
        <div className="code-example-title">Accessibility Practices</div>
        <pre>{`<!-- Use proper heading hierarchy -->
<h1>Main Heading</h1>
<h2>Section Heading</h2>
<h3>Subsection Heading</h3>

<!-- Add ARIA attributes when needed -->
<button aria-label="Close menu">X</button>

<!-- Semantic HTML helps screen readers -->
<nav aria-label="Main navigation">...</nav>

<!-- Provide text alternatives -->
<img src="chart.jpg" alt="Sales growth chart showing 20% increase">

<!-- Ensure sufficient color contrast -->
<p style="color: #333; background: #fff">Readable text</p>

<!-- Make interactive elements keyboard-navigable -->
<a href="#content" class="skip-link">Skip to content</a>`}</pre>
      </div>

      <h2>HTML Data Attributes</h2>
      <p>Store extra information in HTML elements:</p>
      <pre>{`<div 
  id="user-card" 
  data-user-id="12345" 
  data-role="admin" 
  data-signup-date="2023-01-15"
>
  User Information
</div>

<script>
  const userCard = document.getElementById('user-card');
  console.log(userCard.dataset.userId); // "12345"
  console.log(userCard.dataset.role); // "admin"
  
  // You can also modify data attributes
  userCard.dataset.lastActive = new Date().toISOString();
</script>`}</pre>

      <h2>HTML Internationalization (i18n)</h2>
      <p>Prepare your content for multiple languages:</p>
      <pre>{`<!-- Specify language -->
<html lang="en">
<!-- Or for specific elements -->
<p lang="es">Hola Mundo</p>

<!-- Bidirectional text -->
<p dir="rtl">This text goes right-to-left</p>

<!-- Language-specific date formats -->
<time datetime="2023-12-25">December 25, 2023</time>

<!-- Translation ready markup -->
<div data-i18n="welcome_message">Welcome to our site!</div>

<!-- Language switcher -->
<select id="language-switcher">
  <option value="en">English</option>
  <option value="es">Español</option>
  <option value="fr">Français</option>
</select>`}</pre>

<h2>HTML Microdata for Rich Snippets</h2>
<p>Help search engines understand your content better:</p>
<pre>{`<div itemscope itemtype="https://schema.org/Person">
  <h1 itemprop="name">John Doe</h1>
  <p itemprop="jobTitle">Web Developer</p>
  <p>Phone: <span itemprop="telephone">123-456-7890</span></p>
  <p>Email: <span itemprop="email">john@example.com</span></p>
</div>

<div itemscope itemtype="https://schema.org/Product">
  <h2 itemprop="name">Smartphone X200</h2>
  <p itemprop="description">The latest smartphone with advanced features</p>
  <div itemprop="offers" itemscope itemtype="https://schema.org/Offer">
    <span itemprop="priceCurrency" content="USD">$</span>
    <span itemprop="price" content="599.00">599.00</span>
  </div>
</div>`}</pre>

<h2>HTML Performance Optimization</h2>
<p>Techniques to make your HTML load faster:</p>
<div className="code-example">
  <div className="code-example-title">Performance Tips</div>
  <pre>{`<!-- Defer non-critical resources -->
<link rel="stylesheet" href="styles.css" media="print" onload="this.media='all'">

<!-- Lazy load images -->
<img src="placeholder.jpg" data-src="real-image.jpg" loading="lazy" alt="..." class="lazyload">

<!-- Preload important resources -->
<link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin>

<!-- Use modern image formats -->
<picture>
  <source type="image/webp" srcset="image.webp">
  <source type="image/jpeg" srcset="image.jpg">
  <img src="image.jpg" alt="...">
</picture>

<!-- Minimize DOM size -->
<!-- Avoid deeply nested elements -->

<!-- Inline critical CSS -->
<style>
  /* Critical CSS here */
</style>`}</pre>
</div>

<h2>HTML for Email Development</h2>
<p>Special considerations for HTML emails:</p>
<pre>{`<!-- Use table-based layouts -->
<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td align="center">
      <!-- Email content goes here -->
    </td>
  </tr>
</table>

<!-- Inline all CSS -->
<p style="font-family: Arial, sans-serif; font-size: 16px; color: #333333;">

<!-- Use web-safe fonts -->
<p style="font-family: Arial, Helvetica, sans-serif;">

<!-- Provide fallbacks for background images -->
<td background="image.jpg" bgcolor="#ffffff" style="background: url('image.jpg') top center / cover;">

<!-- Include a plain text version -->
<!-- Set the email width to 600-800px -->
<!-- Test across multiple email clients -->`}</pre>

      <h2>HTML APIs</h2>
      <p>HTML5 introduced several JavaScript APIs:</p>
      <ul>
        <li>
          <strong>Geolocation API</strong> - Gets the geographical position
        </li>
        <li>
          <strong>Drag and Drop API</strong> - Makes elements draggable
        </li>
        <li>
          <strong>Web Storage API</strong> - Stores data locally
        </li>
        <li>
          <strong>Web Workers API</strong> - Runs scripts in background
        </li>
        <li>
          <strong>SSE API</strong> - Server-Sent Events
        </li>
      </ul>

      <h2>HTML Best Practices</h2>
      <ol>
        <li>
          Always declare <code>&lt;!DOCTYPE html&gt;</code>
        </li>
        <li>Use semantic HTML5 elements</li>
        <li>Include proper document structure</li>
        <li>
          Always include <code>alt</code> attributes for images
        </li>
        <li>Close all HTML tags properly</li>
        <li>Use lowercase for element names and attributes</li>
        <li>Quote all attribute values</li>
        <li>Validate your HTML</li>
        <li>Use comments to explain your code</li>
        <li>Keep your code well-structured and indented</li>
      </ol>

      <h2>Conclusion</h2>
      <p>
        HTML is the fundamental building block of the web. While it's relatively
        simple to learn the basics, mastering HTML and understanding how it
        interacts with CSS and JavaScript is essential for any web developer.
        HTML5 has introduced many powerful features that make it easier to
        create rich, interactive web applications.
      </p>

      <p>
        To continue your learning journey, explore CSS for styling your HTML
        documents and JavaScript for adding interactivity to your web pages.
      </p>
    </div>
  );
};

export default HtmlPage;
