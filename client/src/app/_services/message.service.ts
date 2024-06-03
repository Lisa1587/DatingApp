import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { getPaginatedResult, getPaginationHeaders } from './paginationHelper';
import { Message } from '../_models/messege';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  baseurl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getMessages(pageNumber: number, pageSize: number, container: string) {
    let params = getPaginationHeaders(pageNumber, pageSize);
    params = params.append('Container', container);
    return getPaginatedResult<Message[]>(this.baseurl + 'messages', params, this.http)
  }

  getMessageThread(username: string) {
    return this.http.get<Message[]>(this.baseurl + 'messages/thread/' + username);

  }

  sendMessage(username: string, content: string) {
    return this.http.post<Message>(this.baseurl+ 'messages',
     {recipientUsername: username, content})

  }

  deteleMessage(id: number) {
    return this.http.delete(this.baseurl + 'messages/' + id);
  }
}