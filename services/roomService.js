const moment = require('moment')

class RoomService {

    // Check data get by /timetables
    // Check is open boolean and if the date wanted is between opening/closing time.
    //return boolean
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

    // Check data get by /reservations
    // Check is date time is not reserved by another group.
    // return boolean
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

    //Check all conditions
    //return boolean
    static isAvailableAfterAllCheck(isOpenInOpeningTime, isAvailableAtThisTime) {
        return isOpenInOpeningTime && isAvailableAtThisTime;
    }
}

module.exports = RoomService;
