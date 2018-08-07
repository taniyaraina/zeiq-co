import React from 'react';
import Link from 'gatsby-link';

import WorkItem from '../components/WorkItem';

class WorkList extends React.Component {
  componentDidMount() {
    var $grid = jQuery('.project-listing .grid').masonry({
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      gutter: '.gutter-sizer',
      percentPosition: true,
      transitionDuration: '0.3s',
    });

    $grid.imagesLoaded().progress(function() {
      $grid.masonry('layout');
    });
  }

  render() {
    const { introVisible, workList, buttonVisible } = this.props;
    let activeItemIndex = 0;
    // console.log('workList', workList);

    return (
      <div className="project-listing col-12">
        <div className="grid clearfix">
          {introVisible && (
            <div className="grid-item grid-item-wide project-thumb welcome-message">
              <div className="inner">
                <h1>
                  Hi! We're <span className="text-color">ZEIQ</span>. A full
                  service digital agency who helps brands stand out. Checkout
                  our work.
                </h1>
                <Link to="/services/" className="button big">
                  All that we do&hellip;
                </Link>
              </div>
            </div>
          )}
          {workList.map(({ node }, index) => {
            activeItemIndex++;
            let size = '';
            if (activeItemIndex === 3) {
              size = 'large';
              activeItemIndex = 0;
            }
            return <WorkItem key={node.id} size={size} item={node} />;
          })}
          <div className="grid-sizer" />
          <div className="gutter-sizer" />
        </div>
        {buttonVisible ? (
          <p className="extra-margin-top text-center">
            <Link to="/work/" className="button white big has-arrow">
              View all our work
            </Link>
          </p>
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default WorkList;
