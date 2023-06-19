const RecipeItem = ({recipe}) => {
  const {name, time, ingredients, image} = recipe
  return (
    <>
      <figure className="md:flex bg-white border-gray-50 border-2 rounded-xl p-8 md:p-0">
        <img className="w-44 md:rounded-none rounded-full mx-2 my-2 h-full" src={"data:image/*;base64,"+image} alt=""
             width="500" height="500"/>
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p className="text-lg font-medium">
                Nombre de la receta: {name}
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-sky-500 dark:text-sky-400">
                Tiempo de preparación: {time}
              </div>
              <div className="text-slate-700 dark:text-slate-500">
                Ingredientes:
                <ul className="list-disc">
                  {ingredients.map((ingredient, key) => (
                    <li key={key}>
                      {ingredient}
                    </li>
                  ))}
                </ul>

              </div>
            </figcaption>
          </div>
      </figure>
    </>
  )
}

export default RecipeItem
