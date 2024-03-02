import { Link } from "react-router-dom";
import { Container } from "./style";
import PropTypes from "prop-types";


export const Card = ({recipe}) => {
  return (
    <Container>
        <Link to={`${recipe.id}`}>
            <img src={recipe.image} alt={recipe.title} />
            <span>{recipe.title}</span>
            <span>{recipe.category}</span>
            </Link>
    </Container>
  );
};

Card.propTypes = {
  recipe: PropTypes.object
}