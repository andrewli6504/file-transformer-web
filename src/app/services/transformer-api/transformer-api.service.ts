import { Injectable } from '@angular/core';
import { RestApiBaseService } from '../rest-api-base/rest-api-base.service';

@Injectable({
  providedIn: 'root'
})
export class TransformerApiService {

  constructor(
    private restApiBaseService: RestApiBaseService
  ) { }

  // ============================
  // Jobs API ===================
  // ============================
  getJobs() {
    return this.restApiBaseService.get("/getJobs");
  }

  createJob(jobRequest) {
    return this.restApiBaseService.post("/createJob", jobRequest);
  }

  updateJob(jobRequest) {
    return this.restApiBaseService.put("/updateJob", jobRequest);
  }
}
