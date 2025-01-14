import { Injectable } from '@angular/core';
import { User } from 'src/app/entities/users';
import { MatTableDataSource } from '@angular/material/table';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor() { }

  dummyData: User[] = [
    {
      idUser: '000000000',
      name: 'Keneth Danilo',
      lastname: 'Mero Minchala',
      email: 'admin@gmail.com',
      password: 'admin123',
      rol: 'Administrator'
    },
    {
      idUser: '0151245245',
      name: 'Andrés Luis',
      lastname: 'Carvajal Lozano',
      email: 'andresito@gmail.com',
      password: 'pepitotrulo',
      rol: 'Client'
    },
    {
      idUser: '0954658913',
      name: 'Jorge Luis',
      lastname: 'Charco Aguirre',
      email: 'jorgito@gmail.com',
      password: 'pepitotrulo',
      rol: 'Client'
    },
    {
      idUser: '0957962158',
      name: 'Andrea Lisbeth',
      lastname: 'Romero Haro',
      email: 'andrea@gmail.com',
      password: 'pepitotrulo',
      rol: 'Client'
    }
  ];

  isAdmin(user: User): boolean {
    return user.rol.charAt(0) == 'A';
  }

  createUser(user: User) {
    this.dummyData.push(user);
  }

  getUsers(): User[] {
    return this.dummyData;
  }

  getUser(user: User): any {
    /* this.dummyData.find((obj) => {
      return obj.email == user.email && obj.password == user.password ? obj : undefined
    }); */
    /* return this.dummyData[this.dummyData.indexOf(user)]; */
  }

  modifyUser(userNew: User, userOld: User) {
    this.dummyData[this.dummyData.indexOf(userOld)] = userNew;
  }

  deleteUser(user: User) {
    this.dummyData.splice(this.dummyData.indexOf(user), 1)
  }

  getUserByEmail(email: string): User | undefined {
    return this.dummyData.find((user) => {
      return user.email === email;
    })
  }

  filterUsersRol(value: string): User[] {
    return this.dummyData.filter((obj) => {
      if (value == 'All') {
        return this.dummyData
      } else {
        return obj.rol == value
      }
    });
  }

}
