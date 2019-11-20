import React from 'react'
import { Link } from 'gatsby'

const PostCard = ({ posts }) => {
  return (
    <div className='container'>
      {posts
        .filter(post => post.node.frontmatter.templateKey === 'article-page')
        .map(({ node: post }) => (
          <article
            className='postcard'
            key={post.id}
          >
            <div className='media-content'>
              {post.frontmatter.cover ? <img className='is-16by9 thumbnail-cover' src={post.frontmatter.cover} /> : null}
              <p className='content'>
                <Link className='title is-4 is-spaced has-text-primary' to={post.fields.slug}>
                  {post.frontmatter.title}
                </Link>
                <p className='subtitle is-6'>
                  {post.frontmatter.date}
                </p>
                <p className='subtitle is-6'>
                  {post.excerpt}
                  <br />
                  <br />
                  <Link className='button is-small' to={post.fields.slug}>
                    czytaj dalej →
                  </Link>
                </p>
              </p>
            </div>
          </article>
        ))}
    </div>
  )
}

export default PostCard
