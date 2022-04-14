
class Reservation {

    constructor(resourceId,reservationStart,reservationEnd) {
        this._reservationStart = reservationStart;
        this._reservationEnd = reservationEnd;
        this._resourceId = resourceId;
    }


    get resourceId() {
        return this._resourceId;
    }

    set resourceId(value) {
        this._resourceId = value;
    }

    get reservationStart() {
        return this._reservationStart;
    }

    set reservationStart(value) {
        this._reservationStart = value;
    }

    get reservationEnd() {
        return this._reservationEnd;
    }

    set reservationEnd(value) {
        this._reservationEnd = value;
    }
}

module.exports = Reservation;
