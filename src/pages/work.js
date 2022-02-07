import { NextSeo } from 'next-seo';

import config from '../utils/config';
import Layout from '../components/Layout';
import PageHero from '../components/global/PageHero';
import WorkItem from '../components/work/WorkItem';

function WorkPage() {
  return (
    <Layout>
      <NextSeo
        title={config.siteName}
        description="A short description goes here."
      />
      <PageHero />
      <section className="section portfolio-grid-creative bg-white">
        <div className="container">
          <div className="row">
            <WorkItem />
            <WorkItem />
            <WorkItem />
            <WorkItem />
            <WorkItem />
            <WorkItem />
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default WorkPage;
