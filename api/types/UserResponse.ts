import { User } from 'entity/User';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class UserResponse {
  @Field(() => User, { nullable: true })
  user?: User;

  @Field(() => String, { nullable: true })
  token?: string;
}
