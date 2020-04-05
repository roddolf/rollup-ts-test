const asyncFn = async (foo?: A) => {
    await Promise.resolve(foo ?? "foo");
};

class A {}
class B extends A {}

asyncFn(new B());