import fetch from 'isomorphic-fetch';
import Error from 'next/error';
import Layout from '../components/Layout'

export async function getServerSideProps({req,  res, query}) {
 const storyId = query.id;
  let story;
  try {
    const res = await fetch(`https://node-hnapi.herokuapp.com/item/${storyId}`)
    story = await res.json()
  } catch(e) {
    console.log(e)
    story = null;
  }
  return { props: {story} }
}

const Story = (props) => {
  const { story } = props;
  if(!story) {
    return <Error statusCode={503}/>
  }

  const renderComment = (comment) => {
    if(comment) {
      if(comment.comments) {
      return (
        <ul key={comment.id}>
        <li>
          <h5>{comment.user} - <strong>{comment.time_ago}</strong></h5>
          <p dangerouslySetInnerHTML={{__html : comment.content}} />
        </li>
        {comment.comments.map(renderComment)}
        </ul>
      )
      } else {
        return (
          <ul key={comment.id}>
            <li>
              <h5>{comment.user} - <strong>{comment.time_ago}</strong></h5>
              <p dangerouslySetInnerHTML={{__html : comment.content}} />
            </li>
          </ul>
        )
      }
    }
  }


 return (
  <div>
    <Layout title={story.title} backButton>
      <h1>{story.title} <strong>{story.time_ago}</strong></h1>
      <p>{story.details}</p>
      <h3>Comments:</h3>
      {story.comments.map(renderComment)}
    </Layout>
  </div>
 )
}

export default Story;