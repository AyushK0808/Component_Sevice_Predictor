import { IsString, IsInt } from 'class-validator';

export class AssignMachineDto {
  @IsString()
  machineId: string;

  @IsInt()
  userId: number;
}