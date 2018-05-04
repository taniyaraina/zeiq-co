const _ = require (`lodash`);
const Promise = require (`bluebird`);
const path = require (`path`);
const slug = require (`slug`);
const slash = require (`slash`);

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
exports.createPages = ({graphql, boundActionCreators}) => {
  const {createPage} = boundActionCreators;

  return new Promise ((resolve, reject) => {
    resolve (
      graphql (
        `
          {
            allContentfulWork{
              edges{
                node{
                  slug
                  id
                }
              }
            }
          }
        `
      ).then (result => {
        if (result.errors) {
          reject (new Error (result.errors));
        }

        // Create image post pages.
        const workTemplate = path.resolve (`src/templates/work-page.js`);
        // We want to create a detailed page for each
        // Instagram post. Since the scrapped Instagram data
        // already includes an ID field, we just use that for
        // each page's path.
        _.each (result.data.allContentfulWork.edges, edge => {
          // Gatsby uses Redux to manage its internal state.
          // Plugins and sites can use functions like "createPage"
          // to interact with Gatsby.
          createPage ({
            // Each page is required to have a `path` as well
            // as a template component. The `context` is
            // optional but is often necessary so the template
            // can query data specific to each page.
            path: `/${slug (edge.node.slug)}/`,
            component: slash (workTemplate),
            context: {
              id: edge.node.id,
            },
          });
        });

        return;
      })
    );
  });
};
