
const Button = (props:any):any => {

  const {buttonType,children}=props;
  console.log(buttonType);
  return (
    <button type="submit" className={`h-[45px] bg-[#473a2b] hover:bg-[#322618] w-full text-white rounded-[5px] 
    cursor-pointer ${props.buttonType === "secondary" ? "opacity-[85%]" : "" }`}>

      {children}

    </button>

  )
}

export default Button
