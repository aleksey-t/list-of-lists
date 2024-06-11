import { FC } from "react";
import { observer,  } from "mobx-react-lite"
import { ListProps } from "./types";
import ListItem from "./ListItem";

const List: FC<ListProps> = observer (({ store }) => {
  return (
    <div className="list-container">
      <div>List root</div>
      {store.list.map(({ id, value }) => (
        <ListItem
          id={id}
          value={value}
          key={id}
        />
      ))}
        <button onClick={()=>{
            store.addListItem({
                value: 'test item 1',
                id:'1'
            })
        }}>add list item</button>
    </div>
  );
});

export default List;
