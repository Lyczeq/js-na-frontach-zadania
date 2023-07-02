import { User } from './model/User';

export function hasAddress(user: User) {
  return Boolean(user.address);
}

type HasGivenAgeFn = (user: User) => boolean;

export function hasGivenAge(requiredAge: number): HasGivenAgeFn {
  return user => user.age >= requiredAge;
}

export const isAdult = hasGivenAge(18);
