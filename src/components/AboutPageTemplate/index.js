import React from 'react'
import Content from '../Content'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const AboutPageTemplate = ({title, content, contentComponent, meta_description}) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <Helmet>
        <title>{title} | Przedszkole nr 371</title>
      </Helmet>
      <main role='main' id='main' tabIndex='-1'>
        <section className='hero is-primary is-bold is-medium'>
          <div className='hero-body'>
            <div className='container'>
              <div className='columns'>
                <div className='column is-10 is-offset-1'>
                  <div className='section'>
                    <h1 className='title transparent-heading'>
                      {title}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='section'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='section'>
                  <PageContent className='content' content={content} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

export default AboutPageTemplate
