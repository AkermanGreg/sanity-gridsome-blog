export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60ee43d03c9635b8750f0e2f',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-zjn893p3',
                  apiId: '65374b1c-cbeb-49be-8fb0-ffc93f8ed80a'
                },
                {
                  buildHookId: '60ee43d0e2a346b677afff4b',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-thhhdpg8',
                  apiId: '781e6b77-5ffc-4fa3-b0b1-56b562455354'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AkermanGreg/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-thhhdpg8.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
