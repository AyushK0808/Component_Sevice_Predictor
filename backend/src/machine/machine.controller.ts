import { Controller, Get, Param, Req, UseGuards } from '@nestjs/common';
import { MachineService } from './machine.service';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';

@Controller('machines')
@UseGuards(JwtAuthGuard)
export class MachineController {
  constructor(private machineService: MachineService) {}

  @Get('user-machines')
  getMachinesByUser(@Req() req) {
    const userId = req.user.id;
    return this.machineService.getMachinesByUser(userId);
  }

  @Get(':id')
  getMachineDetails(@Param('id') machineId: string) {
    return this.machineService.getMachineDetails(machineId);
  }
}
