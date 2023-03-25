import { RootState } from '../store'
import { createSelector } from 'reselect'


export const selectCurrentUser = (state:RootState) => state.user.currentUser



