import  LogoSmart  from "../Smart_Pocket_V2_Logo_Web_200x40px.svg";
import './TodoLoading.css'

const TodoLoading = ({Todo}) => {
    return (
        <div className=" TodoLoading">
        <img className="efect-logo " src={LogoSmart} alt='reactlogo' />
        </div>
    );
}

export { TodoLoading };