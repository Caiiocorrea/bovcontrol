import { ILoadAccountTokenRepository, LOAD_ACCOUNT_TOKEN_REPOSITORY } from "@/domain/gateways/load-account-token-repository";
import { ILoadAccountTokenService } from "@/domain/use-cases/authentication/dto/load-account-token-dto";
import { DECRYPT_REPOSITORY, IDecrypt } from "@/domain/gateways/decryp-repositoryt";
import { Service, Adapter } from "@tsclean/core";

@Service()
export class LoadAccountTokenService implements ILoadAccountTokenService {

    constructor(
        @Adapter(DECRYPT_REPOSITORY) private readonly decrypt: IDecrypt,
        @Adapter(LOAD_ACCOUNT_TOKEN_REPOSITORY) private readonly loadAccountTokenRepository: ILoadAccountTokenRepository
    ) {
    }

    async loadToken(token: string): Promise<ILoadAccountTokenService.Result> {
        let accessToken: string;

        try {
            accessToken = await this.decrypt.decrypt(token);
        } catch (e) {
            return null;
        }

        if (accessToken) {
            const account = await this.loadAccountTokenRepository.loadToken(accessToken["account"]);
            console.log("service", account)
            if (account) return account;
        }

        return null;
    }
}