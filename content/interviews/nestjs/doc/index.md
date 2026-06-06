---
title: NestJS Interview Questions
---

## What is NestJS and why use it?

NestJS is a progressive Node.js framework built with TypeScript and inspired by Angular. It uses a modular architecture, dependency injection, and decorators to make server-side development more scalable, maintainable, and testable.

## Core concepts

### Modules
- Modules organize application features into cohesive units.
- Every NestJS application has at least one root module (`AppModule`).
- Use `@Module()` to declare providers, controllers, and imported modules.

### Providers and Dependency Injection
- Providers are classes annotated with `@Injectable()`.
- NestJS uses dependency injection to manage class instances and dependencies.
- Use constructor injection to inject services into controllers or other providers.

### Controllers and Services
- Controllers handle incoming HTTP requests and return responses.
- Services contain business logic and are injected into controllers.
- Keep controllers thin and delegate processing to services.

## Request lifecycle and execution context

- NestJS processes requests through a pipeline of middleware, guards, pipes, interceptors, filters, and finally controller handlers.
- Execution context provides access to the request, response, route handler, and class.
- Interceptors can transform results or handle cross-cutting concerns like logging.

## Pipes, Guards, Interceptors, and Filters

### Pipes
- Transform and validate incoming request data.
- Built-in pipes include `ValidationPipe`, `ParseIntPipe`, and `DefaultValuePipe`.
- Create custom pipes by implementing the `PipeTransform` interface.

### Guards
- Determine whether a request is allowed to proceed.
- Commonly used for authentication and authorization.
- Implement the `CanActivate` interface.

### Interceptors
- Wrap around request handling to modify responses or add behavior.
- Use interceptors for caching, timing, logging, or transforming output.

### Exception Filters
- Handle thrown exceptions and format error responses.
- Use built-in filters like `HttpExceptionFilter` or create custom ones by implementing `ExceptionFilter`.

## Advanced NestJS topics

### Middleware
- Middleware functions execute before route handlers.
- Useful for logging, request parsing, or authentication initialization.
- Apply middleware globally or to specific routes using `configure()` in a module.

### Custom Decorators
- Create reusable parameter decorators with `createParamDecorator()`.
- Use custom decorators to extract request data or add metadata.
- Examples: `@User()`, `@CurrentUser()`, or `@Pagination()`.

### Microservices
- NestJS supports microservice transport layers like TCP, Redis, NATS, and Kafka.
- Use `ClientsModule` and `ClientProxyFactory` to create microservice clients.
- Implement message patterns with `@MessagePattern()` and `@EventPattern()`.

### GraphQL
- NestJS integrates with GraphQL through `@nestjs/graphql`.
- Use schema-first or code-first approaches.
- Decorate classes with `@ObjectType()`, `@Field()`, `@Resolver()`, and `@Query()`.

## Performance and architecture

- Apply caching with `CacheModule` and custom cache stores.
- Use `@Global()` modules for shared services like logging or configuration.
- Leverage `nestjs/config` for environment-based configuration.
- Use lazy module loading and separate feature modules to keep the app modular.

## Testing in NestJS

- Unit test providers, controllers, and services with Jest.
- Use `Test.createTestingModule()` to build a testing module.
- Use `supertest` for end-to-end tests with a Nest application instance.

## Sample question list

- Explain the difference between `@Module()`, `@Injectable()`, and `@Controller()`.
- How do you implement role-based authorization in NestJS?
- What is the purpose of the `ExecutionContext` object?
- When should you use a pipe versus a guard?
- How does NestJS support microservices and inter-service communication?
- How would you structure a large NestJS application using feature modules?
- Describe how to write a custom interceptor and when it is useful.
- What strategies would you use to optimize NestJS API performance?
- How can you handle exceptions globally in NestJS?
- What is the difference between GraphQL schema-first and code-first in NestJS?

## Useful tips for interview preparation

- Focus on architectural patterns and NestJS internals.
- Be ready to discuss dependency injection, modular design, and request lifecycle.
- Practice writing sample controllers, services, guards, and custom decorators.
- Know when to use built-in NestJS features versus custom implementations.
