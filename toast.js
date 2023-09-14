import {
    ALERT_TYPE,
    Dialog,
    Toast,
  } from "react-native-alert-notification";


  export const popUp=(alertType,title,msg)=>{
    Toast.show({
        type: ALERT_TYPE[alertType],
        title: title,
        textBody: msg,
    })
  }

  export const dialogPop=(alertType,title,msg)=>{
    Dialog.show({
        type: ALERT_TYPE[alertType],
        title: title,
        textBody: msg,
        button: 'close',
    })
  }