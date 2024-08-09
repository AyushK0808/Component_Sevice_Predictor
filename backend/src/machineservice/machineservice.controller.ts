import { Controller, Post, Body } from '@nestjs/common';
import {MachinesService} from './machineservice.service';
import { AssignMachineDto } from './machineservice.dto';

@Controller('machines')
export class MachinesController {
  constructor(private machinesService: MachinesService) {}

  @Post('assign')
  async assignMachineToUser(@Body() assignMachineDto: AssignMachineDto) {
    return this.machinesService.assignMachineToUser(
      assignMachineDto.machineId,
      assignMachineDto.userId,
    );
  }
}