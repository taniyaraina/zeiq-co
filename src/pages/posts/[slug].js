import { NextSeo } from 'next-seo';
import Image from 'next/image';
import md from 'markdown-it';

import { getPathsFromDir, getSingleMdx } from '../../utils/helpers';
import config from '../../utils/config';
import Layout from '../../components/Layout';
import PostHero from '../../components/blog/PostHero';

const BlogPost = ({ post }) => (
  <Layout>
    <NextSeo
      title={`${post.title} | ${config.siteTitle}`}
      description="A short description goes here."
    />
    <PostHero post={post} />
    <section className="section pb-0">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-n5 has-anim anim-delay-2">
            <Image
              src={post.featuredImage}
              alt={post.title}
              className="img-fluid"
              height={600}
              width={1400}
            />
          </div>
        </div>
      </div>

      <div className="section bg-white">
        <div className="container">
          <div className="row justify-content-center pt-5">
            <div className="col-lg-9">
              <div className="pr-0 pr-lg-5">
                <div className="content mb-5 pb-3">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: md().render(post.content),
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default BlogPost;

const filesDir = 'content/posts';

export async function getStaticPaths() {
  // Retrieve all our slugs
  const paths = getPathsFromDir(filesDir);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const { data: frontmatter, content } = getSingleMdx(
    `${filesDir}/${slug}.mdx`,
  );

  return {
    props: {
      post: { content, slug, ...frontmatter },
    },
  };
}