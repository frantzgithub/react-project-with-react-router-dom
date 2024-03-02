import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { api } from "../../services/api";
import { ContainerPreview } from "./style";

export const Preview = () => {
  const { id } = useParams();

  const [recipes, setRecipes] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getRecipes() {
      try {
        const response = await api.get(`/recipes/${id}`);
        console.log(response);
        setRecipes(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getRecipes();
  }, [id]);

  if (loading) {
    return <p>search for a food</p>;
  }

  if (!recipes) {
    return <p>there is no recipe</p>;
  }

  return (
      <ContainerPreview>
        <div className="image-container">
        <img src={recipes.image} alt={recipes.category} />
        </div>
          <div className="text-container">
            <h2>Preview</h2>
            <div>
              <h3>id:</h3>
              <p>{recipes.id}</p>
            </div>
            <div>
              <h3>category:</h3>
              <p>{recipes.category}</p>
            </div>
            <div>
              <h3>title:</h3>
              <p>{recipes.title}</p>
            </div>
            <Link to={`/info/${recipes.id}`}>More info</Link>
          </div>
      </ContainerPreview>
  );
};
