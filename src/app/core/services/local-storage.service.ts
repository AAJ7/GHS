import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  BS: BehaviorSubject<boolean> = new BehaviorSubject(false)
  constructor() { }

  setLocalStorage(key: string, value: string) {
    localStorage.setItem(key, value)
  }

  getLocalStorage(key: string) {
    return localStorage.getItem(key)
  }

  deleteLocalStorage(key: string) {
    localStorage.removeItem(key)
  }

  clearAllLocaleStoage() {
    localStorage.clear()
  }

  ///


}
