const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)
// 새로운 node가 생성될 때 호출되는 함수. node를 extend하기 위해서 이 함수를 구현해야한다.
exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
      const slug = createFilePath({ node, getNode, basePath: `pages` })
      console.log('slug : ', slug)
      createNodeField({
        node,
        name: `slug`,
        value: slug,
      })
    }
  }
  exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
      query {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `)
  
    result.data.allMarkdownRemark?.edges.forEach(({ node }) => {
        console.log('tt : ', node.fields.slug)
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/components/blog-post.tsx`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
        },
      })
    })
  }