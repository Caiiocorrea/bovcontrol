// import { AddFarmService } from "@/domain/use-cases/farm/add-farm-service"
// import { FarmMongooseRepositoryAdapter } from "@/infrastructure/driven-adapters/adapters/orm/mongoose/farm-mongoose-repository-adapter"
// import { AddFarmController } from "./add-farm-controller"

// describe('Teste Fazenda', () => {
//     it('Deve criar fazenda', async () => {
//         const farmMongooseRepositoryAdapter = IAddFarmRepository

//         const farm = ({
//             cnpj: "14432560000120",
//             socialReason: "Fazenda Bom Jesus",
//             fantasyName: "Fazenda Bom Jesus do Sul",
//             email: "financeiro@fazendabomjesus.com.br",
//             adress: {
//                 zipcode: "13213258",
//                 street: "Rua Victório Lourenzon",
//                 Number: 651,
//                 complement: "Ao lado da esquinas das fazendas",
//                 district: "Bairro das Fazendas",
//                 state: "São Paulo",
//                 city: "Jundiaí"
//             }
//         })

//         const farmMongooseRepositoryAdapter = new FarmMongooseRepositoryAdapter()
//         const sut = farmMongooseRepositoryAdapter.addFarmRepository(farm)

//         // const data = new Farm(farm)
//         // const farmMongooseRepositoryAdapter = new FarmMongooseRepositoryAdapter(data)

//         // const response = farmMongooseRepositoryAdapter.create()


//         expect(sut).toBeTruthy()
//     })
// })

const myBeverage = {
    delicious: true,
    sour: false,
};

describe('***CRUD Farm***', () => {
    test('add a farm', () => {
        expect(myBeverage.delicious).toBeTruthy();
    });

    test(`don't add farm alrealy exist`, () => {
        expect(myBeverage.sour).toBeFalsy();
    });

    test(`don't add farm alrealy exist`, () => {
        expect(myBeverage.sour).toBeFalsy();
    });
});
