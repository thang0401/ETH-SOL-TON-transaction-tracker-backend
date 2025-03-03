import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TransactionsModule } from './transactions/transactions.module';
import { TransactionService } from './transaction/transaction.service';
import { TransactionModule } from './transaction/transaction.module';
import { TransactionService } from './transaction/transaction.service';

@Module({
  imports: [TransactionsModule, TransactionModule],
  controllers: [AppController],
  providers: [AppService, TransactionService],
})
export class AppModule {}
