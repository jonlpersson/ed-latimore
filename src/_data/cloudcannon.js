module.exports = {
  _collection_groups: [
    {
      heading: 'Blogging',
      collections: ['posts', 'drafts']
    },
    {
      heading: 'Pages',
      collections: ['products', 'pages']
    }
  ],
  collections: {
    posts: {
      path: 'posts',
      _image_key: 'image',
      _image_size: 'contain',
      _icon: 'article',
      _enabled_editors: [
        'content'
      ]
    },
    pages: {
      path: '',
      _image_key: 'image',
      _image_size: 'contain',
      _icon: 'page',
      _enabled_editors: [
        'content',
        'data'
      ]
    }
  }
}