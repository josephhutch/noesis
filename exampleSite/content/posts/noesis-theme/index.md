---
title: "Noesis: A Clean Theme for Hugo"
date: 2018-05-02T14:33:42-04:00
description: "Noesis is a Hugo theme for blogs that emphasizes motion, material, and depth while keeping the focus on writing and photography."
categories: ["Web"]
displayInMenu: false
displayInList: true
draft: false
resources:
- name: featuredImage
  src: "noesis-macbook.png"
  params:
    description: "A MacBook showing a website using the noesis theme"
---

Today's web is a frustrating mess of pop-ups, intrusive banners, and ads obstructing the content. I designed noesis to be free of all these distractions and simply highlight the content. The result feels more like a native application than a website. Interactions are intuitive, content is the focus, and distractions are omitted.

Noesis is a Hugo theme for blogs that elevates good writing and photography. If you use Hugo for your blog, give noesis a try.

## Installation
In the root directory of your Hugo Project, clone the noesis repo into the themes directory.

```shell session
git clone https://github.com/josephhutch/noesis.git themes/noesis
```

## Usage

### Website configuration

Add the following parameters to your `hugo.toml` file if they are not present already.

```toml
baseURL = "https://yourwebsitenamegoeshere.com/"
locale = "en-US"
title = "Your site title"
theme = "noesis"

[pagination]
  pagerSize = 10

[services]
  [services.googleAnalytics]
    id = "Your Google Analytics measurement ID - optional"
  [services.disqus]
    shortname = "Your shortname for Disqus - optional"

[params]
  brand = "The name that is displayed in the top left of the website - optional, title is fallback"
  description = "The website's description"
  mainSections = ["posts"]

  [params.appearance]
    backgroundImage = "Path, within the 'assets' folder, of the image used for the page background - optional"

  [params.profile]
    name = "Name shown in the home page hero - optional"
    jobTitle = "Short professional role shown in the home page hero - optional"
    location = "Short location shown in the home page hero - optional"
    headshotImage = "Path, within the 'assets' folder, of the image used for the home page header - optional"
    headshotAlt = "Alt text for the headshotImage - should be used with headshotImage"

  [params.navigation]
    rssInMenu = true

  [params.socials]
    email = "Email address or mailto: URL - optional"
    github = "URL to your GitHub account - optional"
    instagram = "URL to your Instagram account - optional"
    linkedin = "URL to your LinkedIn account - optional"
    x = "URL to your X account - optional"
    youtube = "URL to your YouTube account - optional"

  [params.author]
    name = "Author name for RSS metadata - optional"
    email = "Author email for RSS metadata - optional"

[markup]
  [markup.highlight]
    style = "evergarden"
```

The `title` parameter is used for each page title, the title that search engines display in search results. If you would like the title shown in the top left of the page to be different from the page title, use the `brand` parameter. For instance, the title parameter for my site is `Joe Hutchinson` but the brand parameter is set to `joehutch`.

Find your `locale` [here](https://www.metamodpro.com/browser-language-codes).

The `appearance.backgroundImage` parameter gives you the ability to customize the look of your site further. Noesis is designed to look best with a subtle tiling image for the background. If no background image is specified, the background will be a solid gray color.

Noesis is tuned against Hugo's `evergarden` Chroma style. If you want to change the highlighter theme you can specify a different one from [this list](https://xyproto.github.io/splash/docs/all.html). To configure the syntax highlighter further, such as adding line numbers, check out [this Hugo doc section](https://gohugo.io/getting-started/configuration-markup#highlight).

That is the only configuration required at the site level! You can now begin writing content for your site.

### Creating content
Make a new blog post by executing `hugo new posts/postnamehere/index.md` in your shell. At the top of the new markdown file, is what's called the front matter. The front matter is the page's metadata that determines how Hugo and noesis generate the HTML for your post. Below you can find what the front matter should contain for a new post and what each of the parameters mean.

```yaml
---
title: "The title of the post"
date: date the post was generated (automatically generated)
description: "Description of the post (displayed in the post's card)"
categories: ["Add comma separated categories here", "another category"]
toc: if the post should include a table of contents (true, false)
displayInMenu: if the post should show up in the navigation menu (true, false)
displayInList: if the post should be listed on the home page and category pages (true, false)
draft: if the post is a draft (true, false)
resources:
- name: featuredImage
  src: "Filename of the post's featured image, used as the card image and the image at the top of the article"
  params:
    description: "Description for the featured image, used as the alt text"
    attribution:
      name: "Name of person to attribute image to"
      link: "optional URL to persons site"
---
```

The `displayInMenu` and `displayInList` parameters are used to determine where your content is displayed. Posts typically have displayInMenu set to false so that the post is not a menu option, and displayInList set to true so it shows up on the homepage's list of posts and in category page lists. An About Me page, on the other hand, would have displayInMenu set to true and displayInList set to false.  That will allow the About Me page to be accessible from the menu but not displayed in the homepage's list of posts.

The `categories` parameter is used to group similar posts in category pages. Category pages are accessible from the menu and list all posts within the same category.

Add an interesting description and a good image to each post to get the most value from this theme.

Noesis takes advantage of [page bundles](https://gohugo.io/content-management/page-bundles/) to optimize your images for your site.  This may require you to update the way your content is structured, also see [content organization](https://gohugo.io/content-management/organization/).  Use the `image` and `smallimg` shortcodes to take full advantage of image optimization.  The `featuredImage` resource must exist in the post's page bundle if you want the post card and article header image to appear.

Posts are written in markdown. You can find how to write in markdown from this [markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

### Further customization

The homepage is configured through `content/_index.md`. In addition to the standard heading and subtext, it supports optional `about`, `writingTitle`, and `writingSubtitle` front matter fields.

```yaml
---
title: "This is the main heading text in big letters"
date: the date
description: "This is the subtext below the main heading in smaller letters"
about: |
  Short bio shown in the home page about rail.
writingTitle: "Recent Writing"
writingSubtitle: "Short text shown below the home page post-list heading"
---
```

### Learn  More

To learn more about noesis, visit [noesis's Github page](https://github.com/josephhutch/noesis). To learn more about Hugo, visit [Hugo's website](https://gohugo.io/).
