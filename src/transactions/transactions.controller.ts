import { Controller, Get } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
@Controller('transactions')
export class TransactionsController {
    constructor(private readonly transactionsService: TransactionsService){}
    @Get('ethereum')
    async getEthTransaction(){
        const transactions = await this.transactionsService.getETHTransaction();
        return transactions;
    } 

}
