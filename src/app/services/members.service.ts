import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { plainToClass } from 'class-transformer';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Member } from '../models/member';
import { MemberPreferences } from '../models/memberPreferences';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  public CurrentMember: Member = new Member();

  constructor(
    private http: HttpClient, 
    private globalService: GlobalService) {
  }

  public memberLoggedIn(token: string) {
    this.CurrentMember = new Member(token);
  }

  public memberLoggedOut() {
    this.CurrentMember = new Member();
  }

  public addOrUpdateMember(member: Member): Observable<number> {
   
    return this.http.post<number>(`${this.globalService.ApiUrl}/api/members/addMember`, member)
              .pipe(map(res => res),
                catchError((error: HttpErrorResponse) => {
                  return throwError("Arghhh");
              })
            );
  }

  public addOrUpdateMemberPrefs(prefs: MemberPreferences): Observable<void> {
   
    return this.http.post<void>(`${this.globalService.ApiUrl}/api/members/setPreferences`, prefs)
              .pipe();
  }

  public readMember(id: string): Observable<Member> {
    return this.http.get<Member>(`${this.globalService.ApiUrl}/api/members/${id}`)
              .pipe(map(res => 
                plainToClass(Member, res)
            ));
  }

  public readMembers(season: number): Observable<Member[]> {
    return this.http.get<Member[]>(`${this.globalService.ApiUrl}/api/members/GetForSeason/${season}`)
              .pipe(map(res => 
                plainToClass(Member, res)
            ));
  }

  public readAllMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(`${this.globalService.ApiUrl}/api/members`)
              .pipe(map(res => 
                plainToClass(Member, res)
            ));
  }

  public updateMember(member: Member): Observable<Member> {

    return this.http.post<Member>(`${this.globalService.ApiUrl}/api/members/update`, member)
              .pipe();
  }

  public resetPin(member: Member): Observable<number> {

    return this.http.post<number>(`${this.globalService.ApiUrl}/api/members/pinreset/${member.dbKey}`, '')
              .pipe(data => {
                return data;
              });
  }

}
