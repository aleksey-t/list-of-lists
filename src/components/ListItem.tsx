import {FC} from "react";
import {ListItemProps} from "./types";

const ListItem: FC<ListItemProps> = ({value, key, id, childrenArray}) => {
    return <div key={key}>
        {value}
    </div>
};

export default ListItem
