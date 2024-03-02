import { Link, useSearchParams } from "react-router-dom";
import { Input } from "../Input/Input"
import { useForm } from "react-hook-form"
import { HeaderContainer } from "./style";


export const Header = () => {
    const {register, handleSubmit} = useForm();
    const [, setSearchParams] = useSearchParams();

    const handleSearch = (data) => {
        setSearchParams(data)
    }

  return (
    <HeaderContainer>
        <Link to="/register">Register</Link>
        <form onSubmit={handleSubmit(handleSearch)}>
            <Input 
                id="search"
                placeholder="Search"
                {...register("search")}
            />
        </form>
    </HeaderContainer>
  )
}
