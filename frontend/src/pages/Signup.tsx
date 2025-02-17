
import { Form } from "../components/Form";
import { Quotes } from "../components/Quotes";

function Signup(){
    return(
        <div className="h-screen w-full flex flex-row">
        <div className="h-screen w-1/2">
         <Form type={"signup"} />
        </div>
        <div className="h-screen w-1/2 ">
        <Quotes/>
        </div>
        </div>
    )
}
export default Signup;