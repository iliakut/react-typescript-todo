import * as todoActions from "./todoActions";
import * as filterActions from "./filterActions"

/*
* в файле создаются типы для actions
* чтобы не перебирать руками и не прописывать для каждого экшена свой тип
*/
type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type TodoActionTypes = ReturnType<InferValueTypes<typeof todoActions>>;
export type FilterActionTypes = ReturnType<InferValueTypes<typeof filterActions>>;
