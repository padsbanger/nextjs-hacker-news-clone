import Link from 'next/link';

const StoryList = (props) => {
  return (
    <div className="story-list">
      {props.stories.map((story) => {
      return (
        <div key={story.id} className="story-item">
          <h2>{story.title} </h2>
          <p><strong>{story.points || 0} points</strong> <Link href={`/story?id=${story.id}`}><a>{story.comments_count} comments</a></Link></p>
        </div>
        )
      })}
      <style jsx>{`
        .story-list {
          padding: 0 1em;
        }
        .story-item {
          padding: 1em 0;
        }
        .h2 {
          font-size: 1rem;
          font-weight: 400;
          margin: 0;
          margin-bottom: 0.5em;
        }
        `}
      </style>
    </div>
  )
}

export default StoryList