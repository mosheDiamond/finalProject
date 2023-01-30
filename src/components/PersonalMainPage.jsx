import { useCurrenUserInfo } from "../Context/CurrenUserInfoContext"
import { Link } from "react-router-dom";



export default function PersonalMainPage() {
  
    const {currenUserInfoState} = useCurrenUserInfo();
    

  return (
    <div dir="rtl" className="bg-light-indigo p-5 d-flex flex-column flex-md-row justify-content-evenly">
      <card><h1>{currenUserInfoState.pName} {currenUserInfoState.sName}</h1></card>
      <div className="d-flex col-8 col-md-3 flex-column  text-center  justify-content-between">
      {currenUserInfoState.childrensInfo.map((child,i)=>{
        return(<Link key={i} to={`../../child/${child.name}`}  className="col-12 text-center btn btn-light rounded-pill m-3">
                   <div className='col-12 text-dark text-decoration-none fs-4'>
                    {child.name}                    
                    </div>
                    </Link>)
                })}
    </div>
    </div>
  )
}
