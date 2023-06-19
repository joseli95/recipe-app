import RecipeItem from './RecipeItem'


const RecipeList = ({recipes}) => {
  return (
    <>
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>
            <RecipeItem recipe={recipe}/>
          </li>
        ))}
      </ul>
    </>
  )
}

export default RecipeList
