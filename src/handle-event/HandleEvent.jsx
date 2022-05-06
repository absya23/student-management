import React from "react";

export const handler = {
  handleConfirmCancelBtn: (confirmType) => {},
  handleClickEditBtn: (e, dataState, setDataState) => {
    if (e.target.classList.contains("edit-img")) {
      let index = +e.target.parentNode.getAttribute("data-set");
      let dataStateCopy = JSON.parse(JSON.stringify(dataState));
      dataStateCopy[index].Edit = true;
      setDataState(dataStateCopy);
    }
  },
  handleClickAddBtn: () => {
    document.querySelector(".row.add").style.display = "flex";
  },
};

export const helper = {
  generateID: (dataArr) => {
    const IDArr = dataArr.map((item) => item.ID);
    let newIDNum = Number(IDArr[IDArr.length - 1]) + 1;
    let newIDString;
    if (newIDNum < 10) {
      newIDString = `00${newIDNum}`;
    } else if (newIDNum < 100) {
      newIDString = `0${newIDNum}`;
    } else {
      newIDString = `${newIDNum}`;
    }

    return newIDString;
  },
  generateArrCopy: (dataArr) => {
    return JSON.parse(JSON.stringify(dataArr));
  },

  turnOnNotification: (type) => {
    switch (type) {
      case "edit": {
        document.querySelector(".confirm.edit .notification").style.display =
          "flex";
        break;
      }
      case "add": {
        document.querySelector(".confirm.add .notification").style.display =
          "flex";
        break;
      }
      case "delete": {
        document.querySelector(".confirm.delete .notification").style.display =
          "flex";
        break;
      }
      case "delete-all": {
        document.querySelector(
          ".confirm.delete-all .notification"
        ).style.display = "flex";
        break;
      }
    }
  },

  turnOnConfirm: (type) => {
    switch (type) {
      case "delete-all": {
        document.querySelector(".confirm.delete-all").style.display = "flex";
        break;
      }
      case "delete": {
        document.querySelector(".confirm.delete").style.display = "flex";
        break;
      }
      case "add": {
        document.querySelector(".confirm.add").style.display = "flex";
        break;
      }
      case "edit": {
        document.querySelector(".confirm.edit").style.display = "flex";
        break;
      }
    }
  },
  turnOnDetail: () => {
    document.querySelector(".detail").style.display = "flex";
  },
  turnOffConfirm: (type) => {
    switch (type) {
      case "edit": {
        document.querySelector(".confirm.edit").style.display = "none";
        break;
      }
      case "delete": {
        document.querySelector(".confirm.delete").style.display = "none";
        break;
      }
      case "delete-all": {
        document.querySelector(".confirm.delete-all").style.display = "none";
        break;
      }
      case "add": {
        document.querySelector(".confirm.add").style.display = "none";
        break;
      }
    }
  },
};
