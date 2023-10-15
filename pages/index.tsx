import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import { CMS_NAME } from "../lib/constants";
import Image from "next/image";
import Navbar from "../components/navbar";
import Carousel from "../components/carousel";
import Divider from "../components/divider";
export default function Index({ allPosts: { edges }, preview }) {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);

  return (
    <Layout preview={preview}>
      <Navbar />
      <Intro />
      <Divider />
      {/* <Carousel /> */}
      <Head>
        <title>{` ${CMS_NAME}`}</title>
      </Head>

      <Container>
        <div className="mt-8 mb-8 md:container md:mx-auto">
          <div className="w-full flex justify-between">
            <div className="w-1/3 text-center relative">
              <img src="/img1.jpg" alt="Image 1" className="w-full" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-white font-grotesk mb-4">Craft Memories</p>
                <button className="bg-[#4FA05F] bg-opacity-[60%] text-white font-grotesk px-4 py-2 rounded-lg">
                  Set the Stage
                </button>
              </div>
            </div>
            <div className="w-1/3 text-center relative">
              <img src="/img3.jpg" alt="Image 2" className="w-full" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-white font-grotesk mb-4">Unforgettable Experience</p>
                <button className="bg-[#4FA05F] bg-opacity-[60%] text-white font-grotesk px-4 py-2 rounded-lg">
                  Book this Event
                </button>
              </div>
            </div>
            <div className="w-1/3 text-center relative">
              <img src="/img2.jpg" alt="Image 3" className="w-full" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-white font-grotesk mb-4">Cherish Love Ones</p>
                <button className="bg-[#4FA05F] bg-opacity-[60%] text-white font-grotesk px-4 py-2 rounded-lg">
                  Create Memories now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.featuredImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { allPosts, preview },
    revalidate: 10,
  };
};
