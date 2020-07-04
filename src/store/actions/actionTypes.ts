import * as actions from "./todoActions";

/*
* в файле создаются типы для actions
* чтобы не перебирать руками и не прописывать для каждого экшена свой тип
*/
type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;
