import Alert  from "react-bootstrap/Alert";

const successAlert = (message) => {
    return (
        <Alert variant="success">
           <span class="font-weight-bold">Success!</span>  {message}
        </Alert>
    );
};
const infoAlert = (message) => {
    return (
        <Alert variant="info">
            <Alert.Heading>Heads Up!</Alert.Heading>
            <hr />
            {message}
        </Alert>
    );
};
const warningAlert = (message) => {
    return (
        <Alert variant="warning">
            <Alert.Heading>Caution!</Alert.Heading>
            <hr />
            {message}
        </Alert>
    );
};
const dangerAlert = (message) => {
    return (
        <Alert variant="danger">
            <Alert.Heading>Something Went Wrong !</Alert.Heading>
            <hr />
            {message}
        </Alert>
    );
};

const variants = {
    success: successAlert,
    info: infoAlert,
    warning: warningAlert,
    danger: dangerAlert,
}

const CustomAlert = ({variant, message}) => {
    return (
        variants[variant](message)
    )
}

export default CustomAlert;