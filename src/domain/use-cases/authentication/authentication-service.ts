// import { IUpdateAccessTokenRepository, UPDATE_ACCESS_TOKEN_REPOSITORY } from "@/domain/models/gateways/authentication/update-access-token-repository";
import { HASH_COMPARE_REPOSITORY, IHashCompare } from "@/domain/gateways/hash-compare-repository";
import { ENCRYPT_REPOSITORY, IEncrypt } from "@/domain/gateways/encrypt-repository";
import { IAuthenticationService } from "@/domain/use-cases/authentication/dto/authentication-dto";
import { IUserRepository, USER_REPOSITORY } from "@/domain/gateways/user-repository";
import { Adapter, Service } from "@tsclean/core";

@Service()
export class AuthenticationService implements IAuthenticationService {
    constructor(
        @Adapter(ENCRYPT_REPOSITORY) private readonly encrypt: IEncrypt,
        @Adapter(HASH_COMPARE_REPOSITORY) private readonly hashCompare: IHashCompare,
        @Adapter(USER_REPOSITORY) private readonly checkEmailRepository: IUserRepository,
        // @Adapter(UPDATE_ACCESS_TOKEN_REPOSITORY) private readonly updateAccessTokenRepository: IUpdateAccessTokenRepository
    ) {
    }

    async auth(data: IAuthenticationService.Params): Promise<IAuthenticationService.Result> {
        const account = await this.checkEmailRepository.checkEmail(data.email);
        const isValid = await this.hashCompare.compare(data.password, account.password);
        if (isValid) {
            const accessToken = await this.encrypt.encrypt(account.id, account.roles);
            // await this.updateAccessTokenRepository.updateToken(account.id, accessToken);
            return {
                accessToken,
                name: account.firstName
            }
        }

        return null;
    }
}