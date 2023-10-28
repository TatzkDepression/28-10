import { TURN_OFF, TURN_ON } from "../constant/spinner";

export const turnOnLoadingAction = (payload) => ({
  type: TURN_ON,
});
export const turnOfLoadingAction = (payload) => ({
  type: TURN_OFF,
});
