const Total = ({content}) => {
  const sum = content.reduce((acc, el) => acc + el.exercises, 0)
  return (
    <p>Number of exercises {sum}</p>
  )
}

export default Total;
