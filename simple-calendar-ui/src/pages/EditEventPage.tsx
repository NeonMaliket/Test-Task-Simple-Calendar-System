import type { FunctionComponent } from "react";
import { useParams } from "react-router-dom";


const EditEventPage: FunctionComponent = () => {
    const { id } = useParams<string>()

    return (<>
        EDIT EVENT {id}
    </>);
}

export default EditEventPage;