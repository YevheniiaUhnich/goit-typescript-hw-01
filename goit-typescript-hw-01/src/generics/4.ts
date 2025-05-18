type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdate<T>(initialValues: Partial<T>) {
  console.log("Updated values:", initialValues);
}

export {};
