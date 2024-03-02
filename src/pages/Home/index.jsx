import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { Card } from "../../components/Card";
import { Outlet, useSearchParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { ContainerHome } from "./style";


export const Home = () => {
  const [recipes, setRecipes] = useState([]);

  const [searchParams] = useSearchParams()



useEffect(() => {
  async function getRecipes() {
    const response = await api.get('/recipes', {
      params: {
        category_like: searchParams.get("search") || ""
      }
    }, [searchParams.get("search")]);
    console.log(response)
    setRecipes(response.data);
  }
  getRecipes()
}, [searchParams.get("search")])
  return (
    <ContainerHome>
        <section>
            <Header />
            <Outlet />
            <h1>Choose a book</h1>
            <ul>
              {recipes.map((recipe) => {
                return (
                  <Card key={recipe.id} recipe={recipe} />
                )
              })}
            </ul>
        </section>
    </ContainerHome>
  )
}
