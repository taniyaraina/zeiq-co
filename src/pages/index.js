import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

import WorkList from '../components/WorkList';

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: work } = data.allContentfulWork;
    return (
      <div>
        <Helmet title="zeiq" />
        <main id="content" className="white-background">
          <div className="container">
            <div className="row">
              <WorkList introVisible={true} workList={work} />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export const query = graphql`
  query HomeQuery {
    allContentfulWork(sort: { fields: [order] }) {
      edges {
        node {
          id
          title
          image {
            file {
              url
            }
          }
          description {
            description
          }
          url
        }
      }
    }
  }
`;
