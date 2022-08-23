import { InMemoryUsersRepository } from "../../repositories/in-memory/InMemoryUsersRepository"
import { CreateUserError } from "../createUser/CreateUserError"
import { CreateUserUseCase } from "../createUser/CreateUserUseCase"
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase"

let createUserUseCase: CreateUserUseCase
let inMemoryUsersRepository: InMemoryUsersRepository
let authenticateUserUseCase: AuthenticateUserUseCase


describe("Authenticate User",() => {

  beforeAll(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository()
     createUserUseCase = new CreateUserUseCase(inMemoryUsersRepository)
     authenticateUserUseCase = new AuthenticateUserUseCase(inMemoryUsersRepository)
  })

  it("nanananananan", async () => {

    expect(async () => {

        const user = {
          name: "test",
          email: "test@test.com",
          password:"test"
        }

        await createUserUseCase.execute({
          name: user.name,
          email: user.email,
          password: user.password
        })

        const userX = await authenticateUserUseCase.execute({
          email: user.email,
          password: user.password
        })

        console.log(userX)


        expect(userX).toHaveProperty("token")
    }).rejects.toBeInstanceOf(CreateUserError)
  })





})
