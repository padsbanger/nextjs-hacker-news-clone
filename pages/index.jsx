import React from "react";
import Error from 'next/error';
import StoryList from '../components/StoryList';
import Layout from '../components/Layout';
import Link from 'next/link';
import fetch from 'isomorphic-fetch';

export async function getServerSideProps({query}) {
  let stories;
  let page;
  try {
    page =  Number(query.page) || 1;
    const res = await fetch(`https://node-hnapi.herokuapp.com/news?page=${page}`)
    stories = await res.json()
  } catch(e) {
    stories = [];
    console.log(e)
  }
  return { props: {stories, page} }

}

const Index = ({stories, page}) =>  {
  if(!stories) {
    return <Error />
  }
  return (
    <Layout title="Hacker news">
     <StoryList stories={stories} />
     <footer>
       <Link href={`/?page=${page + 1}`}><a>Next page</a></Link>
     </footer>
    </Layout>
  )
};

export default Index;
