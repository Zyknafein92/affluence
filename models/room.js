class Room {

    constructor(resourceId,available,timetable,reservations) {
        this._resourceId = resourceId;
        this._available = available;
        this._timetable = timetable
        this._reservations = reservations;
        this._available = available;
        this._resourceId = resourceId;
    }


    get resourceId() {
        return this._resourceId;
    }

    set resourceId(value) {
        this._resourceId = value;
    }

    get available() {
        return this._available;
    }

    set available(value) {
        this._available = value;
    }

    get opening() {
        return this._opening;
    }

    set opening(value) {
        this._opening = value;
    }

    get closing() {
        return this._closing;
    }

    set closing(value) {
        this._closing = value;
    }

    get reservations() {
        return this._reservations;
    }

    set reservations(value) {
        this._reservations = value;
    }
}

module.exports = Room;
