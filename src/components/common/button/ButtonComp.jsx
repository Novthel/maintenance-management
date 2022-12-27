import './button.scss';

const ButtonComp = props => {
    const { type, className , ...rest} = props;
    
    return (
        
        <button type={type} className={className} {...rest}>
            { props.children }
        </button>
     
    )
}

export default ButtonComp;