import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicationStateService {

  private isMobile: boolean;

  constructor() {
    this.isMobile = window.innerWidth < 768;
  }

  public getIsMobile(): boolean {
    return this.isMobile;
  }
}
