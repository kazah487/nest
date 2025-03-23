import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
  @ApiProperty({example: 'user@mail.ru', description: 'Почтовый адрес'})
  @IsString({message: "Должно быть строкой"})
  @IsEmail({}, {message: "Некорректный Email"})
  readonly email: string;

  @IsString({message: "Должно быть строкой"})
  @Length(4, 16, {message: "Не меньше 4 и не больше 16"})
  @ApiProperty({example: '123456', description: 'Пароль пользователя'})
  readonly password: string;
}