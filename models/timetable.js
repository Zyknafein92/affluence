
class Timetable {

    constructor(resourceId,opening,closing) {
        this._resourceId = resourceId;
        this._opening = opening;
        this._closing = closing;
    }

    get resourceId() {
        return this._resourceId;
    }

    set resourceId(value) {
        this._resourceId = value;
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
}

module.exports = Timetable;
