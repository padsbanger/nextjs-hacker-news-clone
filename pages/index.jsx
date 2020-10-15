import React from "react";
import Error from 'next/error';
import StoryList from '../components/StoryList';
import Layout from '../components/Layout';
import Link from 'next/link';
import fetch from 'isomorphic-fetch';

export async function getServerSideProps({query}) {
  console.log(query);
  let stories;
  let page;
  try {
    page =  Number(query.page) || 1;
    const res = await fetch(`https://node-hnapi.herokuapp.com/news?page=${page}`)
    stories = await res.json()

    // Pass data to the page via props
  } catch(e) {
    stories = [];
    console.log(e)
  }
  return { props: {stories, page} }

}

const Index = ({stories, page}) =>  {
  console.log(stories, page)
  if(!stories) {
    return <Error />
  }
  return (
    <Layout title="Hacker news">
      <footer>
       <Link href={`/?page=${page + 1}`}><a>Get more news</a></Link>
     </footer>
     <StoryList stories={stories} />
    </Layout>
  )
};

export default Index;
