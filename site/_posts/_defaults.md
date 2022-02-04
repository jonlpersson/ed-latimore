---
date:
tags:
  - essay
image: /assets/images/posts/
title: ''
display_title: ''
description: ''
_inputs:
  tags:
    comment: These determine where on the website this post will appear
  image:
    type: image
    comment: Will be displayed in a 16:9 aspect ratio on the website
  title:
    type: textarea
    comment: Unformatted title displayed in search results and on social media
  display_title:
    type: markdown
    comment: Formatted title displayed on the website (shift+enter to force a line break)
    options:
      italic: true
      removeformat: true
  description:
    type: textarea
    comment: Displayed as lead paragraph on the website and description in search results
_select_data:
  tags:
    - essay
    - email
---

Below are shortcode widgets you can use to include captions underneath images, and to embed YouTube videos (copy-paste the video ID). You'll want to remove this text before you publish your article.

{% include widgets/youtube.html id="video ID goes here" %}
