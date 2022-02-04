Jekyll::Hooks.register :posts, :pre_render do |post, payload|
  docExt = post.extname.tr('.', '')
  post.content.gsub!(/!\[(.*)\]\(([^\)]+)?"(.*)"\)/, '<figure>{% responsive_image path: \2 alt: "\1" sizes:"(min-width: 768px) 640px, 88w" %}<figcaption>\3</figcaption></figure>')
  post.content.gsub! 'path: /', 'path: ' #you can probably optimise this a bit
end

## ![Claude Shannon riding a high wheel bicycle with trees in the background](/assets/images/posts/claude-shannon-2.jpg "Vintage Claude. Photo courtesy of the Shannon family")