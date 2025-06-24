import { useParams } from "react-router-dom";


const Appoinments = () => {
    const { _id } = useParams();
    console.log(_id);
    
    return (
        <div>
            this is appoinment{_id}
        </div>
    );
};

export default Appoinments;