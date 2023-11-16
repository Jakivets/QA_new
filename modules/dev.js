import { Employee } from "./employee.js";

export class Dev extends Employee {
    constructor(id, salary) {
        super(id, salary);
        this._id = id;
    }

    get id() {
        return this._id;
    }

    set id(newId) {
        this._id = newId;
    }

    #jobType = `I am a Dev`;

    getJobType() {
        return this.#jobType
    }

    static returnArrayOfDevs(...args) {
        let arrayOfDevs = [];

        args.forEach(obj => {
            if (obj instanceof Dev) {
                arrayOfDevs.push(obj);
            }
        });

        return arrayOfDevs;
    }
}