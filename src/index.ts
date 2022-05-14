// type User = {
//   name: string;
//   age: number;
// };

// function createUser(name: string, age: number): User {
//   if (name === "") {
//     thrownewError("名前は空にできません！");
//   }

//   return {
//     name,
//     age
//   };
// }

// const uhyo = createUser("uhyo",26);
// //"uhyo(26)「こんにちは」"と表示される
// console.log(getMessage(uhyo,"こんにちは"));

// 上記のオブジェクト&関数のソースをclass化させる

class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    if (name === "") {
      thrownewError("名前は空にできません！");
    }

    this.name = name;
    this.age = age;
  }

  getMessage(message: string): string {
    return `${this.name}(${this.age})「${message}」`;
  }
}

const uhyo = new User("uhyo", 26);
console.log(uhyo.getMessage("こんにちは"));

//getMessage関数を返すような関数を作成

function createUser(name: string, age: number) {
  if (name === "") {
    thrownewError("名前は空にできません！");
  }

  return (message: string) => {
    return `${name}(${age})「${message}」`;
  };
}

const getMessage = createUser("uhyo", 26);
console.log(getMessage("こんにちは"));
