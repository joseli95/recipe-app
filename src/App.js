import Form from './components/Form'
import RecipeList from './components/RecipeList'
import { useEffect, useState } from 'react'

function App() {
  const [recipes, setRecipes] = useState(JSON.parse(localStorage.getItem('recipes')) ?? [])

  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes))
  }, [recipes])

  return (
    <>
      <div className={'w-screen h-screen bg-blue-50 flex'}>
        <div className={'w-1/2 p-4'}>
          <Form setRecipes={setRecipes}/>
        </div>
        <div className={'w-1/2 p-4'}>
          <h2 className="text-2xl font-bold mb-4">Lista de recetas</h2>
          <div className={'overflow-y-auto'} style={{height: 600}}>
            <RecipeList recipes={recipes}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
