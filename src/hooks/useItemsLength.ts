import {ItodoItem} from "../store/constants/typesTodo";
import {useSelector} from "react-redux";
import {StoreType} from "../store/store";

const useItemsLength = (): number => {
  const items: ItodoItem[] = useSelector(
    (state: StoreType) => state.todoStore.todos,
    (newItems, oldItems): boolean => {
      const isDifferent = oldItems.some((item, index) => {
        return item.completed !== newItems[index].completed
      });
      return (newItems.length === oldItems.length) && !isDifferent;
    });

  return items.filter(item => !item.completed).length;
};

export default useItemsLength;
