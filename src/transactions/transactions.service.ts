import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { firstValueFrom } from "rxjs";

@Injectable()
export class TransactionsService {
  constructor(private readonly httpService: HttpService) {}

  async getETHTransaction() {
    const infuraUrl = `https://mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`;
    try {
      const response = await firstValueFrom(
        this.httpService.get(infuraUrl, {
          params: {
            module: "txlist",
            action: "txlist",
            address: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e", 
            startblock: 0,
            endblock: 99999999,
            page: 1,
            offset: 10,
            sort: "desc",
          },
        }),
      );
      return response.data.result || [];
    } catch (error) {
      console.error("Error fetching transactions:", error);
      throw new Error("Failed to fetch Ethereum transactions");
    }
  }
}
