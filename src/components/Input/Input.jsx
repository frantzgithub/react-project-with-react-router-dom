import { forwardRef } from "react"
import PropTypes from "prop-types"
import { Container } from "./style";


// eslint-disable-next-line react/display-name
export const Input = forwardRef(({label, id, error, ...rest}, ref) => {
    return (
        <Container>
            {label ? <label style={{color: "white"}} htmlFor={id}>{label}</label> : null }
            <input id={id} ref={ref} {...rest} />
            {error? <p>{error}</p>: null}
        </Container>
    );
});


Input.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    error: PropTypes.object,
}