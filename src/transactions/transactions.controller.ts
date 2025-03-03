import { Controller, Get } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
@Controller('transactions')
export class TransactionsController {
    constructor(private readonly transactionService: TransactionsService){}
    @Get('ethereum')
    async getEthTransaction(){
        const transactions = await this.transactionService.getETHTransaction();
        return transactions;
    } 

}
