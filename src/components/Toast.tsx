import { TOAST_TYPE } from '@src/config/constants';
import { format } from 'date-fns';
import React from 'react';
import ToastMain, {
  ErrorToast,
  SuccessToast,
} from 'react-native-toast-message';
import ToastMessage from './ToastMessage';
import { isIphoneWithNotch } from '@src/utils/isIphone';
import { verticalScaling } from '@src/utils/styleHelper';

const toastConfig = {
  [TOAST_TYPE.SUCCESS]: props => (
    <ToastMessage {...props} text2={`today ${format(new Date(), 'h:mm aa')}`} />
  ),

  [TOAST_TYPE.FAILED]: props => (
    <ToastMessage {...props} text2={`today ${format(new Date(), 'h:mm aa')}`} />
  ),
};

const Toast = () => (
  <ToastMain
    config={toastConfig}
    topOffset={isIphoneWithNotch() ? verticalScaling(35) : verticalScaling(35)}
    bottomOffset={50}
    visibilityTime={3000}
  />
);

export default Toast;
