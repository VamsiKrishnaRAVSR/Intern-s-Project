export const sleep = () => {
  return new Promise<void>((res, rej) => {
    setTimeout(() => res(), 3000);
  });
};

export const updateURL = (url: string, id: number) => url.replace(":id", String(id)); 