// from https://gist.github.com/gordonbrander/2230317
export const getUniquesString = (prefix?: string): string => {
  const res = `${Math.random().toString(36).substr(2, 9)}`;
  return prefix ? `${prefix}_${res}` : res;
};

export const validateEmail = (email: string): boolean => {
  //from http://emailregex.com/
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export const getRandomEmail = (): string => {
  const topLevelDomains = ['com', 'ru', 'net', 'org'];
  const randomDomain = topLevelDomains[Math.floor(Math.random() * topLevelDomains.length)];
  return `${getUniquesString()}@${getUniquesString()}.${randomDomain}`;
};