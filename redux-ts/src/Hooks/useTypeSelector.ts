import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../state";

export const useSelectorHook: TypedUseSelectorHook<RootState> = useSelector;