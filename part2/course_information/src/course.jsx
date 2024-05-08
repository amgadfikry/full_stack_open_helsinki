import Header from './header.jsx';
import Content from './content.jsx';
import Total from './total.jsx';

const Course = ({course}) => {
  return (
    <>
      {
        course.map(el =>
          <div key={el.id}>
            <Header name={el.name} />
            <Content content={el.parts} />
            <Total content={el.parts} />
          </div>
        )
      }
    </>
  )
}

export default Course