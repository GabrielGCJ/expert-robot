import { InMemoryUsersRepository } from "../../repositories/in-memory/InMemoryUsersRepository"
import { CreateUserUseCase } from "./CreateUserUseCase"
import { AppError } from "src/shared/errors/AppError"
import {CreateUserError} from "./CreateUserError"
let createUserUseCase: CreateUserUseCase
let inMemoryUsersRepository: InMemoryUsersRepository

describe("Create User", () => {


  beforeAll(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository()
    createUserUseCase = new CreateUserUseCase(inMemoryUsersRepository)
  })

  it("shoud be able to create a new user", async () => {

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

    const userCreate = await inMemoryUsersRepository.findByEmail(user.email)

    expect(userCreate).toHaveProperty("id")
  });

  it("should not be able to create a new category with name exists", async () => {

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

        const response = await createUserUseCase.execute({
          name: user.name,
          email: user.email,
          password: user.password
        })
        expect(response).toBe(201);
    }).rejects.toBeInstanceOf(CreateUserError)
  })
})
