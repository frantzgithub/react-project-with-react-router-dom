import {useForm} from "react-hook-form";
import {useNavigate } from "react-router-dom"
import { Input } from "../../components/Input/Input";
import { api } from "../../services/api";
import { schema } from "./validator";
import {zodResolver} from "@hookform/resolvers/zod"
import { ContainerRegister } from "./style";





export const Register = () => {
    const {register, handleSubmit, formState: {errors}} = useForm({
      resolver: zodResolver(schema),
    });
    const navigate = useNavigate();

    const handleRegister = async (data) => {
      try {
          console.log(data)
          await api.post('/recipes', data)
          navigate('/home')
      } catch (error) {
          console.log(error)
      }
    }
    return (
          <ContainerRegister>
              <h1>Register a book</h1>
              <form onSubmit={handleSubmit(handleRegister)}>
                <fieldset>
                  <legend>Register</legend>
                    <Input 
                    label="Title" 
                    type="text" 
                    id="title" 
                    error={errors.title?.message}
                    placeholder="title" 
                    {...register("title")} />
                  <Input 
                    label="Category" 
                    type="text" 
                    id="category" 
                    placeholder="category" 
                    error={errors.category?.message}
                    {...register("category")} />
                  <Input 
                    label="Description" 
                    type="text" 
                    id="description" 
                    error={errors.description?.message}
                    placeholder="description" 
                    {...register("description")} />
                  <Input 
                    label="Image" 
                    type="text" 
                    id="image" 
                    placeholder="https://image.com" 
                    error={errors.image?.message}
                    {...register("image")} />
                </fieldset>
                
                <button type="submit">save</button>
              </form>
          </ContainerRegister>
    )
  }