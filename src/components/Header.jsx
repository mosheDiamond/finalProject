import { Link } from "react-router-dom";
import siteLogo from '../images/images.jpg'

export default function Header() {
  return (
    <div className="d-flex justify-content-evenly align items-center">
    <Link to={''} className='col-1'>
        <img src={siteLogo} alt=""  className="img-fluid " />
    </Link>
</div>
  )
}
