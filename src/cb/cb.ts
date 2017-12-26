const cb = (next: any) => {
  return (err: any, data: any) => {
    if (err) {
      throw err;
    }
    next(data);
  };
};

export default cb;
