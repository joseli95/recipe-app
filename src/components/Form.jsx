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
