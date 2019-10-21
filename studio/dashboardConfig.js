export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5dae10388ff7d25494c05d20',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-fk6pyrzu',
                  apiId: '32f02f2a-d3cd-4f5e-9188-be544a3c7a7a'
                },
                {
                  buildHookId: '5dae10381175b3e68cc8b6e9',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-cn6idq1v',
                  apiId: 'd63276b3-09c7-4ee0-9fb1-5045a8307a3a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/elainen/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-cn6idq1v.netlify.com', category: 'apps'}
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
