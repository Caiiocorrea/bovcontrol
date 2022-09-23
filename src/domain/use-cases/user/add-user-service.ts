import { IUserRepository, USER_REPOSITORY } from "@/domain/gateways/user-repository";
import { HASH_REPOSITORY, IHashRepository } from "@/domain/gateways/hash-repository";
import { AddUserParams } from "@/domain/entities/user";
import { Adapter, Service } from "@tsclean/core";

@Service()
export class AddUserService {
    constructor(
        @Adapter(HASH_REPOSITORY) private readonly hash: IHashRepository,
        @Adapter(USER_REPOSITORY) private readonly addUserRepository: IUserRepository
    ) { }

    async addUserService(data: AddUserParams) {
        const userExist = await this.addUserRepository.checkEmail(data.email);
        if (userExist) return true;

        const hashPassword = await this.hash.hash(data.password);
        const user = await this.addUserRepository.addUserRepository({ ...data, password: hashPassword });
        if (user) return user;
    }
}