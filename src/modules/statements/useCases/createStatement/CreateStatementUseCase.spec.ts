
// import { InMemoryUsersRepository } from "src/modules/users/repositories/in-memory/InMemoryUsersRepository"
// import { CreateUserUseCase } from "src/modules/users/useCases/createUser/CreateUserUseCase"
// import { AppError } from "src/shared/errors/AppError"
// import { InMemoryStatementsRepository } from "../../repositories/in-memory/InMemoryStatementsRepository"
// import { CreateStatementError } from "./CreateStatementError"
// import { CreateStatementUseCase } from "./CreateStatementUseCase"


// let createStatementUseCase: CreateStatementUseCase
// let inMemoryStatementsRepository: InMemoryStatementsRepository
// let inMemoryUsersRepository : InMemoryUsersRepository
// let createUserUseCase : CreateUserUseCase
// describe("Create Statement", () => {


//   beforeAll(() => {
//     inMemoryStatementsRepository = new InMemoryStatementsRepository()
//     inMemoryUsersRepository = new InMemoryUsersRepository()
//     createStatementUseCase = new CreateStatementUseCase(
//       inMemoryUsersRepository,
//       inMemoryStatementsRepository,
//       )
//     createUserUseCase = new CreateUserUseCase(inMemoryUsersRepository)
//   })

//   it("should not be able to add a new specification to a now-existent car", async  () => {


//     expect( async () => {

//       const userX = await createUserUseCase.execute({
//         name: "test",
//         email: "test@test.com",
//         password:"test"
//       })

//       console.log(userX.id)





//         await createStatementUseCase.execute({
//           user_id:userX.id as string,
//           type:,
//           amount:12,
//           description:"test"
//           })
//     }).rejects.toBeInstanceOf(CreateStatementError)
// })
// })
