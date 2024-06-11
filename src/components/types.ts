import {ObservableListStore} from "../store/store";

export type ListItemProps = {
    value: string;
    key: string;
    id: string;
    childrenArray?: ListItemProps[];
}

export type ListProps = {
    store: ObservableListStore;
}

export type ListItem = {
    value: string;
    id: string;
}