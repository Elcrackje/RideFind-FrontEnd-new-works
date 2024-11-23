export class VehicleEntity {
    constructor({
                    id = 0,
                    vehicleName = "",
                    description = "",
                    category = { id: 0, name: "" },
                    status = ""
                }) {
        this.id = id;
        this.vehicleName = vehicleName;
        this.description = description;
        this.category = category;
        this.status = status;
    }
}
