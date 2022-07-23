import snoowrap from "snoowrap"

export function loginToReddit({username, password}: {username: string, password: string}) {
  const reddit = new snoowrap({
    userAgent: 'my test reddit app (created by u/DRJT)',
    clientId: 'NOPE',
    clientSecret: 'NOPE',
    username: username,
    password: password,
  })

  return reddit
}
