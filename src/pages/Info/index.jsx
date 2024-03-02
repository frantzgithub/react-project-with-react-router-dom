import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./style";
import { FaArrowLeftLong } from "react-icons/fa6";

export const Info = () => {
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
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    getRecipes();
  }, []);

  if(loading) {
    return <p>search for a food</p>
  }

  if (!recipes) {
    return <p>there is no recipe</p>;
  }

  return (
      <Container>
        <h1>Info</h1>
        <Link to="/home">
          <FaArrowLeftLong />
        </Link>
        <li className="container-info">
          <div className="image-container">
            <img src={recipes.image} alt={recipes.category} />
          </div> 
          <div className="text-container">
            <h2>Info about this book</h2>
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
          </div>
        </li>
        <p className="description">{recipes.description}</p>
      </Container>
  );
};
