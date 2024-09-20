import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum UserRole {
  PADEIRO = 'padeiro',
  CLIENTE = 'cliente',
}

@Entity('users')
export class UserInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    type: 'varchar',
    length: 50,
  })
  role: UserRole;
}
