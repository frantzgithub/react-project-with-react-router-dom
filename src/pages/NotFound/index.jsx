import { Link } from "react-router-dom"
import { Container } from "./style"

export const NotFound = () => {
  return (
    <Container>
        <div>
            <h2>404 Not Found</h2>
        </div>
        <div>
            <p>sorry, this page does not exist</p>
            <p>please click in this button below to go to the home page</p>
            <Link to='/'>Home page</Link>
        </div>
    </Container>
  )
}
