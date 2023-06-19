import {  useState } from 'react'

const Form = ({setRecipes}) => {
  const [inputsIngredients, setInputsIngredients] = useState([])

  const addInput = () => {
    setInputsIngredients([...inputsIngredients, ''])
  }

  const addRecipe = (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    const ingredients = Array.from(formData.getAll('ingredients[]'))
    const nameRecipe = formData.get('nameRecipe')
    const timeRecipe = formData.get('timeRecipe')

    const inputFile = document.getElementById('imageRecipe')
    const file = inputFile.files[0]
    const reader = new FileReader()

    if (reader.result !== null) {
      reader.readAsBinaryString(file)

      reader.onload = function (e) {
        const image = btoa(reader.result)

        const recipe = {
          name: nameRecipe,
          time: timeRecipe,
          ingredients: ingredients,
          image: image
        }

        setRecipes((previousRecipes => [...previousRecipes, recipe]))
        setInputsIngredients([])

        event.target.reset()
      }
    } else {
      const recipe = {
        name: nameRecipe,
        time: timeRecipe,
        ingredients: ingredients,
        image: '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'
      }

      setRecipes((previousRecipes => [...previousRecipes, recipe]))
      setInputsIngredients([])

      event.target.reset()
    }
  }

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Nueva receta</h2>
      <div className="space-y-4">
        <form onSubmit={addRecipe}>
          <label className="block font-bold mb-2">Nombre de la receta</label>
          <input type="text" name="nameRecipe" placeholder="Pozole" autoComplete="off" className="border border-gray-300 rounded-md p-2 w-full"/>

          <label className="block font-bold mb-2 mt-2">Tiempo de preparación</label>
          <input type="text" name="timeRecipe" placeholder="3 minutos" autoComplete="off" className="border border-gray-300 rounded-md p-2 w-full "/>

          <label className="block font-bold mb-2 mt-2">Imagen</label>
          <input type="file" id="imageRecipe" name="imageRecipe" accept="image/*" className="border border-gray-300 rounded-md p-2 w-full "/>

          {inputsIngredients.map((input, index) => (
            <div key={index}>
              <label className="block font-bold mb-2 mt-2">Ingrediente {index + 1}</label>
              <input type="text" name={`ingredients[]`} autoComplete="off" placeholder={`Ingrediente ${index + 1}`} className="border border-gray-300 rounded-md p-2 w-full "/>
            </div>
          ))}

          <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Guardar</button>
          <button type="button"
                  className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 ml-1 rounded"
                  onClick={addInput}>
            Agregar ingrediente
          </button>
        </form>
      </div>
    </>
  )
}

export default Form
