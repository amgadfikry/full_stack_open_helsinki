import Parts from './parts.jsx'

const Content = ({content}) => {
  return (
    <>
      {
        content.map(el => 
          <Parts key={content.id} content={el} />
        )
      }
    </>
  )
}

export default Content;
