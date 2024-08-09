import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MachineService {
  constructor(private prisma: PrismaService) {}

  async getMachinesByUser(userId: number) {
    return this.prisma.machine.findMany({
      where: {
        ownerId: userId,
      },
    });
  }

  async getMachineDetails(machineId: string) {
    return this.prisma.machine.findUnique({
      where: {
        machine_id: machineId,
      },
    });
  }
}

