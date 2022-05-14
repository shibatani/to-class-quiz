type User = {
  name: string;
  age: number;
};

function createUser(name: string, age: number): User {
  if (name === "") {
    thrownewError("名前は空にできません！");
  }

  return {
    name,
    age
  };
}

function getMessage(user: User, message: string): string {
  return `${user.name}(${user.age})「${message}」`;
}

const uhyo = new User("uhyo", 26);
//"uhyo(26)「こんにちは」"と表示される
console.log(uhyo.getMessage("こんにちは"));
