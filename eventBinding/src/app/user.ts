export class User {
  constructor(
    public email: string = '',
    public password: string = '',
    public created_at: Date = new Date(),
    public updated_at: Date = new Date()
  ) {}
}
