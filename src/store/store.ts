import {computed, makeObservable, observable} from "mobx";
import {ListItem} from "../components/types";

export class ObservableListStore {
  list: ListItem[] = [];

  constructor() {
    makeObservable(this, {
      list: observable,
        listCount: computed,
    });
  }

  get listCount(){
      return this.list.length;
  }

  addListItem(listItem: ListItem){
      this.list.push(listItem);
  }
}

export const observableListStore = new ObservableListStore();
