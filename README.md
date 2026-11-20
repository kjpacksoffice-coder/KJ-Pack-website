# KJ Packs — Static Website

A responsive, static B2B website for KJ Packs, built with plain HTML, CSS and JavaScript.
It is designed for GitHub Pages and does not require Node.js, PHP or a database.

## Important technical notes

- This is a static GitHub Pages website. There is no secure server-side admin panel.
- Edit company, product, industry, testimonial and SEO information in the files inside `content/`.
- Replace images in `assets/images/` while keeping the same filenames, or update the corresponding image path in the content files.
- Quote forms open WhatsApp with the completed enquiry. They do not store enquiries in a website database.
- The supplied Google Maps embed is used on the Contact page.
- The domain `www.kjpacks.com` is configured in `CNAME`. Configure the matching DNS records at your domain registrar and enable HTTPS in GitHub Pages.

## Publish on GitHub Pages

1. Create a GitHub repository, for example `kj-packs-website`.
2. Upload the complete contents of this folder to the repository root (not the folder itself).
3. Open **Settings → Pages**.
4. Select **Deploy from a branch**, choose `main` and `/ (root)`, then Save.
5. Configure the domain DNS:
   - `www` CNAME → `<your-github-username>.github.io`
   - For the apex domain `kjpacks.com`, use the four GitHub Pages A records listed in GitHub's current documentation.
6. In GitHub Pages, set the custom domain to `www.kjpacks.com` and enable **Enforce HTTPS** once available.

DNS values can change; use the values shown in your GitHub Pages settings rather than copying an old guide.

## Edit website content

| What to edit | File |
|---|---|
| Company name, contact, address, opening hours, map | `content/company.js` |
| Products, descriptions, images and construction | `content/products.js` |
| Industries and images | `content/industries.js` |
| Testimonials | `content/testimonials.js` |
| Navigation labels and links | `content/navigation.js` |
| Default SEO titles/descriptions/keywords | `content/seo.js` |
| Blog index entries | `content/blog.js` |
| Blog article body | Individual files in `blog/posts/` |
| Main design | `assets/css/styles.css` |
| Interactions and page rendering | `assets/js/site.js` |

## Add a product

1. Add a new product object to `content/products.js`.
2. Create a matching page in `products/` by copying an existing product page.
3. Change its product slug, title and canonical URL.
4. Add a square product image to `assets/images/products/`.
5. Add the page URL to `sitemap.xml`.

## Publish a blog

1. Copy `blog/posts/sample-article.html`.
2. Change the title, article content, SEO title, description, canonical URL and featured image.
3. Add the article object to `content/blog.js`.
4. Add the article URL to `sitemap.xml`.
5. Commit the changes to GitHub. GitHub Pages publishes the updated site.

## Replace placeholder imagery

The included SVGs are illustrative placeholders, not photographs of KJ Packs products, machinery or customers.
Replace them with genuine company photographs before launch. Keep product thumbnails square (1:1) and the hero banner at 1.5:1 for both desktop and mobile.

## SEO launch checklist

- Verify the domain in Google Search Console.
- Submit `https://www.kjpacks.com/sitemap.xml`.
- Add a real favicon and social sharing image.
- Replace all placeholder images and sample testimonials.
- Verify GST/MSME registration claims and business details before publishing.
- Add real customer testimonials only with permission.
- Check every page title, description, canonical URL and internal link.
- Test WhatsApp links, telephone links and the contact form on mobile.
- Do not claim certifications, waterproofing, food-grade compliance or export approvals unless supported by documentation.
