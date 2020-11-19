declare module "MyTypes" {
    import {ActionType, StateType} from "typesafe-actions";
    // 1 for reducer, 1 for action creators
    export type ReducerState = StateType<typeof import("../redux/reducers").default>;
    export type RootAction = ActionType<typeof import("../redux/actions/action")>;
}