const moment = require('moment')

class RoomService {

    static isRoomIsOpenAtThisTime(apiData, date) {
        let data = Object.assign(apiData.timetables);
        let isOpenInOpeningTime = false;
        for(const dKey of data) {
            if(moment(date) >= moment(dKey.opening) && moment(date) <= moment(dKey.closing) && moment(date).add(1,'h') <= moment(dKey.closing)) {
                isOpenInOpeningTime = true;
                break;
            }
        }
        return apiData.open && isOpenInOpeningTime;
    }

    static isRoomAvailableAtThisTime(apiData, date) {
        let data = Object.assign(apiData.reservations);
        let isAvailableAtThisTime = true;
        for(const dKey of data) {
             if(moment(date) < moment(dKey.reservationEnd) && moment(date).add(1,'h') > moment(dKey.reservationStart)) {
                 isAvailableAtThisTime = false;
                 break;
             }
        }
        return isAvailableAtThisTime;
    }

    static isAvailableAfterAllCheck(isOpenInOpeningTime, isAvailableAtThisTime) {
        return isOpenInOpeningTime && isAvailableAtThisTime;
    }
}

module.exports = RoomService;
