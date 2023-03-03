import { useNavigate } from "react-router-dom"
import ButtonComp from "../button/ButtonComp"
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import './navigate.scss'


export default function NavigatePage() {

    const navigate = useNavigate()

    const goBack =()=>{
        navigate(-1)
    }

    const goForward =()=>{
        navigate(1)
    }
    

  return (
    <div className="navigate">
        <ButtonComp className='btn-navigate' onClick={ goBack } > <AiOutlineArrowLeft/> back</ButtonComp>
        <ButtonComp className='btn-navigate' onClick={ goForward } > forward <AiOutlineArrowRight/> </ButtonComp>
    </div>
  )
}
