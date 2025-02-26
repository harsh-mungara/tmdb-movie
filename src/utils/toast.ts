import { TOAST_TYPE } from '@src/config/constants';
import Toast from 'react-native-toast-message';

export const toastFailed = (message: string) => {
  // console.error({message});
  Toast.show({
    type: TOAST_TYPE.FAILED,
    text1: message,
  });
};

export const toastSuccess = (message: string) => {
  // console.info({message});
  Toast.show({
    type: TOAST_TYPE.SUCCESS,
    text1: message,
  });
};
