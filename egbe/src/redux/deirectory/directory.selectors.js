import { createSelector } from "reselect";

const selectDirectory = state => state.directory;

export const selectDic = createSelector(
    [selectDirectory],
    directory => directory.sections
)