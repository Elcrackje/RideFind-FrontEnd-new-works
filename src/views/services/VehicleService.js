import http from "@/shared/services/http-common.js";

export class VehicleService {
    resourceEndpoint = "/vehicles";

    getAll() {
        return http.get(this.resourceEndpoint);
    }

    getById(id) {
        return http.get(`${this.resourceEndpoint}/${id}`);
    }

    create(vehicleResource) {
        return http.post(this.resourceEndpoint, vehicleResource);
    }

    update(id, vehicleResource) {
        return http.put(`${this.resourceEndpoint}/${id}`, vehicleResource);
    }

    delete(id) {
        return http.delete(`${this.resourceEndpoint}/${id}`);
    }
}
