import { IUserRepository, USER_REPOSITORY } from "@/domain/gateways/user-repository";
import { UserModel } from "@/domain/entities/user";
import { Adapter, Service } from "@tsclean/core";

@Service()
export class GetUsersService {
    constructor(
        @Adapter(USER_REPOSITORY) private readonly getUsersRepository: IUserRepository
    ) {
    }

    async getUsersService(): Promise<UserModel[]> {
        return await this.getUsersRepository.getUsersRepository();
    }
}